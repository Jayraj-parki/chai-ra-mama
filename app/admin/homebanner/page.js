"use client"
import { useAuth } from '@/app/layout';
import HomeBanners from '@/ComponentsAdmin/homeBanner/HomeBanners';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const homeBannerContext = createContext()
export const useHomeBannerContext = () => {
  return useContext(homeBannerContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [bannerData, setData] = useState()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "home-banner")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <homeBannerContext.Provider value={{ bannerData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
          <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <HomeBanners />
          </div>
        </homeBannerContext.Provider>
      }
    </>
  )
}

export default page