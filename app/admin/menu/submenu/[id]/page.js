"use client"
import { useAuth } from '@/app/layout';
import SubMenu from '@/ComponentsAdmin/subMenu/SubMenu';
import { getSubMenuPageData } from '@/services/getSubMenuData';
import { createContext, useContext, useEffect, useState } from 'react';
const subMenuContext = createContext()
export const useSubMenuContext = () => {
  return useContext(subMenuContext)
}
const page = ({ params }) => {
  const { user } = useAuth()
  const [subMenuData, setData] = useState()
  const helper = async () => {
    await getSubMenuPageData({ _id: params?.id, setData })
  }
  useEffect(() => {
    if (user) helper()
  }, [])
  return (
    <>
      {
        user &&
        <subMenuContext.Provider value={{pId:params?.id,subMenuData,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <SubMenu  />
          </div>
        </subMenuContext.Provider>
      }
    </>
  )
}

export default page