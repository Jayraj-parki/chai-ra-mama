"use client"
import { useAuth } from '@/app/layout';
import HomeBanners from '@/ComponentsAdmin/homeBanner/HomeBanners';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <HomeBanners/>
        </div>
      }
    </>
  )
}

export default page