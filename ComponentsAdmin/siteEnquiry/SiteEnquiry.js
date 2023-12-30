"use client"
import { useEffect, useState } from 'react'
import style from "./siteEnquiry.module.scss"
import InfoIcon from '@mui/icons-material/Info'
import Link from 'next/link';
import { useSiteEnquiryContext } from '../adminPages/SiteEnquiriesPage';
const SiteEnquiry = () => {
  const { siteEnqData, helper } = useSiteEnquiryContext()
  useEffect(() => {
    helper()
  }, [])
  return (

    <div className={style.siteEnquiry + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <InfoIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Site Enquiry</h3>
        </div>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 ms-auto text-capitalize'> Go back</Link>
      </div>
      <hr />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >name</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >email</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >subject</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >message</th>
          </thead>
          <tbody>
            {
              siteEnqData?.map((val, index) =>
                <tr key={val?._id + "" + index + "" + Math?.random(10000)} className=''>

                  <td className='align-middle' >{index+1}</td>
                  <td className='align-middle' >{val?.contactName}</td>
                  <td className='align-middle'>{val?.contactEmail} </td>
                  <td className='align-middle'>{val?.contactSubject} </td>
                  <td className='align-middle'>{val?.contactMessage} </td>
                </tr>
              )}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SiteEnquiry