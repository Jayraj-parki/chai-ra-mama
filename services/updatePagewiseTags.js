import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updatePagewiseTags = async ({ _id, pageId, metaTitle ,metaDesc, metaKeyword, helper, setEditData, clearForm }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (!adminAuthData?.authorized) {
            alert("Unautherized User can't perfrom Update Action")
            return
        }
        if (metaTitle.trim() == "" || metaKeyword.trim()==""||metaDesc.trim()=="") {
            alert("Please fill all the fields")
        }
        else {
            const result = await fetch("/api/admin/pagewise-tag", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: _id,
                    metaTitle:metaTitle,
                    metaKeyword:metaKeyword,
                    metaDesc:metaDesc
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({  active: false, title: "",_id:"",pId:"", keyword: "", desc: ""})
        }
    }
    catch (err) {
        console.log("PAGE WISE TAGS ERROR: " + err)
    }
}