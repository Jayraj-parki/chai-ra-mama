"use client"
import { useAuth } from '@/app/layout';
import HeadersList from '@/ComponentsAdmin/headersList/HeadersList';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const headerContext = createContext()
export const useHeaderContext = () => {
  return useContext(headerContext)
}
const page = () => {
  const { user } = useAuth()
  const [headerData, setData] = useState()
  const helper = async () => {
    await getDataService(setData,"headers")
  }
  useEffect(() => {
    if(user) helper()
  }, [])
  return (
    <>
      {
        user &&
        <headerContext.Provider value={{headerData,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <HeadersList />
          </div>
        </headerContext.Provider>
      }
    </>
  )
}

export default page