"use client"
import MenuBanner from '@/components/menu_banner/MenuBanner'
import PopularMenu from '@/components/menu_popularMenu/PopularMenu'
import { getDataService } from '@/services/getDataService'
import { createContext, useContext, useEffect, useState } from "react"
const menuUiContext=createContext()
export const useMenuUiContext=()=>{
  return useContext(menuUiContext)
}
const page = () => {
  const [menuData, setMenuData] = useState()
  const [subMenuData, setSubMenuData] = useState()
  const helper = async () => {
    await getDataService(setMenuData,"menu")
    await getDataService(setSubMenuData,"sub-menu/all")
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
