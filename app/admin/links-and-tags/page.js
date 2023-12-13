"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import LinksAndTags from '@/ComponentsAdmin/linksAndTags/LinksAndTags';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const siteLinkAndTagContext = createContext()
export const useLinkAndTagContext = () => {
  return useContext(siteLinkAndTagContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [linkTagData, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "site-link-tags")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <siteLinkAndTagContext.Provider value={{ linkTagData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <LinksAndTags />
          </div>
        </siteLinkAndTagContext.Provider>
      }
    </>
  )
}

export default page