"use client"

import Dashboard from "@/components/dashboard/Dashboard"
import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../layout"
import { getLocalUser } from "@/services/localUser/getLocalUser"

const dashboardContext = createContext()
export const useDashboardContext = () => {
  return useContext(dashboardContext)
}

const page = () => {
  const { userCred } = useAuth()
  const [userProfileData, setUserData] = useState()
  const getUserUtils = async () => {
    await getLocalUser(userCred, setUserData)
  }
  useEffect(() => {
    getUserUtils()
  }, [userCred])
  return (
    <>
      <dashboardContext.Provider value={{ userProfileData, getUserUtils}}>
          <Dashboard />
      </dashboardContext.Provider>
    </>
  )
}

// Static MetaTag
// export const metadata = {
//   title: " Static title",
//   description: "Static Desciption"
// }

// dynamic metadata

// export async function generateMetadata({ params }) {
//   return {
//     title: 'Dynamic Title',
//     description: "Dynamic Desciption"
//   }
// }

export default page
