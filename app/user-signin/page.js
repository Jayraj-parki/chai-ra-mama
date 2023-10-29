"use client"
import { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import LocalSignIn from "@/components/localSignIn/LocalSignIn";

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
      {
        <LocalSignIn />
      }
    </>
  )
}

export default page