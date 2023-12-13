"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import SiteLogs from '@/ComponentsAdmin/siteLogs/SiteLogs';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const UserLogsContext = createContext()
export const useUserLogContext = () => {
  return useContext(UserLogsContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [logs, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "signIn")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&  
        <UserLogsContext.Provider value={{logs,helper}}>
        <div className='container-fluid p-lg-4  m-0'>
        <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <SiteLogs/>
        </div>
        </UserLogsContext.Provider>
      }
    </>
  )
}

export default page