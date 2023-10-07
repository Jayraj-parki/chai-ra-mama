"use client"
import { useAuth } from '@/app/layout';
import StoreAddCity from '@/ComponentsAdmin/storeAddCity/StoreAddCity';
const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <StoreAddCity/>
        </div>
      }
    </>
  )
}

export default page