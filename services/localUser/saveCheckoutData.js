export const saveCheckoutData = async ({userId}) => {
    if (!userId) {
        alert("Oops! Something went wrong")
        return false
    }
    else {
        try {
            const result = await fetch("/api/user/purchase", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId,
                    purchaseTime:new Date()
                })
            })
            const data = await result.json()
            return data?.message
        }
        catch (e) {
            console.log("error in saveCheckoutData" + e)
            return null
        }
    }
}