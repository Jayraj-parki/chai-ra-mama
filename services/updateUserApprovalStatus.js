import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateUserApprovalStatus = async (email, status, helper) => {
    const confirm = window.confirm("Do you want to update user approval Status to : " + status + "?")
    if (confirm) {
        try {
            const cookie = Cookies.get("teaToken")
            const adminAuthData = await checkAdminLoginToken(cookie)
            if (!adminAuthData?.authorized) {
                alert("Unautherized User can't perfrom Update Action")
                return
            }
            const result = await fetch("/api/admin/approve", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    status: status
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
        }
        catch (e) {
            console.log("error in updating user status" + e)
        }
    }
}