import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
export const updateHeaderData = async ({ _id, headerImage, helper ,setEditData}) => {
    try {

        let url = ""
        if (typeof headerImage === "string" && headerImage.includes("http")) {
            url = headerImage
        }
        else if (headerImage != "") {
            const imageRef = ref(storage, `images/${v4()+headerImage.name  }`)
            const snapshot = await uploadBytes(imageRef, headerImage);
            url = await getDownloadURL(snapshot.ref);
        }
        const result = await fetch("/api/admin/headers", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
                headerImage: url,
            })
        })
        const data = await result.json()
        alert(data?.message)
        helper()
        setEditData({ active: false, image: "", title: "", _id: "" })

    }
    catch (err) {
        console.log("HEADER ERROR: " + err)
    }
}