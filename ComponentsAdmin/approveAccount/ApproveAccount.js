"use client"
import { useEffect,  } from 'react'
import style from "./approveAccount.module.scss"
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Link from 'next/link';
import { useUserVerificationContext } from '@/app/admin/approve-account/page';
import { updateUserApprovalStatus } from '@/services/updateUserApprovalStatus';
const ApproveAccount = () => {
  const { userVerification, helper } = useUserVerificationContext()
  const updateData=async(email,status)=>{
    await updateUserApprovalStatus(email,status,helper)
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <div className={style.approveAccount + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto'}>
        <HowToRegIcon className={style.icon + ' col-auto my-auto p-0 '} />
        <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Approve or Reject User</h3>
        <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >User Name</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >User Email</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Status</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Action</th>
          </thead>
          <tbody>
            {
              userVerification?.map((val,index) =>
                  <tr key={val?.email+""+index} className={`text-center align-middle `}>
                    <td >{index+1}</td>
                    <td className= {`px-3 text-light ${val?.approval=="approved" ? " bg-success":val?.approval=="rejected"?"bg-danger":"bg-secondary"}`}>{val?.firstName+ " "+ val?.lastName}</td>
                    <td className= {`px-3 text-light ${val?.approval=="approved" ? " bg-success":val?.approval=="rejected"?"bg-danger":"bg-secondary"}`}>{val?.email}</td>
                    <td className= {`px-3 text-light ${val?.approval=="approved" ? " bg-success":val?.approval=="rejected"?"bg-danger":"bg-secondary"}`}>{val?.approval}</td>
                    <td className='text-center align-middle'>
                    {val?.approval!="approved" && <button onClick={()=>updateData(val?.email,"approved")} className='btn btn-success text-decoration-none mx-2  text-capitalize'>Approve </button>}  
                    {val?.approval!="rejected" &&<button onClick={()=>updateData(val?.email,"rejected")} className='btn btn-danger text-decoration-none m-2'>Reject</button>}
                    </td>
                  </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ApproveAccount