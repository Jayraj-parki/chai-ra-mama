import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const DeleteDataService = async ({ _id, helper, end_url, setAlert }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)

        const result = await fetch(`/api/admin/${end_url}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
                authId: adminAuthData
            })
        })
        const data = await result.json()
        setAlert({ modalActive: true, workStatus: "done", message: data?.message })

    }
    catch (err) {
        console.log(`ERROR: ${end_url} ` + err)
        setAlert({ modalActive: false, workStatus: "", message: "" })
    }
}