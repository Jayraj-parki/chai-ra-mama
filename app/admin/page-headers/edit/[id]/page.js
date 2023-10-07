"use client"
import { useAuth } from '@/app/layout';
import HeadersEdit from '@/ComponentsAdmin/headersEdit/HeadersEdit';
const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <HeadersEdit id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page