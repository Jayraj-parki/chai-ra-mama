"use client"
import ApproveAccount from '@/ComponentsAdmin/approveAccount/ApproveAccount';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const userVerificationContext = createContext()
export const useUserVerificationContext = () => {
  return useContext(userVerificationContext)
}

const page = () => {
  const { user } = useAuth()
  const [userVerification, setData] = useState()

  const helper = async () => {
    await getDataService(setData, "signUp")
  }
  useEffect(() => {
    if (user) helper()
  }, [])
  return (
    <>
      {
        user &&
        <userVerificationContext.Provider value={{userVerification,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <ApproveAccount />
          </div>
        </userVerificationContext.Provider>
      }
    </>
  )
}

export default page