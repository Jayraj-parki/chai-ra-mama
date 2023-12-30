export const saveClientCheckoutData = async ({userId,setAlert,storeId}) => {
    if (!userId ||!storeId) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        return false
    }
    else {
        try {
            const result = await fetch("/api/user/client-purchase", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId,
                    storeId,
                    purchaseTime:new Date()
                })
            })
            const data = await result.json()
            return data?.message
        }
        catch (e) {
            console.log("error in saveClientCheckoutData" + e)
            return null
        }
    }
}