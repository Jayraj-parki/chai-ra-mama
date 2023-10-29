"use client"
import { useAuth } from '@/app/layout';
import SiteContent from '@/ComponentsAdmin/siteContent/SiteContent';
import SiteSetting from '@/ComponentsAdmin/siteSetting/SiteSetting';
const page = () => {
  const { adminCred } = useAuth()

  return (
    <>
      {
        adminCred && 
        <div className='container-fluid p-lg-4  m-0'>
          <SiteContent />
          <SiteSetting/>
        </div>
      }
    </>
  )
}

export default page