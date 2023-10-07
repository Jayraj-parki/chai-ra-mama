"use client"
import { useAuth } from '@/app/layout';
import GalleryAdd from '@/ComponentsAdmin/galleryAdd/GalleryAdd';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <GalleryAdd/>
        </div>
      }
    </>
  )
}

export default page