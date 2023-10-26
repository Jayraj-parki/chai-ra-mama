"use client"
import LinksAndTags from '@/ComponentsAdmin/linksAndTags/LinksAndTags';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const siteLinkAndTagContext = createContext()
export const useLinkAndTagContext = () => {
  return useContext(siteLinkAndTagContext)
}

const page = () => {
  const { user } = useAuth()
  const [linkTagData, setData] = useState()
  const helper = async () => {
    await getDataService(setData, "site-link-tags")
  }
  useEffect(() => {
    if (user) helper() 
  }, [])
  return (
    <>
      {
        user &&
        <siteLinkAndTagContext.Provider value={{linkTagData,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <LinksAndTags />
          </div>
        </siteLinkAndTagContext.Provider>
      }
    </>
  )
}

export default page