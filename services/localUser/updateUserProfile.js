export const updateUserProfile = async ({ firstName, lastName, address, contactNumber, email }) => {
    if (!firstName || !lastName || !email) {
        alert("Please fill Name and email fields")
        return false
    }
    else {

        try {
            const result = await fetch("/api/user/local-signup", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    firstName, lastName, address, contactNumber, email
                })
            })
            const data = await result.json()
            alert(data?.message)
            return true
        }
        catch (e) {
            console.log("error in updateUserProfile" + e)
            return false
        }

    }
}