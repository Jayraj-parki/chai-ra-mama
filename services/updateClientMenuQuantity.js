import Cookies from 'js-cookie';
import { checkUserLoginToken } from './localUser/checkUserLoginToken';
export const updateClientMenuQuantity = async ({ _id, quantity }) => {

    try {

        const cookie = Cookies.get("localUserToken")
        const userAuth = await checkUserLoginToken(cookie)
        const result = await fetch("/api/user/client-menu-collection", {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
                quantity: `${quantity}`,
                userEmail: userAuth?.id
            })
        })
    }

    catch (err) {
        console.log("removeClientMenuFromCollection ERROR: " + err)
    }
}