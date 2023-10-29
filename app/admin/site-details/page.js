"use client"
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
  const helper = async () => {
    await getDataService(setData, "site-details")
  }
  useEffect(() => {
    if (adminCred) helper() 
  }, [])
  return (
    <>
      {
        adminCred && 
        <siteDetailsContext.Provider value={{siteData,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <SiteDetails />
          </div>
        </siteDetailsContext.Provider>
      }
    </>
  )
}

export default page