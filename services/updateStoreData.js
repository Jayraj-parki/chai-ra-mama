import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateStoreData = async ({_id, storeAddress,storeMap,storePhone,helper,setEditData,clearForm}) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (!adminAuthData?.authorized) {
            alert("Unautherized User can't perfrom Update Action")
            return
        }
        if (storeAddress.trim() == ""|| storeMap.trim()==""|| storePhone.trim()=="") {
            alert("Please fill all the fields")
        }
        else {
            console.log(_id)
            const result = await fetch("/api/admin/stores", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                    storeAddress:storeAddress,
                    storePhone:storePhone,
                    storeMap:storeMap
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({ active: false, _id: "", address: "", map: "",phone:"" })
        }
    }
    catch (err) {
        console.log("STORE ERROR: " + err)
    }
}