export const removeFromCart = async ({uId}) => {
    if (!uId) {
        alert("Oops! Something went wrong")
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