"use client"

import { useAuth } from '@/app/layout';
import FranchiseFaqEdit from '@/ComponentsAdmin/franchiseFaqEdit/FranchiseFaqEdit';
const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <FranchiseFaqEdit id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page