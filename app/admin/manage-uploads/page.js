"use client"
import { useAuth } from '@/app/layout';
import ManageUpload from '@/ComponentsAdmin/manageUpload/ManageUpload';
import Menu from '@/ComponentsAdmin/menu/Menu';

const page = () => {
  const { adminCred } = useAuth()
  return (
    <>
      {
        adminCred &&  
        <div className='container-fluid p-lg-4  m-0'>
          <ManageUpload/>
        </div> 
      }
    </>
  )
}

export default page