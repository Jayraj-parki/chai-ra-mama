"use client"

import Dashboard from "@/components/dashboard/Dashboard"
import { getDataService } from "@/services/getDataService"
import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../layout"
import { getLocalUser } from "@/services/localUser/getLocalUser"
import { getCartProduct } from "@/services/localUser/getCartProduct"
const CartUiContext = createContext()
export const useCartUiContext = () => {
  return useContext(CartUiContext)
}

const dashboardContext = createContext()
export const useDashboardContext = () => {
  return useContext(dashboardContext)
}

const page = () => {
  const { userCred } = useAuth()
  const [subMenuData, setSubMenuData] = useState()
  const [userProfileData, setUserData] = useState()
  const [cartProduct, setCartProduct] = useState()
  const [purchaseHistoryProduct, setPurchaseHistoryProduct] = useState()
  const [myOrder, setMyOrder] = useState()
  const helper = async () => {
    await getDataService(setSubMenuData, "sub-menu/all")
  }
  const getUserUtils = async () => {
    await getLocalUser(userCred, setUserData)
  }
  const getCartData = async (type,status="Start") => {
    let setData=setCartProduct
    if(type=="myCart") setData=setCartProduct
    else if(type=="purchaseHistory") setData=setPurchaseHistoryProduct
    else if(type=="myOrder") setData=setMyOrder
    await getCartProduct({ userCred, setData,status })
  }
  useEffect(() => {
    helper()
    getUserUtils()
    getCartData("myCart","start")
    getCartData("purchaseHistory","start")
    getCartData("myOrder","process")
  }, [userCred])
  return (
    <>
      <dashboardContext.Provider value={{ userProfileData, getUserUtils,cartProduct,getCartData,purchaseHistoryProduct ,myOrder}}>
        <CartUiContext.Provider value={{ subMenuData }}>
          <Dashboard />
        </CartUiContext.Provider>
      </dashboardContext.Provider>
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
