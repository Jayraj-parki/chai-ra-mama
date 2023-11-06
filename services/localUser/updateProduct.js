export const updateProduct = async ({_id,quantity,userId,update,totalPrice}) => {
    if (!userId || !_id ) {
        alert("Oops! Something went wrong")
        return false
    }
    else {
        try {
            const result = await fetch("/api/user/product", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id,
                    quantity,
                    userId,
                    update,
                    totalPrice
                })
            })
            const data = await result.json()
            if(data?.status==200) return true
            return false
        }
        catch (e) {
            console.log("error in update quantity" + e)
            return false
        }
    }
}