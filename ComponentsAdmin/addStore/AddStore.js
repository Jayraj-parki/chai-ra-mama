import React, { useState } from 'react'
import style from "./addStore.module.scss"
import Image from 'next/image';
const AddStore = () => {
  return (

    <div className={' container-fluid my-4  '}>
      <div className={style.addStore + 'row col-12 col-lg-8 shadow rounded-4  col-xl-6 p-4 mx-auto'}>
        <div className={style.header + ' row col-12 mx-auto'}>
          <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Add Store Details</h3>
        </div>
        <hr />
        <div className='row col-12 mx-auto mt-2'>
          <div className=''>
            <div className="mb-4 ">
              <label for="editHeading" className="form-label">Heading</label>
              <input type="text" className="form-control" id="editHeading" aria-describedby="emailHelp" placeholder='write heading here' />
            </div>
            <div className="mb-4 ">
              <label for="editPhone" className="form-label">Phone Number</label>
              <input type="text"  className="form-control" id="editPhone" placeholder='Enter Phone number'/>
            </div>
            <button type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">submit</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default AddStore