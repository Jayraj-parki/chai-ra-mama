"use client"
import SiteLogs from '@/ComponentsAdmin/siteLogs/SiteLogs';
import { useAuth } from '@/app/layout';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <SiteLogs/>
        </div>
      }
    </>
  )
}

export default page