export const SentMessage = async ({ contactMessage,contactEmail,contactName,contactSubject,setAlert}) => {
    if (!contactMessage.trim()||!contactEmail.trim()||!contactName.trim()||!contactSubject.trim()) {
        setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
    }
    else {
        try {
            const result = await fetch("/api/admin/site-enquiry", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    contactMessage,contactEmail,contactName,contactSubject
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
        }
        catch (e) {
            console.log("error in Sending message" + e)
        }
    }
}