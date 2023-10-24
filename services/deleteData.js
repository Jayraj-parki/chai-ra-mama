export const DeleteDataService = async ({ _id, helper ,end_url}) => {
    try {
        const confirm = window.confirm("Do you want to delete this Item?")
        if (confirm) {
            const result = await fetch(`/api/admin/${end_url}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: _id,
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper() 
        }
    }
    catch (err) {
        console.log(`ERROR: ${end_url} ` + err)
    }
}