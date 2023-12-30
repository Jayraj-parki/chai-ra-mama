"use client"
import { useAuth } from '@/app/layout';
import SiteContent from '../siteContent/SiteContent';
import SiteSetting from '../siteSetting/SiteSetting';

const HomePage = () => {
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
 
export default HomePage