import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateUserApprovalStatus = async (email, status, helper, setAlert) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (!adminAuthData?.authorized) {
            setAlert({ modalActive: true, workStatus: "failed", message: "Unautherized User can't perfrom Update Action" })
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
        setAlert({ modalActive: true, workStatus: "done", message: data?.message })
        helper()
    }
    catch (e) {
        console.log("error in updating user status" + e)
    }
}