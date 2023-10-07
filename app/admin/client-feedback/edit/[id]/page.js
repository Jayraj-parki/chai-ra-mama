"use client"

import { useAuth } from '@/app/layout';
import ClientFeedbackEdit from '@/ComponentsAdmin/clientFeedbackEdit/ClientFeedbackEdit';
const page = ({params}) => {
  const { user } = useAuth()
  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <ClientFeedbackEdit id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page