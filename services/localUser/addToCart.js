export const addToCart = async ({userCred,productId,setAlert}) => {
    if (!userCred || !productId ) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please Login to purchase products" })
        return false
    }
    else {
        try {
            const result = await fetch("/api/user/product", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                   userId:userCred,productId
                })
            })
            const data = await result.json()
            return data?._id
        }
        catch (e) {
            console.log("error in add to cart" + e)
            return null
        }
    }
}