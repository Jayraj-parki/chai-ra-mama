"use client"
import { useState } from 'react'
import style from "./approvedUsers.module.scss"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import Link from 'next/link';
const ApprovedUsers = () => {

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
            <th className='text-capitalize p-2 pb-4 border text-center' >User Name</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >User Email</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Verified On</th>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td >1</td>
              <td className='px-3 '>user</td>
              <td className='px-3 '>user@gmail.com</td>
              <td className='text-center align-middle'>
                10-May-2002 12:09:32 Pm
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ApprovedUsers