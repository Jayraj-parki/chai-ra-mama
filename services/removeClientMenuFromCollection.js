import Cookies from 'js-cookie';
import { checkUserLoginToken } from './localUser/checkUserLoginToken';
export const removeClientMenuFromCollection = async ({ _id, fetchCollection, setAlert }) => {

    try {
        
        const cookie = Cookies.get("localUserToken")
        const userAuth = await checkUserLoginToken(cookie)
        const result = await fetch("/api/user/client-menu-collection", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
                userEmail: userAuth?.id
            })
        })
        const data = await result.json()
        setAlert({ modalActive: true, workStatus: "done", message: data?.message })
        fetchCollection()
    }

    catch (err) {
        console.log("removeClientMenuFromCollection ERROR: " + err)
        setAlert({ modalActive: false, workStatus: "failed", message:"Oops! Something went wrong"})
    }
}