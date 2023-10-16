"use client"
import SiteDetails from '@/ComponentsAdmin/siteDetails/SiteDetails';
import { useAuth } from '@/app/layout';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <SiteDetails/>
        </div>
      }
    </>
  )
}

export default page