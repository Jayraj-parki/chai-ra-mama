export const deleteFaqData = async ({ _id, helper }) => {
    try {
        const confirm = window.confirm("Do you want to delete this Item?")
        if (confirm) {
            const result = await fetch("/api/admin/franchise-faq", {
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
        console.log("FAQ ERROR: " + err)
    }
}