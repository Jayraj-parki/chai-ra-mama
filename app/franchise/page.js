import FranchiseBanner from '@/components/franchise_banner/FranchiseBanner'
import FranchisePartnerProfit from '@/components/franchise_partner_profit/FranchisePartnerProfit'
import FranchisePartnership from '@/components/franchise_partnership/FranchisePartnership'
import React from 'react'

const page = () => {
  return (
    <>
      <FranchiseBanner/>
      <FranchisePartnership/>
      <FranchisePartnerProfit/>
    </>
  )
}

export default page