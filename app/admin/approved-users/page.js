"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import ApprovedUsers from '@/ComponentsAdmin/approvedUsers/ApprovedUsers';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const ApprovedUserContext = createContext()
export const useApprovedUserContext = () => {
  return useContext(ApprovedUserContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [approvedUser, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })

  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "approve")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <ApprovedUserContext.Provider value={{ approvedUser, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <ApprovedUsers />
          </div>
        </ApprovedUserContext.Provider>
      }
    </>
  )
}

export default page