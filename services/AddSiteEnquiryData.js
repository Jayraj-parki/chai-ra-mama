export const AddSiteEnquiryData = async ({ contactName,contactEmail,contactPhone, helper, clearForm, setAddData }) => {
    try {
        if (contactName.trim() == "" || contactEmail.trim() == "" || contactPhone.trim() == "") {
            alert("Please fill all the fields")
        }
        else {
            const result = await fetch("/api/admin/site-enquiry", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    contactName:contactName,
                    contactEmail:contactEmail,
                    contactPhone:contactPhone
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
        console.log("SITE ENQUIRY ERROR: " + err)
    }
}