import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const AddSubMenuData = async ({ parentId,itemPrice,itemName,itemImage ,helper,setAddData,clearForm}) => {
    try {
        if (parentId.trim() == ""|| itemName.trim()==""|| itemImage==""|| itemPrice.trim()=="") {
            alert("Please fill all the fields")
        }
        else {
            
            let url = ""
            if (typeof itemImage === "string" && itemImage.includes("http")) {
                url = itemImage
            }
            else if (itemImage!="") {
                const imageRef = ref(storage, `images/${itemImage.name + v4()}`)
                const snapshot = await uploadBytes(imageRef, itemImage);
                url = await getDownloadURL(snapshot.ref);
            }

            const result = await fetch("/api/admin/sub-menu", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    parentId: parentId,
                    itemImage: url,
                    itemName:itemName,
                    itemPrice:itemPrice
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setAddData(false)
        }
    }
    catch (err) {
        console.log("SUB MENU ERROR: " + err)
    }
}