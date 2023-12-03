import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateForceActionData = async ({ _id, clientKey, adminLock, request, end_url, clearForm, setActionModal, helper, setAlert }) => {
    try {
        setActionModal({ active: false })
        setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })

        if (!clientKey.trim() || !adminLock.trim()) {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please Enter required refrence number" })
            setActionModal({ active: false, _id: "", clientKey: "" })
            return
        }
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)


        if (adminAuthData?.authorized) {
            let METHOD = ""
            if (request == "approve") { METHOD = "DELETE" }
            else if (request == "reject") { METHOD = "PATCH" }
            if (METHOD != "") {

                const result = await fetch(`/api/admin/${end_url}`, {
                    method: METHOD,
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        _id: _id,
                        clientKey,
                        adminLock,
                        authId: adminAuthData
                    })
                })
                const data = await result.json()
                setAlert({ modalActive: true, workStatus: "done", message: data?.message })
                setActionModal({ active: false, _id: "", clientKey: "" })
                helper()
                clearForm()
            }
        }
        else {
            setAlert({ modalActive: true, workStatus: "failed", message: "Unautherized User can't perfrom Update Action" })
        }

    }
    catch (err) {
        console.log(`ERROR: ${end_url} ` + err)
    }
}