export const getInTouch = async ({ firstName, lastName, email, message ,setFirstName,setLastName,setEmail,setMessage}) => {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
        alert("please fill all the fields correctly")
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
            alert(data?.message)
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