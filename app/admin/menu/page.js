"use client"
import { useAuth } from '@/app/layout';
import Menu from '@/ComponentsAdmin/menu/Menu';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const menuContext = createContext()
export const useMenuContext = () => {
  return useContext(menuContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [menuData, setData] = useState()
  const helper = async () => {
    await getDataService(setData,"menu")
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred && 
        <menuContext.Provider value={{menuData,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <Menu />
          </div>
        </menuContext.Provider>
      }
    </> 
  )
}

export default page