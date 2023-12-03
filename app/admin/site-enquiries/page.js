"use client"
import { useAuth } from '@/app/layout';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import SiteEnquiry from '@/ComponentsAdmin/siteEnquiry/SiteEnquiry';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const siteEnquiryContext = createContext()
export const useSiteEnquiryContext = () => {
  return useContext(siteEnquiryContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [siteEnqData, setData] = useState()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData,"site-enquiry")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred && 
        <siteEnquiryContext.Provider value={{ siteEnqData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
          <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <SiteEnquiry />
          </div>
        </siteEnquiryContext.Provider>
      }
    </>
  )
}

export default page