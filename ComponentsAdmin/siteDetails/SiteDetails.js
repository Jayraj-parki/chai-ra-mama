"use client"
import { useState } from 'react'
import style from "./siteDetails.module.scss"
import Link from 'next/link';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Image from 'next/image';
import ImageModal from '../imageModal/ImageModal';
const SiteDetails = () => {
  const [modal, setModal] = useState({
    active: false,
    image: "",
  })
  return (

    <div className={style.siteDetails + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <SettingsApplicationsIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Site Details</h3>
        </div>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 ms-auto text-capitalize'> Go back</Link>
      </div>
      <hr />
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <div className='col-md-12 col-lg-8 col-xxl-6'>
          <table className=" table table-borderless text-capitalize ">
            <tbody>
              <tr className=''>
                <td className='align-middle' >Site name</td>
                <td className='align-middle' ><input  autocomplete="off"   name="" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >Site Phone number</td>
                <td className='align-middle' ><input  autocomplete="off"   name="" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >Site Email Id</td>
                <td className='align-middle' ><input  autocomplete="off"   name="" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >From Email Id</td>
                <td className='align-middle' ><input  autocomplete="off"   name="" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >Forget password Email id</td>
                <td className='align-middle' ><input  autocomplete="off"   name="" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <SettingsApplicationsIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Site Logo's</h3>
        </div>
      </div>
      <hr />
      {/* image modal */}
      <ImageModal modal={modal} setModal={setModal} />
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <div className='col-md-12 col-lg-8 col-xl-6'>
          <table className=" table table-borderless text-capitalize ">
            <tbody>
              <tr className=''>
                <td className='align-middle' >Logo</td>
                <td className='align-middle' >
                  <Image onClick={() => setModal({ active: true, image: "/assets/images/g1.png" })} className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={"/assets/images/g1.png"} alt="..." />
                  <input  autocomplete="off"   type="file" accept="image/*" className="form-control" id="editImage" />
                  <p className='m-0 mt-2 p-0'><small><strong>Note: </strong> Only .jpeg, .jpg, .png format images are allowed</small></p>
                  <p> <small>Please upload (210 x 160) pixel images to maintain designs</small></p>
                </td>
              </tr>
              <hr className='border-0' />
              <tr className=''>
                <td className='align-middle' >Site Favicon</td>
                <td className='align-middle' >
                  <Image onClick={() => setModal({ active: true, image: "/assets/images/g1.png" })} className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={"/assets/images/g1.png"} alt="..." />
                  <input  autocomplete="off"   type="file" accept="image/*" className="form-control" id="editImage" />
                  <p className='m-0 mt-2 p-0'><small><strong>Note: </strong> Only .jpeg, .jpg, .png format images are allowed</small></p>
                  <p> <small>Please upload (80 x 80) pixel images to maintain designs</small></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
          <div className='col-auto  d-flex flex-row justify-content-start mb-3'>
            <SettingsApplicationsIcon className={style.icon + ' col-auto my-auto p-0 '} />
            <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Contact Details</h3>
          </div>
        </div>
        <hr />
        <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
          <div className='col-md-12 col-lg-8 '>
            <table className=" table table-borderless text-capitalize ">
              <tbody>
                <tr className=''>
                  <td className='align-middle' >Address</td>
                  <td className='align-middle' ><textarea name="" type="text" className="form-control" placeholder='write something here' ></textarea>
                  </td>
                </tr>
                <tr className=''>
                  <td className='align-middle' >Map</td>
                  <td className='align-middle' ><textarea name="" type="text" className="form-control" placeholder='write something here'  ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='col-12'>

              <button type="submit" className="btn btn-primary d-flex col-auto px-4 py-2 mx-auto text-center justify-content-center text-capitalize">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteDetails