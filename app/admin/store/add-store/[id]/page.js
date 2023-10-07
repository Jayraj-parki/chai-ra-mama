"use client"
import { useAuth } from '@/app/layout';
import Store from '@/ComponentsAdmin/store/Store';
const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <Store id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page