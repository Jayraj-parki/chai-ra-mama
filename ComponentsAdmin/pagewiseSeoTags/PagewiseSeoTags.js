"use client"
import { useState } from 'react'
import style from "./pagewiseSeoTags.module.scss"
import TagIcon from '@mui/icons-material/Tag';
import Image from 'next/image';
import Link from 'next/link';
import PagewiseSeoTagsEdit from '../pagewiseSeoTagsEdit/PagewiseSeoTagsEdit';

const PagewiseSeoTags = () => {
  
  const [editData, setEditData] = useState({
    active: false,
    title: "",
    metaTag: "",
    metaKeyword: "",
    metaDescription: "",
  })
  return (

    <div className={style.pagewiseSeoTags + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto'}>
        <TagIcon className={style.icon + ' col-auto my-auto p-0 '} />
        <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Pagewise SEO Tags</h3>
        <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />
      
      {/* edit data modal */}
      <PagewiseSeoTagsEdit editData={editData} setEditData={setEditData}/>
      {/* Data Table */}
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Heading</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Meta tags</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            <tr className=''>
              <td >1</td>
              <td className='px-3 text-start'>Home page</td>
              <td >Meta tag</td>
              <td ><button onClick={() => setEditData({ active: true, heading: "Heading", image: "/assets/images/g1.png", content: "content" })} className='btn btn-primary text-decoration-none '>Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PagewiseSeoTags