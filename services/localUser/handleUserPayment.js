import { getOrderId } from "../payment/getOrderId"
import { saveCheckoutData } from "./saveCheckoutData"
import { updateProduct } from "./updateProduct"

const fetchCheckoutPrice = async (userId) => {
    try {
        const result = await fetch(`/api/user/product/payment/?userId=${userId}`, { next: { revalidate: 1800 } })
        const data = await result.json()
        return data.price
    }
    catch (e) {
        console.log("error in fetchCheckoutPrice" + e)
        return -1
    }
}

const verifyPayement = async (orderId, paymentId, signature) => {
    try {
        const result = await fetch(`/api/payment/user-payment-handler/complete-payment`,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature
                })
            }
        )
        const data = await result.json()
        return data
    }
    catch (err) {
        console.log(`Error in ${end_url}` + err)
        return null
    }
}


export const handleUserPayment = async ({ firstName, lastName, address, email, contactNumber, setAlert }) => {
    try {
        const price = await fetchCheckoutPrice(email)
        if (price <= 0) {
            setAlert({ modalActive: true, workStatus: "failed", message: "Failed to checkout now, please try again later" })
            return
        }
        const orderId = await getOrderId("user", price)
        if (!orderId) {
            setAlert({ modalActive: true, workStatus: "failed", message: "Failed to checkout now, please try again later" })
            return
        }
        const paymentPromise = new Promise(async (resolve) => {
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: Number(price),
                currency: "INR",
                name: "Chai-ra-mama",
                description: `Payment for Product with orderId: ${orderId} `,
                image: "https://firebasestorage.googleapis.com/v0/b/chai-ra-mama.appspot.com/o/images%2F5fcdd537-a1e2-45cd-9471-0c7c430ca6c9banner.jpg?alt=media&token=cd4d0199-9256-488c-ad84-bb367e113763",
                order_id: orderId?.toString(),
                prefill: {
                    name: `${firstName} ${lastName}`,
                    email: `${email}`,
                    contact: `${contactNumber}`
                },
                handler: async (response) => {
                    const orderId = response.razorpay_order_id;
                    const paymentId = response.razorpay_payment_id;
                    const signature = response.razorpay_signature;
                    try {
                        const verification = await verifyPayement(orderId, paymentId, signature);

                        if (!verification) {
                            await updateProduct({ userId: email, _id: userId, update: "cancel" });
                            setAlert({ modalActive: true, workStatus: "failed", message: "Payment Failed" });
                        } else {
                            setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." });
                            await updateProduct({ userId: email, _id: email, update: "payment" });
                            await saveCheckoutData({ userId: email, setAlert});

                            setAlert({ modalActive: true, workStatus: "done", message: "Payment Successful" });
                        }
                        resolve();
                    } catch (error) {
                        console.error("Error during payment verification:", error);
                        resolve();
                    }
                },
                modal: {
                    ondismiss: async () => {
                        try {
                            await updateProduct({ userId: email, _id: email, update: "cancel" });
                        } catch (error) {
                            console.error("Error during ondismiss:", error);
                        } finally {
                            resolve();
                        }
                    },
                },
                notes: {
                    address: `${address}`,
                    theme: {
                        "color": " M#3399cc"
                    }
                }
            }
            const razor = new window.Razorpay(options);
            razor.open();
        })
        return paymentPromise;
    }
    catch (e) {
        console.log("handlePayment" + e)
        return
    }

}