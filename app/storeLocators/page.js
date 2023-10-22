"use client"
import StoreCards from '@/components/store_Cards/StoreCards'
import StoreBanner from '@/components/store_banner/StoreBanner'
import { getAllStoreData } from '@/services/getAllStoreData'
import { getStoreCityData } from '@/services/getStoreCityData'
import { getStoreData } from '@/services/getStoreData'
import { createContext, useContext, useEffect, useState } from 'react'

const StoreUiContext = createContext()
export const useStoreUiContext = () => {
  return useContext(StoreUiContext)
}

const page = () => {
  const [storeCity, setStoreCity] = useState()
  const [storeDetails, setStoreDetails] = useState()
  const helper = async () => {
    await getStoreCityData(setStoreCity)
    await getAllStoreData(setStoreDetails)
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <StoreUiContext.Provider value={{storeCity,storeDetails}}>
        <StoreBanner />
        <StoreCards />
      </StoreUiContext.Provider>
    </>
  )
}

export default page 