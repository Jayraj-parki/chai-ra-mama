"use client"
import React, { useEffect } from 'react'
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import SubMenuEdit from '@/ComponentsAdmin/subMenuEdit/SubMenuEdit';
const page = ({params}) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/admin/signin")
    }
    else {
      // Store the current page location in localStorage
      localStorage.setItem('lastVisitedPage', `/admin/menu/submenu/edit/${params?.id}`);
    }
  }, [user,router])
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <SubMenuEdit id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page