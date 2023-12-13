import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const AddClientMenu = async ({ clientMenuName, clientMenuImage, clientMenuPrice, helper, clearForm, setAddData, setAlert }) => {

    try {
        if (clientMenuName.trim() == "" || clientMenuPrice.trim() == "" || clientMenuImage == "") {
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
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    clientMenuName: clientMenuName,
                    clientMenuPrice:clientMenuPrice,
                    clientMenuImage: url
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
        console.log("clientMenuAdd ERROR: " + err)
    }
}