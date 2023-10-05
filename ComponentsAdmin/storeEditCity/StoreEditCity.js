import React, { useState } from 'react'
import style from "./storeEditCity.module.scss"
import Image from 'next/image';
const StoreEditCity = () => {
  return (

    <div className={' container-fluid my-4  '}>
      <div className={style.storeEditCity + 'row col-12 col-lg-8 shadow rounded-4  col-xl-6 p-4 mx-auto'}>
        <div className={style.header + ' row col-12 mx-auto'}>
          <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Store city</h3>
        </div>
        <hr />
        <div className='row col-12 mx-auto mt-2'>
          <div className=''>
            <div className="mb-4 ">
              <label for="editCity" className="form-label">City Name</label>
              <input type="text" className="form-control" id="editCity" aria-describedby="emailHelp" placeholder='Write city name here' />
            </div>
            <button type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">Update</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default StoreEditCity