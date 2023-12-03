import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const AddHomeBanner = async ({bannerImage, helper, clearForm, setAddData ,setAlert }) => {
    try {
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
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    bannerImage: url
                })
            })
            const data = await result.json()
            helper()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            clearForm()
            setAddData(false)

        }
    }
    catch (err) {
        setAlert({ modalActive: false, workStatus: "", message: "" })
    }
}