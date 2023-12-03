import Cookies from 'js-cookie';
export const userSignIn = async ({ email, password,setAlert}) => {
    if (!email || !password) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
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
                setAlert({ modalActive: true, workStatus: "done", message: data?.message })
                return data?.token
            }
            else {
                setAlert({ modalActive: true, workStatus: "done", message: data?.message })
                return null
            }
        }
        catch (e) {
            console.log("error in signIn" + e)
        }
    }
}