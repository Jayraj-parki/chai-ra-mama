"use client"
import { useAuth } from '@/app/layout';
import SubMenuAdd from '@/ComponentsAdmin/subMenuAdd/subMenuAdd';
const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <SubMenuAdd/>
        </div>
      }
    </>
  )
}

export default page