import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const AddClientFbData = async ({clientImage, clientName,clientComment,helper, clearForm, setAddData }) => {
    try {
        let url = ""
        if (clientImage == "" || clientComment.trim()==""||clientName.trim()=="") {
            alert("Please fill all the fields")
        }
        else {

            if (typeof clientImage === "string" && clientImage?.includes("http")) {
                url = clientImage
            }
            else if (clientImage != "") {
                const imageRef = ref(storage, `images/${clientImage?.name + v4()}`)
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
                    clientImage:url
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
        console.log("CLIENT FEEDNACK ERROR: " + err)
    }
}