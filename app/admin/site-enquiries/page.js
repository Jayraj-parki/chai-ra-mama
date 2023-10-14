"use client"
import { useAuth } from '@/app/layout';
import SiteEnquiry from '@/ComponentsAdmin/siteEnquiry/SiteEnquiry';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <SiteEnquiry/>
        </div>
      }
    </>
  )
}

export default page