"use client"
import { useAuth } from '@/app/layout';
import Gallery from '@/ComponentsAdmin/gallery/Gallery';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <Gallery/>
        </div>
      }
    </>
  )
}

export default page