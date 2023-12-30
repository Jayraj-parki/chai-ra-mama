import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateLinkTagData = async ({ _id, facebook, instagram, whatsapp, youtube, metaTitleTag, metaKeyword, metaDesc,setAlert }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (!adminAuthData?.authorized) {
            setAlert({ modalActive: true, workStatus: "failed", message: "Unautherized User can't perfrom Update Action" })
            return
        }
        const result = await fetch("/api/admin/site-link-tags", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
                facebook, instagram, whatsapp, youtube, metaTitleTag, metaKeyword, metaDesc
            })
        })
        const data = await result.json()
        setAlert({ modalActive: true, workStatus: "done", message: data?.message })
    }

    catch (err) {
        console.log("LINK TAG DATA ERROR: " + err)
    }
}