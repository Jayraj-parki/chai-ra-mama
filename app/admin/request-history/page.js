"use client"
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
  const helper = async () => {
    console.log("indide helper")
    await getRequestHistory({ setData: setReqHistory, end_url: "force-approval/history" })
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
            <RequestHistory/>
          </ClientRequestHistoryContext.Provider>
        </>
      }
    </>
  )
}

export default page