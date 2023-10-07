"use client"
import { useAuth } from '@/app/layout';
import HomeBannerEdit from '@/ComponentsAdmin/homeBannerEdit/HomeBannerEdit';

const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <HomeBannerEdit id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page