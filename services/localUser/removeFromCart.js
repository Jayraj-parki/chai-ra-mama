export const removeFromCart = async ({uId}) => {
    if (!uId) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        return false
    }
    else {
        try {
            const result = await fetch("/api/user/product", {
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
            console.log("error in removing cart" + e)
            return false
        }
    }
}