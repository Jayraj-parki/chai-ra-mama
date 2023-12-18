"use client"
import { useEffect, useState } from 'react'
import style from "./siteDetails.module.scss"
import Link from 'next/link';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Image from 'next/image';
import ImageModal from '../imageModal/ImageModal';
import { updateSiteDetails } from '@/services/updateSiteDetails';
import { useSiteDetailsContext } from '@/app/admin/site-details/page';
import PopUp from '../PopUp/PopUp';
const SiteDetails = () => {
  const { siteData, helper } = useSiteDetailsContext()
  const [modal, setModal] = useState({ active: false, image: "" })
  const [siteName, setSiteName] = useState(siteData?.siteName)
  const [sitePhone, setSitePhone] = useState(siteData?.sitePhone)
  const [siteEmail, setSiteEmail] = useState(siteData?.siteEmail)
  const [siteFromEmail, setSiteFromEmail] = useState(siteData?.siteFromEmail)
  const [siteForgetPassEmail, setSiteForgetPassEmail] = useState(siteData?.siteForgetPassEmail)
  const [siteCloseOn, setSiteCloseOn] = useState(siteData?.siteCloseOn)
  const [siteOpenHr, setSiteOpenHr] = useState(siteData?.siteOpenHr)
  const [siteLogo, setSiteLogo] = useState(siteData?.siteLogo)
  const [siteFavIcon, setSiteFavIcon] = useState(siteData?.siteFavIcon)
  const [siteAddress, setSiteAddress] = useState(siteData?.siteAddress)
  const [siteMap, setSiteMap] = useState(siteData?.siteMap)
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [siteId, setSiteId] = useState(siteData?._id)
  const updateData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
    await updateSiteDetails({ _id: siteId, siteName, sitePhone, siteEmail, siteFromEmail, siteForgetPassEmail, siteCloseOn, siteOpenHr, siteLogo, siteFavIcon, siteAddress, siteMap,setAlert })
  }
  useEffect(() => {
    setSiteName(siteData?.siteName)
    setSitePhone(siteData?.sitePhone)
    setSiteEmail(siteData?.siteEmail)
    setSiteFromEmail(siteData?.siteFromEmail)
    setSiteForgetPassEmail(siteData?.siteForgetPassEmail)
    setSiteCloseOn(siteData?.siteCloseOn)
    setSiteOpenHr(siteData?.siteOpenHr)
    setSiteLogo(siteData?.siteLogo)
    setSiteFavIcon(siteData?.siteFavIcon)
    setSiteAddress(siteData?.siteAddress)
    setSiteMap(siteData?.siteMap)
    setSiteId(siteData?._id)
  }, [siteData])
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />

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
                  <td className='align-middle' ><input value={siteName} onChange={(e) => setSiteName(e.target.value)}  autoComplete="off"  name="" type="text" className="form-control" placeholder='Site Name' />
                  </td>
                </tr>
                <tr className=''>
                  <td className='align-middle' >Site Phone number</td>
                  <td className='align-middle' ><input value={sitePhone} onChange={(e) => setSitePhone(e.target.value)}  autoComplete="off"  name="" type="text" className="form-control" placeholder='Site Phone number' />
                  </td>
                </tr>
                <tr className=''>
                  <td className='align-middle' >Site Email Id</td>
                  <td className='align-middle' ><input value={siteEmail} onChange={(e) => setSiteEmail(e.target.value)}  autoComplete="off"  name="" type="email" className="form-control" placeholder='Site Email Id' />
                  </td>
                </tr>
                <tr className=''>
                  <td className='align-middle' >From Email Id</td>
                  <td className='align-middle' ><input value={siteFromEmail} onChange={(e) => setSiteFromEmail(e.target.value)}  autoComplete="off"  name="" type="email" className="form-control" placeholder='From Email Id' />
                  </td>
                </tr>
                <tr className=''>
                  <td className='align-middle' >Forget password Email id</td>
                  <td className='align-middle' ><input value={siteForgetPassEmail} onChange={(e) => setSiteForgetPassEmail(e.target.value)}  autoComplete="off"  name="" type="email" className="form-control" placeholder='Forget password Id' />
                  </td>
                </tr>
                <tr className=''>
                  <td className='align-middle' >Closed On</td>
                  <td className='align-middle' ><input value={siteCloseOn} onChange={(e) => setSiteCloseOn(e.target.value)}  autoComplete="off"  name="" type="email" className="form-control" placeholder='Saturday, Sunday' />
                  </td>
                </tr>
                <tr className=''>
                  <td className='align-middle' >Opening Hours</td>
                  <td className='align-middle' ><input value={siteOpenHr} onChange={(e) => setSiteOpenHr(e.target.value)}  autoComplete="off"  name="" type="email" className="form-control" placeholder='Mon - Sat (8:00 -6:00)' />
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
                    <Image onClick={() => setModal({ active: true, image: siteLogo || "/assets/images/1.png" })} className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof siteLogo === "string" && siteLogo?.includes("http") ? siteLogo : siteLogo != null && siteLogo instanceof File ? URL.createObjectURL(siteLogo) : "/assets/images/1.png"} hidden={siteLogo ? false : true} alt="..." />
                    <input onChange={(e) => setSiteLogo(e.target?.files[0])}  autoComplete="off"  type="file" accept="image/*" className="form-control" id="editImage" />
                    <p className='m-0 mt-2 p-0'><small><strong>Note: </strong> Only .jpeg, .jpg, .png format images are allowed</small></p>
                    <p> <small>Please upload (210 x 160) pixel images to maintain designs</small></p>
                  </td>
                </tr>
                <hr className='border-0' />
                <tr className=''>
                  <td className='align-middle' >Site Favicon</td>
                  <td className='align-middle' >
                    <Image onClick={() => setModal({ active: true, image: siteFavIcon || "/assets/images/1.png" })} className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof siteFavIcon === "string" && siteFavIcon?.includes("http") ? siteFavIcon : siteFavIcon != null && siteFavIcon instanceof File ? URL.createObjectURL(siteFavIcon) : "/assets/images/1.png"} hidden={siteFavIcon ? false : true} alt="..." />
                    <input onChange={(e) => setSiteFavIcon(e.target?.files[0])}  autoComplete="off"  type="file" accept="image/*" className="form-control" id="editImage" />
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
                    <td className='align-middle' ><textarea value={siteAddress} onChange={(e) => setSiteAddress(e.target.value)} name="" type="text" className="form-control" placeholder='Address here' ></textarea>
                    </td>
                  </tr>
                  <tr className=''>
                    <td className='align-middle' >Map</td>
                    <td className='align-middle' ><textarea value={siteMap} onChange={(e) => setSiteMap(e.target.value)} name="" type="text" className="form-control" placeholder='Address Map here'  ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='col-12'>
                <button onClick={updateData} type="submit" className="btn btn-primary d-flex col-auto px-4 py-2 mx-auto text-center justify-content-center text-capitalize">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SiteDetails