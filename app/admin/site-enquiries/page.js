"use client"
import { useAuth } from '@/app/layout';
import SiteEnquiry from '@/ComponentsAdmin/siteEnquiry/SiteEnquiry';
import { getSiteEnquiryData } from '@/services/getSiteEnquiryData';
import { createContext, useContext, useEffect, useState } from 'react';

const siteEnquiryContext = createContext()
export const useSiteEnquiryContext = () => {
  return useContext(siteEnquiryContext)
}

const page = () => {
  const { user } = useAuth()
  const [siteEnqData, setData] = useState()
  const helper = async () => {
    await getSiteEnquiryData(setData)
  }
  useEffect(() => {
    if (user) helper()
  }, [])
  return (
    <>
      {
        user &&
        <siteEnquiryContext.Provider value={{ siteEnqData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <SiteEnquiry />
          </div>
        </siteEnquiryContext.Provider>
      }
    </>
  )
}

export default page