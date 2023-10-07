"use client"
import { useAuth } from '@/app/layout';
import FranchiseFaqAdd from '@/ComponentsAdmin/franchiseFaqAdd/FranchiseFaqAdd';
const page = (  ) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <FranchiseFaqAdd/>
        </div>
      }
    </>
  )
}

export default page