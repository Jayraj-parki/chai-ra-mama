"use client"
import { useAuth } from '@/app/layout';
import Gallery from '@/ComponentsAdmin/gallery/Gallery';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const galleryContext = createContext()

export const useGalleryData = () => {
  return useContext(galleryContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [data, setData] = useState()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "gallery")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <galleryContext.Provider value={{ data, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <Gallery />
          </div>
        </galleryContext.Provider>
      }
    </>
  )
}

export default page