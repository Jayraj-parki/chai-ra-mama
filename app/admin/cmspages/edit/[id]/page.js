"use client"
import React  from 'react'
import { useAuth } from '@/app/layout';
import CmsEdit from '@/ComponentsAdmin/cmsEdit/CmsEdit';

const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <CmsEdit id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page