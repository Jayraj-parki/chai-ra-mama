export const userSignUp = async ({ firstName, lastName, email, password ,confirmPassword}) => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("please fill all the fields correctly")
        return false
    }
    else if (password != confirmPassword) {
        alert("Confirm password not matched")
        return false
    }
    else {
        try {
            const result = await fetch("/api/user/local-signup", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    firstName, lastName, email, password
                })
            })
            const data = await result.json()
            alert(data?.message)
            return true
        }
        catch (e) {
            console.log("error in user signUp" + e)
            return false
        }
    }
}