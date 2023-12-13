"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import RequestHistory from '@/ComponentsAdmin/requestHistory/RequestHistory';
import { useAuth } from '@/app/layout';
import { getRequestHistory } from '@/services/getRequestHistory';
import { createContext, useContext, useEffect, useState } from 'react';

const ClientRequestHistoryContext = createContext()
export const useClientRequestHistoryContext = () => {
  return useContext(ClientRequestHistoryContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [reqHistory, setReqHistory] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getRequestHistory({ setData: setReqHistory, end_url: "force-approval/history" })
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [adminCred])
  return (
    <>
      {
        adminCred &&
        <>
          <ClientRequestHistoryContext.Provider value={{ helper, reqHistory }}>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <RequestHistory />
          </ClientRequestHistoryContext.Provider>
        </>
      }
    </>
  )
}

export default page