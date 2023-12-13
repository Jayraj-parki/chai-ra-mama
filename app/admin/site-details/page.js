"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import SiteDetails from '@/ComponentsAdmin/siteDetails/SiteDetails';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const siteDetailsContext = createContext()
export const useSiteDetailsContext = () => {
  return useContext(siteDetailsContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [siteData, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "site-details")
    setAlert({ modalActive: false, workStatus: "", message: "" })

  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <siteDetailsContext.Provider value={{ siteData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <SiteDetails />
          </div>
        </siteDetailsContext.Provider>
      }
    </>
  )
}

export default page