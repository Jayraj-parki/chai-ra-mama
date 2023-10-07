"use client"
import { useAuth } from '@/app/layout';
import EditStore from '@/ComponentsAdmin/editStore/EditStore';
const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <EditStore id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page