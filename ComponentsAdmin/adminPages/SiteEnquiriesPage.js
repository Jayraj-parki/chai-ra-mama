"use client"
import { useAuth } from '@/app/layout';

import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import SiteEnquiry from '../siteEnquiry/SiteEnquiry';

const siteEnquiryContext = createContext()
export const useSiteEnquiryContext = () => {
  return useContext(siteEnquiryContext)
}

const SiteEnquiriesPage = () => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [siteEnqData, setData] = useState()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "site-enquiry")
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
            <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <SiteEnquiry />
          </div>
        </siteEnquiryContext.Provider>
      }
    </>
  )
}

export default SiteEnquiriesPage