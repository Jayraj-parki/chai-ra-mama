import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const getForceActionData = async ({ setData, end_url, request }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (adminAuthData?.authorized) {
            const result = await fetch(`/api/admin/${end_url}`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: adminAuthData?.id,
                    request
                })  
            })
            const data = await result.json()
            setData(data?.data)
        }
    }
    catch (err) {
        console.log("getForceActionData ERROR: " + err)
    }
}