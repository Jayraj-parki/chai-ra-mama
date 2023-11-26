import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateSubMenuData = async ({_id, itemPrice,itemName,itemImage,helper,setEditData,clearForm}) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        
        if (itemPrice.trim() == ""|| itemImage==""|| itemName.trim()=="") {
            alert("Please fill all the fields")
        }
        else {
            let url = ""
            if (typeof itemImage === "string" && itemImage.includes("http")) {
                url = itemImage
            }
            else if (itemImage!="") {
                
                const imageRef = ref(storage, `images/${v4()+itemImage.name  }`)
                const snapshot = await uploadBytes(imageRef, itemImage);
                url = await getDownloadURL(snapshot.ref);
            }
            
            const result = await fetch("/api/admin/sub-menu", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                    itemImage: url,
                    itemName:itemName,
                    itemPrice:itemPrice,
                    authId: adminAuthData
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({ active: false, _id: "", title: "", image: "",price:"" })
        }
    }
    catch (err) {
        console.log("SUB MENU ERROR: " + err)
    }
}