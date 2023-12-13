export const sendOrderOTP = async ({ orderId,userEmail,setAlert}) => {
    try {
        if(userEmail?.trim()==""){
            setAlert({ modalActive: true, workStatus: "failed", message: "Email Id is not mentioned" })
        }
        const result = await fetch("/api/admin/client-orders", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                orderId,
               userEmail 
            })
        })
        const data = await result.json()
        if(data?.status>200){
            setAlert({ modalActive: true, workStatus: "failed", message: data?.message})
            return false
        }
        else {return true}
    }
    catch (err) {
        console.log("sendOrderOTP ERROR: " + err)
        return false
    }
}