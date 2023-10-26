export const updateUserApprovalStatus = async (email, status, helper) => {
    const confirm = window.confirm("Do you want to update user approval Status to : " + status + "?")
    if (confirm) {

        try {
            const result = await fetch("/api/admin/approve", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    status: status
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
        }
        catch (e) {
            console.log("error in updating user status" + e)
        }
    }
}