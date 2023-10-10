"use client"

import { useAuth } from '@/app/layout';
import CmsPages from '@/ComponentsAdmin/cmsPages/CmsPages';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <CmsPages/>
        </div>
      }
    </>
  ) 
}

export default page