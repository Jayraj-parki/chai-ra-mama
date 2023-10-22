"use client"
import GalleryCard from '@/components/gallery_GalleryCards/GalleryCard'
import GalleryBanner from '@/components/gallery_banner/GalleryBanner'
import { getGalleryData } from '@/services/getGalleryData'
import { createContext, useContext, useEffect, useState } from 'react'

const galleryContext = createContext()
export const useGalleryContext = () => {
  return useContext(galleryContext)
}
const page = () => {
  const [galleryData, setData] = useState()
  const helper = async () => {
    await getGalleryData(setData)
  } 
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <galleryContext.Provider value={{galleryData}}>
        <GalleryBanner />
        <GalleryCard />
      </galleryContext.Provider>
    </>
  )
}

export default page