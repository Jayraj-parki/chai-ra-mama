"use client"

import { useAuth } from '@/app/layout';
import ClientFeedbackAdd from '@/ComponentsAdmin/clientFeedbackAdd/ClientFeedbackAdd';
const page = () => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <ClientFeedbackAdd/>
        </div>
      }
    </>
  )
}

export default page