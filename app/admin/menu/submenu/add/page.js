"use client"
import React, { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import SubMenuAdd from '@/ComponentsAdmin/subMenuAdd/subMenuAdd';
const page = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/admin/signin")
    }
    else {
      // Store the current page location in localStorage
      localStorage.setItem('lastVisitedPage', `/admin/menu/submenu/add`);
    }
  }, [user,router])
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <SubMenuAdd/>
        </div>
      }
    </>
  )
}

export default page