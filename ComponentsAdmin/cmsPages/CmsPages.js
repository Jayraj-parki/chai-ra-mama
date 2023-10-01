import React, { useState } from 'react'
import style from "./cmsPages.module.scss"
import PagesIcon from '@mui/icons-material/Pages';
import Image from 'next/image';
import Link from 'next/link';
const CmsPages = () => {
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

    <div className={style.cmsPages + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto'}>
        <PagesIcon className={style.icon + ' col-auto my-auto p-0 '} />
        <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>CMS Pages</h3>
      </div>
      <hr />
      <div className={style.modal+` modal fade ${modal?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
      <div className='row col-12 mx-auto mt-5'>
        <table className="col-12 table table-bordered table-hover  text-center">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Heading</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Images</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            <tr className=''>
              <td >1</td>
              <td className='px-3 text-start'>why to choose us</td>
              <td > <Image onClick={() => showImage("/assets/images/g1.png")} className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/g1.png"} alt="..." /></td>
              <td ><Link href="./cmspages/edit/12345" className='btn btn-primary text-decoration-none '>Edit</Link></td>
            </tr>
            <tr className=''>
              <td >1</td>
              <td className='px-3 text-start'>why to choose us</td>
              <td > <Image onClick={() => showImage("/assets/images/g2.png")} className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/g2.png"} alt="..." /></td>
              <td ><Link href="./cmspages/edit/12345" className='btn btn-primary text-decoration-none '>Edit</Link></td>
            </tr>
            <tr className=''>
              <td >1</td>
              <td className='px-3 text-start'>why to choose us</td>
              <td > <Image onClick={() => showImage("/assets/images/g3.png")} className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/g3.png"} alt="..." /></td>
              <td ><Link href="./cmspages/edit/12345" className='btn btn-primary text-decoration-none '>Edit</Link></td>
            </tr>
            <tr className=''>
              <td >1</td>
              <td className='px-3 text-start'>why to choose us</td>
              <td > <Image onClick={() => showImage("/assets/images/about.jpeg")} className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/about.jpeg"} alt="..." /></td>
              <td ><Link href="./cmspages/edit/12345" className='btn btn-primary text-decoration-none '>Edit</Link></td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CmsPages