"use client"

import Dashboard from "@/components/dashboard/Dashboard"
import { getDataService } from "@/services/getDataService"
import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../layout"
import { getLocalUser } from "@/services/localUser/getLocalUser"
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
  const helper = async () => {
    await getDataService(setSubMenuData, "sub-menu/all")
  }
  const getUserUtils = async () => {
    await getLocalUser(userCred, setUserData)
  }
  useEffect(() => { 
    helper()
    getUserUtils()
  }, [])
  return (
    <>
      <dashboardContext.Provider value={{ userProfileData, getUserUtils }}>
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
