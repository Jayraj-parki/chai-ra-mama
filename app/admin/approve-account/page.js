"use client"
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import ApproveAccount from '@/ComponentsAdmin/approveAccount/ApproveAccount';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const userVerificationContext = createContext()
export const useUserVerificationContext = () => {
  return useContext(userVerificationContext)
}

const page = () => {
  const { adminCred } = useAuth()
  const [userVerification, setData] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, "signUp")
    setAlert({ modalActive: false, workStatus: "", message: "" })
 
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <userVerificationContext.Provider value={{userVerification,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
          <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            
            <ApproveAccount />
          </div>
        </userVerificationContext.Provider>
      }
    </>
  )
}

export default page