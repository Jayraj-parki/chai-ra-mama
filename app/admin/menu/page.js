"use client"
import { useAuth } from '@/app/layout';
import Menu from '@/ComponentsAdmin/menu/Menu';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <Menu/>
        </div>
      }
    </>
  )
}

export default page