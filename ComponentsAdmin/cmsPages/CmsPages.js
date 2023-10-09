"use client"
import { useState } from 'react'
import style from "./cmsPages.module.scss"
import PagesIcon from '@mui/icons-material/Pages';
import Image from 'next/image';
import Link from 'next/link';
import CmsEdit from '../cmsEdit/CmsEdit';
import ImageModal from '../imageModal/ImageModal';
const CmsPages = () => {
  const [modal, setModal] = useState({
    active: false,
    image: "",
  })
  const [editData, setEditData] = useState({
    active: false,
    heading: "",
    image: "",
    content: ""
  })
  return (

    <div className={style.cmsPages + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto'}>
        <PagesIcon className={style.icon + ' col-auto my-auto p-0 '} />
        <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>CMS Pages</h3>
        <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />
      {/* image modal */}
      <ImageModal modal={modal} setModal={setModal} />
      {/* edit data model */}
      <CmsEdit editData={editData} setEditData={setEditData} heading={editData?.heading} image={editData?.image} content={editData?.content} />
      {/* Data Table */}
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
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
              <td > <Image onClick={() => setModal({ active: true, image: "/assets/images/g1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/g1.png"} alt="..." /></td>
              <td ><button onClick={() => setEditData({ active: true, heading: "Heading", image: "/assets/images/g1.png", content: "content" })} className='btn btn-primary text-decoration-none '>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CmsPages