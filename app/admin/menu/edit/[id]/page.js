"use client"

import { useAuth } from '@/app/layout';
import MenuEdit from '@/ComponentsAdmin/menuEdit/MenuEdit';
const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <MenuEdit id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page