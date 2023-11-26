import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateForceActionData = async ({ _id, clientKey, adminLock, request, end_url, clearForm, setActionModal, helper }) => {
    try {
        if(!clientKey||!adminLock.trim()){
            alert("Please Enter required refrence number")
            return
        }
        const confirm = window.confirm(`Do you want to ${request} this request?`)
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (confirm) {
            
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
                            authId:adminAuthData
                        })
                    })
                    const data = await result.json()
                    setActionModal({ active: false, _id: "", clientKey: "" })
                    alert(data?.message)
                    helper()
                    clearForm()
                }
            }
            else {
                alert("Unautherized User can't perfrom this Action")
            }
        }
    }
    catch (err) {
        console.log(`ERROR: ${end_url} ` + err)
    }
}