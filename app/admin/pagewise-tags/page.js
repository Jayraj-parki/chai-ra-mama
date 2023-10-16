"use client"
import { useAuth } from '@/app/layout';
import PagewiseSeoTags from '@/ComponentsAdmin/pagewiseSeoTags/PagewiseSeoTags';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <PagewiseSeoTags/>
        </div>
      }
    </>
  )
}

export default page