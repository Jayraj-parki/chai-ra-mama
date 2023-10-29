export const localUserLogout=async({setActiveLink,logOutUser})=>{
    try {
        const result = await fetch("/api/user/logout", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await result.json()
        setActiveLink("")
        logOutUser()
    }
    catch (e) {
        console.log("error in logout"+e)
    }
}