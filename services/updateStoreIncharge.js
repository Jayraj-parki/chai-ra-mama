import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateStoreIncharge = async ({ _id, inchargeName, inchargePhone, inchargeEmail, helper, setEditData, clearForm }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (!adminAuthData?.authorized) {
            alert("Unautherized User can't perfrom Update Action")
            return
        }
        if (inchargeEmail.trim() == ""|| inchargeName.trim()==""|| inchargePhone.trim()==""||_id=="") {
            alert("Please fill all the fields")
        }
        else {
            console.log(_id)
            const result = await fetch("/api/admin/store-incharge", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                   inchargeEmail,
                   inchargeName,
                   inchargePhone
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({ active: false, _id: "", name: "", email: "",phone:"" })
        }
    }
    catch (err) {
        console.log("STORE INCHARGE UPDATE ERROR: " + err)
    }
}