"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import StaffRequest from '@/ComponentsAdmin/staffRequest/StaffRequest';
import { useAuth } from '@/app/layout';
import { getForceActionData } from '@/services/getForceActionData';
import { createContext, useContext, useEffect, useState } from 'react';

const StaffRequestContext = createContext()
export const useStaffRequestContext = () => {
  return useContext(StaffRequestContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [deleteReqData, setDeleteReq] = useState()
  const [updateReqData, setUpdateReq] = useState()
  const helper = async () => {
    // setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getForceActionData({ setData: setDeleteReq, end_url: "force-approval", request: "delete" })
    await getForceActionData({ setData: setUpdateReq, end_url: "force-approval/update", request: "updated" })
    // setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [adminCred])
  return (
    <>
      {
        adminCred &&
        <>
          <StaffRequestContext.Provider value={{ helper, deleteReqData, updateReqData }}>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <StaffRequest />
          </StaffRequestContext.Provider>
        </>
      }
    </>
  )
}

export default page