"use client"
import { useAuth } from '@/app/layout';
import HeadersAdd from '@/ComponentsAdmin/headerAdd/HeadersAdd';
const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <HeadersAdd/>
        </div>
      }
    </>
  )
}

export default page