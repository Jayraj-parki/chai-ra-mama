"use client"
import { createContext, useContext, useEffect, useState } from "react"
import style from "./clientProduct.module.scss"
import { useAuth } from "@/app/layout"
import { getLocalUser } from "@/services/localUser/getLocalUser"
import { Button } from "@mui/material";
import ClientCart from "../user-dashboard/clientCart/ClientCart"
import ClientPurchaseHistory from "../user-dashboard/clientPurchaseHistory/ClientPurchaseHistory"
import ClientOrders from "../user-dashboard/clientOrders/ClientOrders"
const clientProfileContext = createContext()
export const useClientProfileContext = () => {
    return useContext(clientProfileContext)
}

const ClientProduct = () => {
    const [activeLink, setActiveLink] = useState("mycart")
    const { userCred } = useAuth()
    const [userProfileData, setUserData] = useState()
    const getUserUtils = async () => await getLocalUser(userCred, setUserData)

    useEffect(() => {
        getUserUtils()
    }, [userCred])
    return (

        <>
            {userCred &&
                <>
                    <div className={style.navbar + " container-fluid row col-12 col-xl-10 mx-auto pt-5 "}>
                        <ul className="nav justify-content-start">
                            <Button onClick={() => setActiveLink("mycart")} className={` ${activeLink == "mycart" && style.activeBtn} nav-item mx-2 text-capitalize `}>
                                My cart
                            </Button>
                            <Button onClick={() => setActiveLink("purchase-history")} className={` ${activeLink == "purchase-history" && style.activeBtn} nav-item mx-2 text-capitalize `}>
                                My Purchase History
                            </Button>
                            <Button onClick={() => setActiveLink("track-orders")} className={`${activeLink == "track-orders" && style.activeBtn} nav-item mx-2 text-capitalize`}>
                                Track My Orders
                            </Button>
                        </ul>
                    </div>
                    <clientProfileContext.Provider value={{ userProfileData }}>
                        <div className={style.content + " container-fluid row col-12 col-xl-10  mx-auto mt-3 "}>
                            {activeLink == "mycart" && <ClientCart />}
                            {activeLink == "purchase-history" && <ClientPurchaseHistory />}
                            {activeLink == "track-orders" && <ClientOrders />}
                        </div>
                    </clientProfileContext.Provider>
                </>}
        </>
    )
}



export default ClientProduct
