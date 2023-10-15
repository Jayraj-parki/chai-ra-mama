"use client"
import ApproveAccount from '@/ComponentsAdmin/approveAccount/ApproveAccount';
import { useAuth } from '@/app/layout';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <ApproveAccount/>
        </div>
      }
    </>
  )
}

export default page