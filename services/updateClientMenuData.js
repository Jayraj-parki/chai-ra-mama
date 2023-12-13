import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateClientMenuData = async ({_id, clientMenuName, clientMenuImage, clientMenuPrice, helper, setEditData, clearForm, setAlert }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        
        if (clientMenuName.trim() == ""||clientMenuPrice.trim()==""|| clientMenuImage=="") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
            return
        }
        else {
            let url = ""
            if (typeof clientMenuImage === "string" && clientMenuImage.includes("http")) {
                url = clientMenuImage
            }
            else if (clientMenuImage!="") {
                const imageRef = ref(storage, `images/${v4()+clientMenuImage.name  }`)
                const snapshot = await uploadBytes(imageRef, clientMenuImage);
                url = await getDownloadURL(snapshot.ref);
            }
            const result = await fetch("/api/admin/client-menu", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                    clientMenuName: clientMenuName,
                    clientMenuPrice:clientMenuPrice,
                    clientMenuImage: url,
                    authId: adminAuthData
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            // helper()
            clearForm()
            setEditData({ active: false, _id: "", title: "", image: "" })
        }
    }
    catch (err) {
        console.log("updateClientMenuData ERROR: " + err)
    }
}