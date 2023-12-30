"use client"
import { useAuth } from '@/app/layout';

import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import HeadersList from '../headersList/HeadersList';

const headerContext = createContext()
export const useHeaderContext = () => {
  return useContext(headerContext)
}
const PageHeaderPage = () => {
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const { adminCred } = useAuth()
  const [headerData, setData] = useState()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "headers")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <headerContext.Provider value={{ headerData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <HeadersList />
          </div>
        </headerContext.Provider>
      }
    </>
  )
}

export default PageHeaderPage