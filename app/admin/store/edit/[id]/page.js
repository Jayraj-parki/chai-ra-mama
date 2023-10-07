"use client"
import { useAuth } from '@/app/layout';
import StoreEditCity from '@/ComponentsAdmin/storeEditCity/StoreEditCity';
const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <StoreEditCity id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page