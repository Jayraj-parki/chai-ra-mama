"use client"
import { useAuth } from '@/app/layout';
import PagewiseSeoTags from '@/ComponentsAdmin/pagewiseSeoTags/PagewiseSeoTags';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const pageTagsContext = createContext()
export const usePageTagContext = () => {
  return useContext(pageTagsContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [pageTags, setData] = useState()
  const helper = async () => {
    await getDataService(setData, "pagewise-tag")
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return ( 
    <>
      {
        adminCred && 
        <pageTagsContext.Provider value={{ pageTags, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PagewiseSeoTags />
          </div>
        </pageTagsContext.Provider>
      }
    </>
  )
}

export default page