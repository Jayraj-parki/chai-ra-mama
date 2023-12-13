export const removeFromClientCart = async ({uId}) => {
    if (!uId) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        return false
    }
    else {
        try {
            const result = await fetch("/api/user/client-product", {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                   _id:uId
                })
            })
            const data = await result.json()
            return true
        }
        catch (e) {
            console.log("error in removing client cart" + e)
            return false
        }
    }
}