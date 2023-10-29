"use client"
import { useAuth } from '@/app/layout';
import FranchiseFaq from '@/ComponentsAdmin/franchiseFaq/FranchiseFaq';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const faqContext = createContext()
export const usefaqContext = () => {
  return useContext(faqContext)
}
const page = () => {
  const { adminCred } = useAuth()
  const [faqData, setData] = useState()
  const helper = async () => {
    await getDataService(setData,"franchise-faq")
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred && 
        <faqContext.Provider value={{faqData,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <FranchiseFaq />
          </div>
        </faqContext.Provider>
      }
    </>
  )
}

export default page