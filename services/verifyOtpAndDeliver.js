import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';

export const  verifyOtpAndDeliver = async ({ orderId, userEmail, inputOtp, setAlert, helper,setOtpVerification ,end_url}) => {
    try {
        console.log(inputOtp)
        if (orderId?.trim() == "" || userEmail?.trim() == "" || inputOtp?.trim() == "") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
            return
        }
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)

        const result = await fetch(`/api/admin/${end_url}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                authId: adminAuthData,
                _id: orderId,
                userEmail,
                otp: inputOtp,
                activeStatus:"delivered"
            })
        })
        const data = await result.json()
        setAlert({ modalActive: true, workStatus: "done", message: data?.message })
        setOtpVerification({ active: false, orderId: "", email: "" })
        helper()
    }
    catch (err) {
        console.log("sendOrderOTP ERROR: " + err)

    }
}