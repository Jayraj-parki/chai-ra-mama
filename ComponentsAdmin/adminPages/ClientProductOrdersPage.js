"use client"
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
import PopUp from '../PopUp/PopUp';
import ClientProductOrders from '../clientProductOrders/ClientProductOrders';
const productOrdersContext = createContext()
export const useProductOrdersContext = () => {
  return useContext(productOrdersContext)
}

const ClientProductOrdersPage = () => {
  const { adminCred } = useAuth()
  const [productOrders, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, `client-orders`)
    setAlert({ modalActive: false, workStatus: "", message: "" })

  }
  useEffect(() => {
    if (adminCred) helper()
  }, [adminCred])
  return (
    <>
      {
        adminCred &&
        <productOrdersContext.Provider value={{ productOrders, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <ClientProductOrders />
          </div>
        </productOrdersContext.Provider>
      }
    </>
  )
}

export default ClientProductOrdersPage