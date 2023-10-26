"use client"
import ApprovedUsers from '@/ComponentsAdmin/approvedUsers/ApprovedUsers';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';

const ApprovedUserContext = createContext()
export const useApprovedUserContext = () => {
  return useContext(ApprovedUserContext)
}

const page = () => {
  const { user } = useAuth()
  const [approvedUser, setData] = useState()

  const helper = async () => {
    await getDataService(setData, "approve")
  }
  useEffect(() => {
    if (user) helper()
  }, [])
  return (
    <>
      {
        user &&
        <ApprovedUserContext.Provider value={{approvedUser,helper}}>
          <div className='container-fluid p-lg-4  m-0'>
            <ApprovedUsers />
          </div>
        </ApprovedUserContext.Provider>
      }
    </>
  )
}

export default page