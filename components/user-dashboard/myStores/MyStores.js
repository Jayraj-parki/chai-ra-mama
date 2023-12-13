"use client"
import { useEffect, useState } from 'react'
import style from "./myStores.module.scss"
import Link from 'next/link';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Button } from '@mui/material';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import { useAuth } from '@/app/layout';
import { getDataService } from '@/services/getDataService';
import { useDashboardContext } from '@/app/dashboard/page';
import { SendRequestForStoreIncharge } from '@/services/SendRequestForStoreIncharge';

const MyStores = () => {
  const { userCred } = useAuth()
  const { userProfileData } = useDashboardContext()
  const [storeCity, setStoreCity] = useState()
  const [storeDetails, setStoreDetails] = useState()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [city, setCity] = useState("");
  const [store, setStore] = useState("");

  const sendRequest = async() => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await SendRequestForStoreIncharge({store,inchargeName:userProfileData?.firstName+" "+userProfileData?.lastName,inchargeEmail:userProfileData?.email,inchargePhone:userProfileData?.contactNumber,helper,setAlert})
    setStore("");setCity("")
  }
  const helper=()=>{

  }

  const getStoresData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setStoreCity, "store-locator")
    await getDataService(setStoreDetails, "stores/all")
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  

  useEffect(() => {
    if (userCred) {
      getStoresData()
    }
  }, [userCred])

  return (
    <>
      <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />

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
                  <input autocomplete="off" disabled value={userProfileData?.firstName} type="text" className="form-control shadow-none" placeholder='write name here' />
                </div>
                <div className={" mb-4 col-md-6"}>
                  <label className="form-label">Last Name</label>
                  <input autocomplete="off" disabled value={userProfileData?.lastName} type="text" className="form-control shadow-none" placeholder='write name here' />
                </div>
                <div className={" mb-4 col-md-6"}>
                  <label className="form-label">Email</label>
                  <input autocomplete="off" disabled value={userProfileData?.email} type="email" className="form-control shadow-none" placeholder='write email here' />
                </div>
                <div className={" mb-4 col-md-6"}>
                  <label className="form-label">Phone</label>
                  <input autocomplete="off" disabled value={userProfileData?.contactNumber} type="number" className="form-control shadow-none" placeholder='write phone number here' />
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