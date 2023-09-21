"use client"
import MenuBanner from '@/components/menu_banner/MenuBanner'
import PopularMenu from '@/components/menu_popularMenu/PopularMenu'
import React from 'react'
import { useEffect, useState } from "react"

const page = () => {
  const [data, setData] = useState({})
  const getMenuData = async (e) => {
    try {
      const result = await fetch("/api/menu/all", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
      })
      const pageData = await result.json()
      setData(pageData)
    }
    catch (err) {
      console.log("error in fetching menu data" + err)
    }
  }
  
  const helper = async () => {
    await getMenuData()
    
  }
  useEffect(() => {
    helper()
    
  }, [])
  return (
    <>
      <MenuBanner />
      <PopularMenu menuListData={data.menuListData} menuCardData={data.menuCardData} />
    </>
  )
}

export default page