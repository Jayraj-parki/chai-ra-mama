export const AddFaqData = async ({faqQuestion,faqAnswer,helper, clearForm, setAddData }) => {
    try {
        if (faqQuestion == "" || faqAnswer.trim()=="") {
            alert("Please fill all the fields")
        }
        else {
            const result = await fetch("/api/admin/franchise-faq", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    faqQuestion:faqQuestion,
                    faqAnswer:faqAnswer
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setAddData(false)
        }
    }
    catch (err) {
        console.log("FAQ ERROR: " + err)
    }
}