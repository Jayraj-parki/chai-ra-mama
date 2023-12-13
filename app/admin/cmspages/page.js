"use client"

import { useAuth } from '@/app/layout';
import CmsPages from '@/ComponentsAdmin/cmsPages/CmsPages';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const cmsContext = createContext();
export function useCmsData() {
  return useContext(cmsContext);
}

const page = () => {
  const [data, setData] = useState([])
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const { adminCred } = useAuth()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "cms-pages")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <cmsContext.Provider value={{ data, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <CmsPages />
          </div>
        </cmsContext.Provider>
      }
    </>
  )
}

export default page