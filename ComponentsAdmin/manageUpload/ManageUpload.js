"use client"
import { useState } from 'react'
import style from "./manageUpload.module.scss"
import UploadIcon from '@mui/icons-material/Upload';
import Link from 'next/link';
import Image from 'next/image';
import ImageModal from '../imageModal/ImageModal';
const ManageUpload = () => {
  const [modal, setModal] = useState({
    active: false,
    image: "",
  })
  return (
    <div className={style.manageUpload + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto'}>
        <UploadIcon className={style.icon + ' col-auto my-auto p-0 '} />
        <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Manage Uploads</h3>
        <button className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Upload Image</button>
        <Link href="./home" className='col-auto  btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr /> 
      <ImageModal modal={modal} setModal={setModal} />
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Image Url</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Images</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Action</th>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td >1</td>
              <td className='px-3 '>url</td>
              <td className='px-3 '><Image onClick={() => setModal({ active: true, image: "/assets/images/g1.png" })}  className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/g1.png"} alt="..." /></td>
              <td className='text-center align-middle'>
                <button className='btn btn-success text-decoration-none mx-2  text-capitalize'>Edit </button>
                <button className='btn btn-danger text-decoration-none m-2'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageUpload