"use client"
import ClientRequest from '@/ComponentsAdmin/clientRequest/ClientRequest';
import { useAuth } from '@/app/layout';
import { getForceActionData } from '@/services/getForceActionData';
import { createContext, useContext, useEffect, useState } from 'react';

const ClientRequestContext = createContext()
export const useClientRequestContext = () => {
  return useContext(ClientRequestContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [deleteReqData,setDeleteReq]=useState()
  const [updateReqData,setUpdateReq]=useState()
  const helper = async () => {

    await getForceActionData({setData:setDeleteReq,end_url:"force-approval",request:"delete"})
    await getForceActionData({setData:setUpdateReq,end_url:"force-approval",request:"update"})
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <>
        <ClientRequestContext.Provider value={{helper,deleteReqData,updateReqData}}>
          <ClientRequest/>
        </ClientRequestContext.Provider>
        </>
      }
    </>
  )
}

export default page