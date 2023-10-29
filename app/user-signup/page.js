"use client"
import { useEffect } from "react";
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import LocalSignUp from "@/components/LocalSignUp/LocalSignUp";
const page = () => {
  // const { adminCred } = useAuth()
  // const router = useRouter()

  // useEffect(() => {
  //   if (adminCred) {
  //     router.push('/admin/home');
  //   }
  // }, [adminCred,router])
  return (
    <>
      <LocalSignUp/>
    </>

  )
}

export default page