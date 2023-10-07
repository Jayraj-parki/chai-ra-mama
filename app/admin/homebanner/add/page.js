"use client"
import { useAuth } from '@/app/layout';
import HomeBannerAdd from '@/ComponentsAdmin/homeBannerAdd/HomeBannerAdd';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <HomeBannerAdd />
        </div>
      }
    </>
  )
}

export default page