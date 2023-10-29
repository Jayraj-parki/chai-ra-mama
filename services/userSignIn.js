import Cookies from 'js-cookie';
export const userSignIn = async ({ email, password}) => {
    if (!email || !password) {
        alert("please fill all input field")
        return
    }
    else {
        try {
            const result = await fetch("/api/user/local-signin", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            })
            const data = await result.json()
            if (data?.status == 200) {
                Cookies.set("localUserToken", data?.token, {
                    expires: 1
                })
                alert(data?.message)
                return data?.token
            }
            else {
                alert(data?.message)
                return null
            }
        }
        catch (e) {
            console.log("error in signIn" + e)
        }
    }
}