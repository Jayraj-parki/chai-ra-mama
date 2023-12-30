import { storage } from "@/firebase";
import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const updateBannerImage = async ({ _id, bannerImage, helper, clearForm, setEditData,setAlert }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        
        let url = ""
        if (bannerImage == "") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        }
        else { 

            if (typeof bannerImage === "string" && bannerImage?.includes("http")) {
                url = bannerImage
            }
            else if (bannerImage != "") {
                const imageRef = ref(storage, `images/${v4()+bannerImage?.name  }`)
                const snapshot = await uploadBytes(imageRef, bannerImage);
                url = await getDownloadURL(snapshot.ref);
            }
            const result = await fetch("/api/admin/home-banner", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: _id,
                    bannerImage: url,
                    authId:adminAuthData
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            clearForm()
            setEditData({ active: false, _id: "", image: "" })
        }
    }
    catch (err) {
        console.log("HOME BANNER ERROR: " + err)
        setAlert({ modalActive: false, workStatus: "", message: "" })
    }
}