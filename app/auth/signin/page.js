
"use client"
import SignIn from "@/ComponentsAdmin/admin_SignIn/SignIn"
import { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"

const page = () => {
  const { adminCred } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (adminCred) {
      router.push('/admin/home');
    }
  }, [adminCred,router])
  return (
    <>
      {
        !adminCred &&  <SignIn />
      }
    </>
  )
}

export default page