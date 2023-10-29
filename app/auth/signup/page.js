"use client"
import SignUp from "@/ComponentsAdmin/admin_SignUp/SignUp"
import { useEffect } from "react";
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
      <SignUp/>
    </>

  )
}

export default page