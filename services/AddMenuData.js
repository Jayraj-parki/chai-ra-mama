import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const AddMenuData = async ({ menuName,menuImage,menuContent ,helper,setAddData,clearForm,setAlert}) => {
    try {
        if (menuName.trim() == ""|| menuImage==""|| menuContent.trim()=="") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        }
        else {
            
            let url = ""
            if (typeof menuImage === "string" && menuImage.includes("http")) {
                url = menuImage
            }
            else if (menuImage!="") {
                const imageRef = ref(storage, `images/${v4()+menuImage.name  }`)
                const snapshot = await uploadBytes(imageRef, menuImage);
                url = await getDownloadURL(snapshot.ref);
            }

            const result = await fetch("/api/admin/menu", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    menuName: menuName,
                    menuImage: url,
                    menuContent:menuContent
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            helper()
            clearForm()
            setAddData(false)
        }
    }
    catch (err) {
        console.log("MENU ERROR: " + err)
    }
}