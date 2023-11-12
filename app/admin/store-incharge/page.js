"use client"
import StoreIncharge from '@/ComponentsAdmin/storeIncharge/StoreIncharge';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const StoreInchargeContext = createContext()

export const useStoreInchargeData = () => {
  return useContext(StoreInchargeContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [data, setData] = useState()
  const [storeCity, setStoreCity] = useState()
  const [storeDetails, setStoreDetails] = useState()
  const getStoresData = async () => {
    await getDataService(setStoreCity, "store-locator")
    await getDataService(setStoreDetails, "stores/all")
  }
  const helper = async () => {
    await getDataService(setData, "store-incharge")
  }
  useEffect(() => {
    if (adminCred) {
      helper()
      getStoresData()
    }

  }, [adminCred])
  return (
    <>
      {
        adminCred &&
        <StoreInchargeContext.Provider value={{ data, helper,storeDetails,storeCity }}>
          <div className='container-fluid p-lg-4  m-0'>
            <StoreIncharge />
          </div>
        </StoreInchargeContext.Provider>
      }
    </>
  )
}

export default page