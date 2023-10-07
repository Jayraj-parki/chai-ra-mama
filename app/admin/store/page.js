"use client"
import { useAuth } from '@/app/layout';
import StoreCity from '@/ComponentsAdmin/storeCity/StoreCity';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <StoreCity/>
        </div>
      }
    </>
  )
}

export default page