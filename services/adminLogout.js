export const adminLogout=async({setActiveLink,logOutAdmin,setAlert})=>{
    try {
        const result = await fetch("/api/admin/logout", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await result.json()
        setActiveLink("")
        logOutAdmin()
    }
    catch (e) {
        console.log("error in logout"+e)
    }
}