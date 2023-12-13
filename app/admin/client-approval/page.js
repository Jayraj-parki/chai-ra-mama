"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import ClientApproval from '@/ComponentsAdmin/clientApproval/ClientApproval';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const clientApprovalContext = createContext()
export const useClientApprovalContext = () => {
  return useContext(clientApprovalContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [clientApproval, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "client-approval")
    setAlert({ modalActive: false, workStatus: "", message: "" })
 
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [adminCred])
  return (
    <>
      {
        adminCred &&
        <clientApprovalContext.Provider value={{clientApproval,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
          <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <ClientApproval />
          </div>
        </clientApprovalContext.Provider>
      }
    </>
  )
}

export default page