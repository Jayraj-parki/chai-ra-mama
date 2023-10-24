"use client"
import { useState } from 'react'
import style from "./siteLogs.module.scss"
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';
const SiteLogs = () => {
 
  return (

    <div className={style.siteLogs + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto'}>
        <LoginIcon className={style.icon + ' col-auto my-auto p-0 '} />
        <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Site Logs</h3>
        <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >User</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >IP address</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Login Time</th>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td >1</td>
              <td className='px-3 '>user@gmail.com</td>
              <td className='px-3 '>10.3.232.32</td>
              <td className='px-3 '>10-may-2002 10:09:45AM</td>
             </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SiteLogs