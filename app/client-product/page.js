"use client"
import style from "./clientProduct.module.scss"
import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../layout"
import { Button } from "@mui/material";
import ClientCart from "@/components/user-dashboard/clientCart/ClientCart";
import ClientOrders from "@/components/user-dashboard/clientOrders/ClientOrders";
import ClientPurchaseHistory from "@/components/user-dashboard/clientPurchaseHistory/ClientPurchaseHistory";
import { getLocalUser } from "@/services/localUser/getLocalUser";

const clientProfileContext = createContext()
export const useClientProfileContext = () => {
  return useContext(clientProfileContext)
}

const page = () => {
  const [activeLink, setActiveLink] = useState("mycart")
  const { userCred } = useAuth()
  const [userProfileData, setUserData] = useState()
  const getUserUtils = async () => {
    await getLocalUser(userCred, setUserData)
  }
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
          <clientProfileContext.Provider value={{ userProfileData}}>
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

// Static MetaTag
// export const metadata = {
//   title: " Static title",
//   description: "Static Desciption"
// }

// dynamic metadata

// export async function generateMetadata({ params }) {
//   return {
//     title: 'Dynamic Title',
//     description: "Dynamic Desciption"
//   }
// }

export default page
