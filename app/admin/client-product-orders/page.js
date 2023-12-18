"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import ClientProductOrders from '@/ComponentsAdmin/clientProductOrders/ClientProductOrders';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const productOrdersContext = createContext()
export const useProductOrdersContext = () => {
  return useContext(productOrdersContext)
}

const page = () => {
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
        <productOrdersContext.Provider value={{productOrders,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
          <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <ClientProductOrders />
          </div>
        </productOrdersContext.Provider>
      }
    </>
  )
}

export default page