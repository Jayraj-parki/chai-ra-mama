"use client"
import { useAuth } from '@/app/layout';
import ClientFeedback from '@/ComponentsAdmin/clientFeedback/ClientFeedback';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const clientFeedbackContext = createContext()
export const useClientFeedbackContext = () => {
  return useContext(clientFeedbackContext)
} 

const page = () => {
  const { adminCred } = useAuth()
  const [clientFbData, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "client-feedback")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])

  return (
    <>
      {
        adminCred &&
        <clientFeedbackContext.Provider value={{ clientFbData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <ClientFeedback />
          </div>
        </clientFeedbackContext.Provider>
      }
    </>
  )
}

export default page