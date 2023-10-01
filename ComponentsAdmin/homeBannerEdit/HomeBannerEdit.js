import React, { useState } from 'react'
import style from "./homeBannerEdit.module.scss"
import PagesIcon from '@mui/icons-material/Pages';
import Image from 'next/image';
import Link from 'next/link';
const HomeBannerEdit = ({ id }) => {
  return (

    <div className={' container-fluid my-4  '}>
      <div className={style.homeBannerEdit + 'row col-12 col-lg-8 shadow rounded-4  col-xl-6 p-4 mx-auto'}>
        <div className={style.header + ' row col-12 mx-auto'}>
          <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Add or edit home banner</h3>
        </div>
        <hr />
        <div className='row col-12 mx-auto mt-2'>
          <div className=' mb-3'>
            {/* <h5 className={style.heading + ' fw-bold col-auto text-capitalize'}>Add Banner</h5> */}
            <label for="editImage1" className="form-label ">Add Image</label>
            <div className="mb-2">
              <input type="file" accept="image/*" className="form-control " id="editImage1" />
            </div>
              <button type="submit" className="btn btn-primary mx-auto">Add </button>
          </div>
          <hr />
          <div>
            {/* <h5 className={style.heading + ' fw-bold col-auto text-capitalize'}>Ed/it Banner</h5> */}
            <div className="mb-4">
              <label for="editImage2" className="form-label">Edit Image</label>
              <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={"/assets/images/1.png"} alt="..." />
              <input type="file" accept="image/*" className="form-control" id="editImage2" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBannerEdit