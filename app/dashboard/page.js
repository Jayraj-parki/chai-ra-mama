"use client"

import Dashboard from "@/components/dashboard/Dashboard"
import { getDataService } from "@/services/getDataService"
import { createContext, useContext, useEffect, useState } from "react"
const CartUiContext=createContext()
export const useCartUiContext=()=>{
  return useContext(CartUiContext)
}
const page = () => {
  const [subMenuData, setSubMenuData] = useState()
  const helper = async () => {
    await getDataService(setSubMenuData,"sub-menu/all")
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <> 
    <CartUiContext.Provider value={{subMenuData}}>
      <Dashboard />
    </CartUiContext.Provider>
      
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
