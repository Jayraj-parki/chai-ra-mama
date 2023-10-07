"use client"
import { useAuth } from '@/app/layout';
import ClientFeedback from '@/ComponentsAdmin/clientFeedback/ClientFeedback';

const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user && 
        <div className='container-fluid p-lg-4  m-0'>
          <ClientFeedback/>
        </div>
      }
    </>
  )
}

export default page