"use client"
import FranchiseBanner from '@/components/franchise_banner/FranchiseBanner'
import FAQ from '@/components/franchise_faq/FAQ'
import FranchisePartnerProfit from '@/components/franchise_partner_profit/FranchisePartnerProfit'
import FranchisePartnership from '@/components/franchise_partnership/FranchisePartnership'
import { getDataService } from '@/services/getDataService'
import { createContext, useContext, useEffect, useState } from 'react'

const faqUiContext=createContext()
export const useFaqUiContext=()=>{
  return useContext(faqUiContext)
}

const FrancisePage = () => {
  const [faqs, setData] = useState()
  const helper = async () => {
    await getDataService(setData,"franchise-faq")
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
    <faqUiContext.Provider value={{faqs}}>
      <FranchiseBanner/>
      <FranchisePartnership/>
      <FranchisePartnerProfit/>
      <FAQ/>
    </faqUiContext.Provider>
    </>
  )
}

export default FrancisePage