"use client"
import MenuBanner from '@/components/menu_banner/MenuBanner'
import PopularMenu from '@/components/menu_popularMenu/PopularMenu'
import { getDataService } from '@/services/getDataService'
import { createContext, useContext, useEffect, useState } from "react"
import { getCartProduct } from '@/services/localUser/getCartProduct'
import { useAuth } from '@/app/layout'
const menuUiContext = createContext()
export const useMenuUiContext = () => {
  return useContext(menuUiContext)
}
const MenuPage = () => {
  const { userCred } = useAuth()
  const [menuData, setMenuData] = useState()
  const [subMenuData, setSubMenuData] = useState()
  const [cartProduct, setCartProduct] = useState()
  const helper = async () => await Promise.all([getDataService(setMenuData, "menu"), getDataService(setSubMenuData, "sub-menu/all")])

  const getCartData = async (type, status = "Start") => {
    let setData = setCartProduct
    if (type == "myCart") setData = setCartProduct
    await getCartProduct({ userCred, setData, status })
  }
  const fetchInitailData=async()=>await Promise.all([helper(),getCartData("myCart", "start")])
  useEffect(() => {
    fetchInitailData()
  }, [userCred])
  return (
    <>
      <menuUiContext.Provider value={{ menuData, subMenuData, cartProduct, getCartData }}>
        <MenuBanner />
        <PopularMenu />
      </menuUiContext.Provider>
    </>
  )
}

export default MenuPage
