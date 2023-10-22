"use client"
import MenuBanner from '@/components/menu_banner/MenuBanner'
import PopularMenu from '@/components/menu_popularMenu/PopularMenu'
import { getAllSubMenuPageData } from '@/services/getAllSubMenuData'
import { getMenuPageData } from '@/services/getMenuPageData'
import { createContext, useContext, useEffect, useState } from "react"
const menuUiContext=createContext()
export const useMenuUiContext=()=>{
  return useContext(menuUiContext)
}
const page = () => {
  const [menuData, setMenuData] = useState()
  const [subMenuData, setSubMenuData] = useState()
  const helper = async () => {
    await getMenuPageData(setMenuData)
    await getAllSubMenuPageData(setSubMenuData)
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
    <menuUiContext.Provider value={{menuData,subMenuData}}>
      <MenuBanner />
      <PopularMenu  />
    </menuUiContext.Provider>
    </>
  )
}

export default page
