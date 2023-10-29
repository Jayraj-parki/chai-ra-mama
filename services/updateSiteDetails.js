import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { v4 } from "uuid"
import Cookies from 'js-cookie';
import { checkAdminLoginToken } from './checkAdminLoginToken';
export const updateSiteDetails = async ({ _id, siteName, sitePhone, siteEmail, siteFromEmail, siteForgetPassEmail, siteCloseOn, siteOpenHr, siteLogo, siteFavIcon, siteAddress, siteMap }) => {
    try {
        const cookie = Cookies.get("teaToken")
        const adminAuthData = await checkAdminLoginToken(cookie)
        if (!adminAuthData?.authorized) {
            alert("Unautherized User can't perfrom Update Action")
            return
        }
        let logo = ""
        let icon=""
        if (typeof siteLogo === "string" && siteLogo.includes("http")) {
            logo = siteLogo
        }
        else if (siteLogo != "") {
            const imageRef = ref(storage, `images/${v4() + siteLogo.name}`)
            const snapshot = await uploadBytes(imageRef, siteLogo);
            logo = await getDownloadURL(snapshot.ref);
        }
        if (typeof siteFavIcon === "string" && siteFavIcon.includes("http")) {
            icon = siteFavIcon
        }
        else if (siteFavIcon != "") {
            const imageRef = ref(storage, `images/${v4() + siteFavIcon.name}`)
            const snapshot = await uploadBytes(imageRef, siteFavIcon);
            icon = await getDownloadURL(snapshot.ref);
        }

        const result = await fetch("/api/admin/site-details", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
                siteName,
                sitePhone,
                siteEmail,
                siteFromEmail,
                siteForgetPassEmail,
                siteCloseOn,
                siteOpenHr,
                siteLogo:logo,
                siteFavIcon:icon,
                siteAddress,
                siteMap
            })
        })
        const data = await result.json()
        alert(data?.message)
     }

    catch (err) {
        console.log("SITE DETAILS ERROR: " + err)
    }
}