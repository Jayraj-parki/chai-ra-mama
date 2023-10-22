"use client"
import { useEffect, useState } from 'react'
import style from "./siteEnquiry.module.scss"
import InfoIcon from '@mui/icons-material/Info'
import Link from 'next/link';
import SiteEnquiryEdit from '../siteEnquiryEdit/SiteEnquiryEdit';
import SiteEnquiryAdd from '../siteEnquiryAdd/SiteEnquiryAdd';
import { useSiteEnquiryContext } from '@/app/admin/site-enquiries/page';
import { deleteSiteEnquiryData } from '@/services/deleteSiteEnquiryData';
const SiteEnquiry = () => {
  const { siteEnqData, helper } = useSiteEnquiryContext()
  const [editData, setEditData] = useState({ active: false, name: "", email: "", phone: "" })
  const [addData, setAddData] = useState(false)

  const deleteData = async (_id) => {
    await deleteSiteEnquiryData({ _id, helper })
  }
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
        <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Contact Details</button>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      <SiteEnquiryEdit editData={editData} setEditData={setEditData} />
      <SiteEnquiryAdd addData={addData} setAddData={setAddData} />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >name</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >email</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >phone</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            {
              siteEnqData?.map((val, index) =>
                <tr key={val?.contactEmail + "" + index + "" + Math?.random(10000)} className=''>

                  <td className='align-middle' >{index+1}</td>
                  <td className='align-middle' >{val?.contactName}</td>
                  <td className='align-middle'>{val?.contactEmail} </td>
                  <td className='align-middle'>{val?.contactPhone} </td>
                  <td className='text-center align-middle'>
                    <button onClick={() => setEditData({ active: true,_id:val?._id, name: val?.contactName, email: val?.contactEmail, phone: val?.contactPhone })} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                    <button  onClick={()=>deleteData(val?._id)} className='btn btn-danger text-decoration-none m-2'>Delete</button>
                  </td>
                </tr>
              )}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SiteEnquiry