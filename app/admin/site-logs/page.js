"use client"
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
  const helper = async () => {
    await getDataService(setData, "signIn")
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
          <SiteLogs/>
        </div>
        </UserLogsContext.Provider>
      }
    </>
  )
}

export default page