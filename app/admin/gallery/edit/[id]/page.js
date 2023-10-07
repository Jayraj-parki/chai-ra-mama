"use client"
import { useAuth } from '@/app/layout';
import GalleryEdit from '@/ComponentsAdmin/galleryEdit/GalleryEdit';

const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <GalleryEdit id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page