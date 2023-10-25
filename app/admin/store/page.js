"use client"
import { useAuth } from '@/app/layout';
import StoreCity from '@/ComponentsAdmin/storeCity/StoreCity';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const storeLocatorContext=createContext()
export const useStoreLocatorContext=()=>{
  return useContext(storeLocatorContext)
}
const page = () => {
  const { user } = useAuth()
  const [storeCityData,setData]=useState()
  const helper = async () => {
    await getDataService(setData,"store-locator")
  }
  useEffect(()=>{
    if(user) helper()
  },[])
  return (
    <>
      {
        user &&
        <storeLocatorContext.Provider value={{storeCityData,helper}}>
        <div className='container-fluid p-lg-4  m-0'>
          <StoreCity/>
        </div>
        </storeLocatorContext.Provider> 
      } 
    </>
  )
}

export default page