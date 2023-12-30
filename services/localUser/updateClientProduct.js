export const updateClientProduct = async ({_id,quantity,userId,update,totalPrice,setAlert}) => {
    if (!userId || !_id ) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        return false
    }
    else {
        try {
            const result = await fetch("/api/user/client-product", {
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