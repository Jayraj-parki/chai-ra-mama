
"use client"
import { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import SignIn from './SignIn';

const AdminSignIn = () => {
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

export default AdminSignIn