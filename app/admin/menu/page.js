"use client"
import React, { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import Menu from '@/ComponentsAdmin/menu/Menu';

const page = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/admin/signin")
    }
    else {
      localStorage.setItem('lastVisitedPage', '/admin/menu');
    }
  }, [user,router])
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <Menu/>
        </div>
      }
    </>
  )
}

export default page