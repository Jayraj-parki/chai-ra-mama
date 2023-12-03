export const updateUserProfile = async ({ firstName, lastName, address, contactNumber, email ,setAlert}) => {
    if (!firstName || !lastName || !email) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
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
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            return true
        }
        catch (e) {
            console.log("error in updateUserProfile" + e)
            return false
        }

    }
}