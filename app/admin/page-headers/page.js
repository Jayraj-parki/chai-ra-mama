"use client"
import { useAuth } from '@/app/layout';
import HeadersList from '@/ComponentsAdmin/headersList/HeadersList';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <HeadersList/>
        </div>
      }
    </>
  )
}

export default page