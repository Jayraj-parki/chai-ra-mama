export const adminSignUp = async ({ firstName, lastName, email, password ,confirmPassword,setAlert}) => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        return false
    }
    else if (password != confirmPassword) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Confirm password not matched" })
        return false
    }
    else {
        try {
            const result = await fetch("/api/admin/signUp", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    firstName, lastName, email, password
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            return true
        }
        catch (e) {
            console.log("error in signUp" + e)
            return false
        }
    }
}