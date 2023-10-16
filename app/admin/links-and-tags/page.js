"use client"
import LinksAndTags from '@/ComponentsAdmin/linksAndTags/LinksAndTags';
import { useAuth } from '@/app/layout';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <LinksAndTags/>
        </div>
      }
    </>
  )
}

export default page