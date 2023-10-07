import { useState } from 'react'
import style from "./homeBannerAdd.module.scss"
import Image from 'next/image';
const HomeBannerAdd = () => {
  return (

    <div className={' container-fluid my-4  '}>
      <div className={style.homeBannerAdd + 'row col-12 col-lg-8 shadow rounded-4  col-xl-6 p-4 mx-auto'}>
        <div className={style.header + ' row col-12 mx-auto'}>
          <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Add HomeBanner Image</h3>
        </div>
        <hr />
        <div className='row col-12 mx-auto mt-2'>
          <div>
            <div className="mb-4">
              <label for="editImage2" className="form-label">Add Image</label>
              <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={"/assets/images/1.png"} alt="..." />
              <input type="file" accept="image/*" className="form-control" id="editImage2" />
            </div>
            <button type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBannerAdd