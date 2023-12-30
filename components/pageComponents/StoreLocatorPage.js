"use client"
import StoreCards from '@/components/store_Cards/StoreCards'
import StoreBanner from '@/components/store_banner/StoreBanner'
import { getDataService } from '@/services/getDataService'
import { createContext, useContext, useEffect, useState } from 'react'

const StoreUiContext = createContext()
export const useStoreUiContext = () => {
  return useContext(StoreUiContext)
}

const StoreLocatorPage = () => {
  const [storeCity, setStoreCity] = useState()
  const [storeDetails, setStoreDetails] = useState()
  const [storeList, setStoreList] = useState()
  const helper = async () => await Promise.all([getDataService(setStoreCity, "store-locator"), getDataService(setStoreDetails, "stores/all"), getDataService(setStoreList, "store-incharge")])

  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <StoreUiContext.Provider value={{ storeCity, storeDetails, storeList }}>
        <StoreBanner />
        <StoreCards />
      </StoreUiContext.Provider>
    </>
  )
}

export default StoreLocatorPage