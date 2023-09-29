export const checkUserLogin = async () => {
    try {
        const result = await fetch("/api/admin/auth", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await result.json()
        return data
    }
    catch (e) {
        console.log("error in Event")
        return null
    }
}