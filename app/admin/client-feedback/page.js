"use client"
import React, { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import ClientFeedback from '@/ComponentsAdmin/clientFeedback/ClientFeedback';

const page = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/admin/signin")
    }
    else {
      localStorage.setItem('lastVisitedPage', '/admin/client-feedback');
    }
  }, [user,router])
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <ClientFeedback/>
        </div>
      }
    </>
  )
}

export default page