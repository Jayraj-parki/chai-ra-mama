"use client"
import { useAuth } from '@/app/layout';
import Menu from '@/ComponentsAdmin/menu/Menu';
import { getMenuPageData } from '@/services/getMenuPageData';
import { createContext, useContext, useEffect, useState } from 'react';

const menuContext = createContext()
export const useMenuContext = () => {
  return useContext(menuContext)
}

const page = () => {
  const { user } = useAuth()
  const [menuData, setData] = useState()
  const helper = async () => {
    await getMenuPageData(setData)
  }
  useEffect(() => {
    if (user) helper()
  }, [])
  return (
    <>
      {
        user &&
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