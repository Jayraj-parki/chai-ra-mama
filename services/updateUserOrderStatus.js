import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateUserOrderStatus = async ({ _id, status, helper, setAlert }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        const result = await fetch("/api/admin/user-orders", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
               authId:adminAuthData,
               activeStatus:status 
            })
        })
        const data = await result.json()
        setAlert({ modalActive: true, workStatus: "done", message: data?.message })
        helper()
    }
    catch (err) {
        setAlert({ modalActive: false, workStatus: "done", message: "Internal Server down" })
 
        console.log("updateUserOrderStatus ERROR: " + err)
    }
}