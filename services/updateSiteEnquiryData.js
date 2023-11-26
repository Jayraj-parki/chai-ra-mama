import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateSiteEnquiryData = async ({ _id, contactName,contactEmail,contactPhone,helper, clearForm, setEditData }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
       
        if (contactName.trim() == "" || contactEmail.trim()==""||contactPhone.trim()=="") {
            alert("Please fill all the fields")
        }
        else {
            const result = await fetch("/api/admin/site-enquiry", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: _id,
                    contactName:contactName,
                    contactEmail:contactEmail,
                    contactPhone:contactPhone,
                    authId: adminAuthData
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({ active: false, _id: "", name: "",email:"",phone:"" })
        }
    }
    catch (err) {
        console.log("SITE ENQUIRY ERROR: " + err)
    }
}