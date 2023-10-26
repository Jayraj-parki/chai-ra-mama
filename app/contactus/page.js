"use client"
import ContactBanner from '@/components/contact_banner/ContactBanner'
import ContactDetails from '@/components/contact_contactDetails/ContactDetails'
import { getDataService } from '@/services/getDataService'
import { createContext, useContext, useEffect, useState } from 'react'

const contactUsUIContext = createContext()
export const useContactUsUIContext = () => {
  return useContext(contactUsUIContext)
}

const page = () => {
  const [contactData, setData] = useState()
  const helper = async () => {
    await getDataService(setData, "site-details/ui")
  }
  useEffect(() => {
   helper()
  }, [])
  return (
    <>
    <contactUsUIContext.Provider value={{contactData,helper}}>
      <ContactBanner />
      <ContactDetails/>
    </contactUsUIContext.Provider>
    </>
  )
}

export default page