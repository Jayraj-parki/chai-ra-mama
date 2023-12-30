"use client"
import { useEffect, useState } from 'react'
import style from "./myStores.module.scss"
import Link from 'next/link';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Button } from '@mui/material';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';

import { SendRequestForStoreIncharge } from '@/services/SendRequestForStoreIncharge';
import { getAssignedStores } from '@/services/getAssignedStores';
import { useDashboardContext } from '@/components/dashboard/Dashboard';

const MyStores = () => {
  const { userCred } = useAuth()
  const { userProfileData } = useDashboardContext()
  const [storeCity, setStoreCity] = useState()
  const [storeDetails, setStoreDetails] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [city, setCity] = useState("");
  const [store, setStore] = useState("");
  const [assignedStore, setAssignedStore] = useState([]);

  const sendRequest = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await SendRequestForStoreIncharge({ store, inchargeName: userProfileData?.firstName + " " + userProfileData?.lastName, inchargeEmail: userProfileData?.email, inchargePhone: userProfileData?.contactNumber, helper, setAlert })
    setStore(""); setCity("")
  }
  const helper = async () => await getAssignedStores(userCred, setAssignedStore, "filter")

  const getStoresData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await Promise.all([getDataService(setStoreCity, "store-locator"),getDataService(setStoreDetails, "stores/all")])
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }


  useEffect(() => {
    if (userCred) {
      getStoresData()
      helper()
    }
  }, [userCred])

  return (
    <>
      <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
      <div className={style.myStores + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
          <h4> My stores list</h4>
          </div>
        <div className='row col-12 mx-auto mt-2 '>
          <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
            <thead className='border'>
              <tr>
                {/* <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th> */}
                <th className='text-capitalize p-2 pb-4 border text-center' >City</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Phone</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Address</th>
                <th className='text-capitalize p-2 pb-4 border text-center' >Store</th>
              </tr>
            </thead>
            <tbody>
              {
                assignedStore?.map((val, index) => {
                  return (
                    <tr key={val?._id + "" + index + "" + Math?.random(10000)} className=''>
                      {/* <td className='align-middle' >{index + 1}</td> */}
                      <td className='align-middle' >{val?.storeCity}</td>
                      <td className='align-middle'> {val?.storePhone}</td>
                      <td className='align-middle'> {val?.storeAddress}</td>
                      <td className='align-middle'> <Button className=' bg-secondary text-decoration-none text-light ' onClick={() => window.open(val?.storeMap, "_blank")}>View Store</Button></td>
                    </tr>)
                }
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className={style.myStores + ' container-fluid my-4  shadow rounded-4 p-4'}>

        <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
          <h4> Want to become store incharge?</h4>
          <p> Please select store city and store address then send request for approval</p>
        </div>
        <hr />

        <div className={style.tableContainer + ' row col-12 mx-auto mt-2'}>

          <div className='row col-12 mx-auto mt-2'>

            <div className=" col-4 mb-4 ">
              <label className="form-label text-capitalize">Select City</label>
              <select className="form-select shadow-none" value={city} onChange={(e) => { setCity(e.target?.value); setStore("") }}>
                <option value="" disabled selected>Select Store City</option>
                {
                  storeCity?.map((val, index) => {
                    return (
                      <option key={val?._id + index} value={val?._id}>{val?.storeCity}</option>
                    )
                  })
                }
              </select>
            </div>
            <div className=" col-8 mb-4 ">
              <label className="form-label text-capitalize">Select Store</label>
              <select className="form-select shadow-none" value={store} onChange={(e) => setStore(e.target?.value)}>
                <option value="" disabled selected>Select Store</option>
                {
                  storeDetails?.map((val, index) => {
                    return (
                      <>
                        {
                          val?.parentId == city ?
                            <option key={val?._id + index} value={val?._id}>{val?.storeAddress}</option>
                            : null
                        }
                      </>
                    )
                  })
                }
              </select>
            </div>
            <div className=" col-12 mb-4  p-0">
              <div className='row col-12 mx-auto mt-2'>
                <div className={" mb-4 col-md-6"}>
                  <label className="form-label">First Name</label>
                  <input autoComplete="off" disabled value={userProfileData?.firstName} type="text" className="form-control shadow-none" placeholder='write name here' />
                </div>
                <div className={" mb-4 col-md-6"}>
                  <label className="form-label">Last Name</label>
                  <input autoComplete="off" disabled value={userProfileData?.lastName} type="text" className="form-control shadow-none" placeholder='write name here' />
                </div>
                <div className={" mb-4 col-md-6"}>
                  <label className="form-label">Email</label>
                  <input autoComplete="off" disabled value={userProfileData?.email} type="email" className="form-control shadow-none" placeholder='write email here' />
                </div>
                <div className={" mb-4 col-md-6"}>
                  <label className="form-label">Phone</label>
                  <input autoComplete="off" disabled value={userProfileData?.contactNumber} type="number" className="form-control shadow-none" placeholder='write phone number here' />
                </div>
              </div>

            </div>
            <div className='row col-12 '>
              <button onClick={sendRequest} className="btn btn-primary d-flex col-auto px-4 mx-auto text-center justify-content-center text-capitalize">Send Request</button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default MyStores