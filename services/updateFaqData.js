export const updateFaqData = async ({ _id, faqQuestion,faqAnswer,helper, clearForm, setEditData }) => {
    try {
        if (faqQuestion == "" || faqAnswer.trim()=="") {
            alert("Please fill all the fields")
        }
        else {
            const result = await fetch("/api/admin/franchise-faq", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: _id,
                    faqQuestion:faqQuestion,
                    faqAnswer:faqAnswer
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({ active: false, _id: "", question:"",answer:"" })
        }
    }
    catch (err) {
        console.log("FAQ ERROR: " + err)
    }
}