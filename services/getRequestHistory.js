import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const getRequestHistory = async ({ setData, end_url }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        const result = await fetch(`/api/admin/${end_url}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: adminAuthData?.id
            })
        })
        const data = await result.json()
        setData(data?.data)

    }
    catch (err) {
        console.log("getRequestHistory ERROR: " + err)
    }
}