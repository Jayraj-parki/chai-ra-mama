
import ChangePassword from '@/ComponentsAdmin/changePassword/ChangePassword';

const page = () => {
  return (
    <>
      
        <div className='container-fluid p-lg-4  m-0'>
          <ChangePassword/>
        </div>
      
    </>
  )
}
export const metadata = {
  title: "Change Password",
  description: "Static Desciption"
}
export default page