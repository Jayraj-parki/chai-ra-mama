export const getInTouch = async ({ firstName, lastName, email, message ,setFirstName,setLastName,setEmail,setMessage}) => {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
    }
    else {
        try {
            const result = await fetch("/api/home/homeGetInTouch", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    firstName, lastName, email, message
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            setFirstName("")
            setLastName("")
            setEmail("")
            setMessage("")
        }
        catch (e) {
            console.log("Error in get in touch")
        }
    }
}