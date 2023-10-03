"use client"
import React, { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import FranchiseFaq from '@/ComponentsAdmin/franchiseFaq/FranchiseFaq';

const page = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/admin/signin")
    }
    else {
      localStorage.setItem('lastVisitedPage', '/admin/franchise-faq');
    }
  }, [user,router])
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <FranchiseFaq/>
        </div>
      }
    </>
  )
}

export default page