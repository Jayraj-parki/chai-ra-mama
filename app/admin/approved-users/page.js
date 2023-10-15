"use client"
import ApprovedUsers from '@/ComponentsAdmin/approvedUsers/ApprovedUsers';
import { useAuth } from '@/app/layout';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <ApprovedUsers/>
        </div>
      }
    </>
  )
}

export default page