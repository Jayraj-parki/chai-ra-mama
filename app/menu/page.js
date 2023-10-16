"use client"
import MenuBanner from '@/components/menu_banner/MenuBanner'
import PopularMenu from '@/components/menu_popularMenu/PopularMenu'
import { getMenuData } from '@/services/getMenuData'
import { useEffect, useState } from "react"

const page = () => {
  const [data, setData] = useState()
  const helper = async () => {
    await getMenuData(setData)
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <MenuBanner />
      <PopularMenu menuListData={data?.menuListData} menuCardData={data?.menuCardData} />
    </>
  )
}

export default page
