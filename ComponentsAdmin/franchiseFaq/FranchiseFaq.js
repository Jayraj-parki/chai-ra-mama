import React, { useState } from 'react'
import style from "./franchiseFaq.module.scss"
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Image from 'next/image';
import Link from 'next/link';
const FranchiseFaq = () => {
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

    <div className={style.franchiseFaq + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <QuestionAnswerIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Franchise Questions</h3>
        </div>
        <Link href="./franchise-faq/add" className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Franchise Question</Link>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
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
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Questions</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            <tr className=''>
              <td className='align-middle' >1</td>
              <td className='align-middle' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</td>
              <td className='text-center align-middle'>
                <Link href="./franchise-faq/edit/12345" className='btn btn-primary text-decoration-none mx-2 text-capitalize'>Edit</Link>
                <button className='btn btn-danger text-decoration-none m-2 text-capitalize'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FranchiseFaq