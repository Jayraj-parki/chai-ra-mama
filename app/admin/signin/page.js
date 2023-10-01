
"use client"
import SignIn from "@/ComponentsAdmin/admin_SignIn/SignIn"
import React, { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
const page = () => {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      const lastVisitedPage = localStorage.getItem('lastVisitedPage');
      router.push(lastVisitedPage || '/admin/home');
    }
  }, [user,router])
  return (

    <>
      {
        !user && <SignIn />
      }
    </>
  )
}

export default page