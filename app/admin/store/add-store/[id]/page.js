"use client"
import { useAuth } from '@/app/layout';
import Store from '@/ComponentsAdmin/store/Store';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const storeContext = createContext()
export const useStoreContext = () => {
  return useContext(storeContext)
}
const page = ({ params }) => {
  const { user } = useAuth()
  const [storeData,setData]=useState()
  const helper = async () => {
    await getDataService(setData,`stores?_id=${params?.id}`)
  }
  useEffect(() => {
    if (user) helper()
  }, [])
  return (
    <>
      {
        user &&
        <storeContext.Provider value={{pId:params?.id,helper,storeData}}>
          <div className='container-fluid p-lg-4  m-0'>
            <Store/>
          </div>
        </storeContext.Provider>
      }
    </>
  )
}

export default page