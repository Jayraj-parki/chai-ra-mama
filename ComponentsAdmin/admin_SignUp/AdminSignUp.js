"use client"

import { useEffect } from "react";
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import SignUp from "./SignUp";
const AdminSignUp = () => {
  const { adminCred } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (adminCred) {
      router.push('/admin/home');
    }
  }, [adminCred,router])
  return (
    <>
      {!adminCred &&  <SignUp/>}
    </>

  )
}

export default AdminSignUp