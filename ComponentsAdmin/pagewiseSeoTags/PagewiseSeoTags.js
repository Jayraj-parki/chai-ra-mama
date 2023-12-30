"use client"
import { useEffect, useState } from 'react'
import style from "./pagewiseSeoTags.module.scss"
import TagIcon from '@mui/icons-material/Tag';
import Link from 'next/link';
import PagewiseSeoTagsEdit from '../pagewiseSeoTagsEdit/PagewiseSeoTagsEdit';
import { useAuth } from '@/app/layout';
import { usePageTagContext } from '../adminPages/PagewiseTagsPage';

const PagewiseSeoTags = () => {
  const { pageTags, helper } = usePageTagContext()
  const { isAdminAuthorized } = useAuth()
  const [editData, setEditData] = useState({ active: false, title: "", _id: "", pId: "", keyword: "", desc: "" })
  useEffect(() => {
    helper()
  }, [])
  return (

    <div className={style.pagewiseSeoTags + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto'}>
        <TagIcon className={style.icon + ' col-auto my-auto p-0 '} />
        <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Pagewise SEO Tags</h3>
        <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      <PagewiseSeoTagsEdit editData={editData} setEditData={setEditData} />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  align-middle text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border ' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border ' >PageId</th>
            <th className='text-capitalize p-2 pb-4 border ' >Meta Title</th>
            <th className='text-capitalize p-2 pb-4 border ' >Meta Keyword</th>
            <th className='text-capitalize p-2 pb-4 border ' >Meta Description</th>
            {isAdminAuthorized && <th className='text-capitalize p-2 pb-4 border ' >Actions</th>}
          </thead>
          <tbody>
            {
              pageTags?.map((val, index) =>
                <tr key={val?.pageId + "" + index} className=''>
                  <td >{index + 1}</td>
                  <td className='px-3 text-start'>{val?.pageId}</td>
                  <td className='px-3 text-start'>{val?.metaTitle}</td>
                  <td className='px-3 text-start'>{val?.metaKeyword}</td>
                  <td className='px-3 text-start'>{val?.metaDesc}</td>
                  {isAdminAuthorized && <td ><button onClick={() => setEditData({ active: true, title: val?.metaTitle, _id: val?._id, pId: val?.pageId, keyword: val?.metaKeyword, desc: val?.metaDesc })} className='btn btn-primary text-decoration-none '>Edit</button></td>}
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PagewiseSeoTags