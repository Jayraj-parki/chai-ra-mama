import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const AddClientFbData = async ({clientImage, clientDesignation,clientName,clientComment,helper, clearForm, setAddData,setAlert }) => {
    try {
        let url = ""
        if (clientImage == "" || clientComment.trim()==""||clientName.trim()==""||clientDesignation.trim()=="") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please fill all the fields" })
        }
        else {

            if (typeof clientImage === "string" && clientImage?.includes("http")) {
                url = clientImage
            }
            else if (clientImage != "") {
                const imageRef = ref(storage, `images/${v4()+clientImage?.name  }`)
                const snapshot = await uploadBytes(imageRef, clientImage);
                url = await getDownloadURL(snapshot.ref);
            }
            const result = await fetch("/api/admin/client-feedback", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    clientName:clientName,
                    clientComment:clientComment,
                    clientDesignation:clientDesignation,
                    clientImage:url
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
        console.log("CLIENT FEEDNACK ERROR: " + err)
    }
}