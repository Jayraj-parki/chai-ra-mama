"use client"
import { useAuth } from '@/app/layout';
import MenuAdd from '@/ComponentsAdmin/menuAdd/MenuAdd';
const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <MenuAdd/>
        </div>
      }
    </>
  )
}

export default page