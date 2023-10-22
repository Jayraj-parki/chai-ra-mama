"use client"
import { useAuth } from '@/app/layout';
import StoreCity from '@/ComponentsAdmin/storeCity/StoreCity';
import { getStoreCityData } from '@/services/getStoreCityData';
import { createContext, useContext, useEffect, useState } from 'react';
const storeLocatorContext=createContext()
export const useStoreLocatorContext=()=>{
  return useContext(storeLocatorContext)
}
const page = () => {
  const { user } = useAuth()
  const [storeCityData,setData]=useState()
  const helper = async () => {
    await getStoreCityData(setData)
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