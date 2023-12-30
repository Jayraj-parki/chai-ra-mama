"use client"
import { useEffect, useState } from 'react'
import style from "./approvedUsers.module.scss"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Link from 'next/link';
import { useApprovedUserContext } from '../adminPages/ApprovedUsersPage';

const ApprovedUsers = () => {
  const { approvedUser, helper } = useApprovedUserContext ()
  useEffect(() => {
    helper()
  }, [])
  return (
    <div className={style.approvedUsers + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto'}>
        <VerifiedUserIcon className={style.icon + ' col-auto my-auto p-0 '} />
        <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Approved Users</h3>
        <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >User first Name</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >User last Name</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >User Email</th>
          </thead>
          <tbody>
            {
              approvedUser?.map((val, index) =>
                val?.approval == "approved" ?
                  <tr key={index+""+Math?.random(10000)} className='text-center'>
                    <td >{index + 1}</td>
                    <td className='px-3 '>{val?.firstName}</td>
                    <td className='px-3 '>{val?.lastName}</td>
                    <td className='text-center align-middle'>
                      {val?.email}
                    </td>
                  </tr>
                  : null
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ApprovedUsers