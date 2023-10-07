"use client"
import { useAuth } from '@/app/layout';
import FranchiseFaq from '@/ComponentsAdmin/franchiseFaq/FranchiseFaq';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <FranchiseFaq/>
        </div>
      }
    </>
  )
}

export default page