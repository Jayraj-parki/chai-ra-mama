"use client"
import { useAuth } from '@/app/layout';
import SubMenuEdit from '@/ComponentsAdmin/subMenuEdit/SubMenuEdit';
const page = ({params}) => {
  const { user } = useAuth()

  return (
    <>
      {
        user &&
        <div className='container-fluid p-lg-4  m-0'>
          <SubMenuEdit id={params?.id}/>
        </div>
      }
    </>
  )
}

export default page