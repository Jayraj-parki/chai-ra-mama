import Cookies from 'js-cookie';
export const adminSignIn = async ({ email, password, setAlert }) => {
    if (!email || !password) {
        setAlert({modalActive:true,workStatus:"failed",message:"Please fill all the fields"})
        return null
    }
    else {
        try {
            const result = await fetch("/api/admin/signIn", {
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
                Cookies.set("teaToken", data?.token, {
                    expires: 1
                })
                setAlert({modalActive:true,workStatus:"progress",message:data?.message})
                return data?.token
            }
            else {
                setAlert({modalActive:true,workStatus:"failed",message:"Invalid Credentials"})
                return null
            }
        }
        catch (e) {
            console.log("error in signIn" + e)
        }
    }
}