"use client"
import style from "./userProduct.module.scss"
import { createContext, useContext, useEffect, useState } from "react"
import { Button } from "@mui/material";
import { useAuth } from "@/app/layout";
import Cart from "../user-dashboard/cart/Cart";
import { getLocalUser } from "@/services/localUser/getLocalUser";
import PurchaseHistory from "../user-dashboard/purchaseHistory/PurchaseHistory";
import MyOrders from "../user-dashboard/myOrders/MyOrders";
const userProductContext = createContext()
export const useUserProductContext = () => {
  return useContext(userProductContext)
} 

const UserProduct = () => {
  const [activeLink, setActiveLink] = useState("mycart")
  const { userCred } = useAuth()
  const [userDetails, setUserDetails] = useState({})
  const getUserDetails = async () => {
   await getLocalUser(userCred, setUserDetails)
  }
  useEffect(() => {
    getUserDetails()
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
          <userProductContext.Provider value={{ userDetails }}>
            <div className={style.content + " container-fluid row col-12 col-xl-10  mx-auto mt-3 "}>
              {activeLink == "mycart" && <Cart />}
              {activeLink == "purchase-history" && <PurchaseHistory />}
              {activeLink == "track-orders" && <MyOrders />}
            </div>
          </userProductContext.Provider>
        </>}
    </>
  )
}


export default UserProduct
