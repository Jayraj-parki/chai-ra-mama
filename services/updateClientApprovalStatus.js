import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateClientApprovalStatus = async ({ _id, email, status, helper, setAlert }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        let METHOD=""
        if (status=="approve") METHOD="PATCH"
        else METHOD="DELETE"

        const result = await fetch("/api/admin/client-approval", {
            method: METHOD,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
               authId:adminAuthData,
               email
            })
        })
        const data = await result.json()
        setAlert({ modalActive: true, workStatus: "done", message: data?.message })
        helper()

    }
    catch (err) {
        console.log("updateClientApprovalStatus ERROR: " + err)
    }
}