import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const updateMenuData = async ({_id, menuName,menuImage,menuContent ,helper,setEditData,clearForm}) => {
    try {
        if (menuName.trim() == ""|| menuImage==""|| menuContent.trim()=="") {
            alert("Please fill all the fields")
            
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
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                    menuName: menuName,
                    menuImage: url,
                    menuContent:menuContent
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({ active: false, _id: "", title: "", image: "",content:"" })
        }
    }
    catch (err) {
        console.log("MENU ERROR: " + err)
    }
}