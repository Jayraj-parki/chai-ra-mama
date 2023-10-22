"use client"
import { useAuth } from '@/app/layout';
import ClientFeedback from '@/ComponentsAdmin/clientFeedback/ClientFeedback';
import { getClientFbData } from '@/services/getClientFbData';
import { createContext, useContext, useEffect, useState } from 'react';

const clientFeedbackContext = createContext()
export const useClientFeedbackContext = () => {
  return useContext(clientFeedbackContext)
}

const page = () => {
  const { user } = useAuth()
  const [clientFbData, setData] = useState()
  const helper = async () => {
    await getClientFbData(setData)
  }
  useEffect(() => {
    if (user) helper()
  }, [])

  return (
    <>
      {
        user &&
        <clientFeedbackContext.Provider value={{clientFbData,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <ClientFeedback />
          </div>
        </clientFeedbackContext.Provider>
      }
    </>
  )
}

export default page