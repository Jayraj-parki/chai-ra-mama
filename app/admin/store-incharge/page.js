"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
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
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [storeCity, setStoreCity] = useState()
  const [storeDetails, setStoreDetails] = useState()
  const getStoresData = async () => {
    await getDataService(setStoreCity, "store-locator")
    await getDataService(setStoreDetails, "stores/all")
  }
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "store-incharge")
    setAlert({ modalActive: false, workStatus: "", message: "" })
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
        <StoreInchargeContext.Provider value={{ data, helper, storeDetails, storeCity }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <StoreIncharge />
          </div>
        </StoreInchargeContext.Provider>
      }
    </>
  )
}

export default page