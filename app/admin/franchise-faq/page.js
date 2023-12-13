"use client"
import { useAuth } from '@/app/layout';
import FranchiseFaq from '@/ComponentsAdmin/franchiseFaq/FranchiseFaq';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const faqContext = createContext()
export const usefaqContext = () => {
  return useContext(faqContext)
}
const page = () => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [faqData, setData] = useState()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "franchise-faq")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <faqContext.Provider value={{ faqData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <FranchiseFaq />
          </div>
        </faqContext.Provider>
      }
    </>
  )
}

export default page