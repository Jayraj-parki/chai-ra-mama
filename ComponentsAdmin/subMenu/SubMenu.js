import React, { useState } from 'react'
import style from "./subMenu.module.scss"
import WidgetsIcon from '@mui/icons-material/Widgets';
import Image from 'next/image';
import Link from 'next/link';
const SubMenu = () => {
  const [modal, setModal] = useState({
    active: false,
    image: "",
  })
  const showImage = (img) => {
    setModal({ active: true, image: img })
  }
  const closeImage = () => {
    setModal({ active: false, image: "" })
  }
  return (

    <div className={style.subMenu + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <WidgetsIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Sub Menu</h3>
        </div>
        <Link href="./add" className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add sub Menu</Link>
        <Link href="../" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />
      <div className={style.modal + ` modal fade ${modal?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={closeImage} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex justify-content-center align-items-center">
              <Image className="rounded w-100 h-100" width={250} height={200} objectFit="cover" src={modal?.image || "/assets/images/1.png"} alt="..." />
            </div>
            <div className="modal-footer">
              <button onClick={closeImage} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize  ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Heading</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Price</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            <tr className=''>
              <td className='align-middle' >1</td>
              <td className='align-middle' >dum Tea</td>
              <td className='align-middle'> 30</td>
              <td className='text-center align-middle'>
                <Link href="./edit/12345" className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</Link>
                <button className='btn btn-danger text-decoration-none mx-2'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SubMenu