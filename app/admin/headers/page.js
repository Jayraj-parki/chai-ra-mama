"use client"
import React, { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import HeadersList from '@/ComponentsAdmin/headersList/HeadersList';

const page = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/admin/signin")
    }
    else {
      localStorage.setItem('lastVisitedPage', '/admin/headers');
    }
  }, [user,router])
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <HeadersList/>
        </div>
      }
    </>
  )
}

export default page