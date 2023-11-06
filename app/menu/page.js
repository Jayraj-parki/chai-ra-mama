"use client"
import MenuBanner from '@/components/menu_banner/MenuBanner'
import PopularMenu from '@/components/menu_popularMenu/PopularMenu'
import { getDataService } from '@/services/getDataService'
import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from '../layout'
import { getCartProduct } from '@/services/localUser/getCartProduct'
const menuUiContext=createContext()
export const useMenuUiContext=()=>{
  return useContext(menuUiContext)
}
const page = () => {
  const {userCred}=useAuth()
  const [menuData, setMenuData] = useState()
  const [subMenuData, setSubMenuData] = useState()
  const [cartProduct, setCartProduct] = useState()
  const helper = async () => {
    await getDataService(setMenuData,"menu")
    await getDataService(setSubMenuData,"sub-menu/all")
  }
  const getCartData=async()=>{
    await getCartProduct({userCred,setCartProduct})
  }
  useEffect(() => {
    helper()
    getCartData()
  }, [userCred])
  return (
    <>
    <menuUiContext.Provider value={{menuData,subMenuData,cartProduct,getCartData}}>
      <MenuBanner />
      <PopularMenu  />
    </menuUiContext.Provider>
    </>
  )
}

export default page
