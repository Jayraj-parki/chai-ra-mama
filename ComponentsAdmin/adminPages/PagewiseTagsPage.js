"use client"
import { useAuth } from '@/app/layout';

import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import PagewiseSeoTags from '../pagewiseSeoTags/PagewiseSeoTags';

const pageTagsContext = createContext()
export const usePageTagContext = () => {
  return useContext(pageTagsContext)
}

const PagewiseTagsPage = () => {
  const { adminCred } = useAuth()
  const [pageTags, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "pagewise-tag")
    setAlert({ modalActive: false, workStatus: "", message: "" })
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
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <PagewiseSeoTags />
          </div>
        </pageTagsContext.Provider>
      }
    </>
  )
}
 
export default PagewiseTagsPage