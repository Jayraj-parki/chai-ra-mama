import React, { useEffect, useState } from 'react'
import style from "./productOrders.module.scss"
import Link from 'next/link';
import PopUp from '../PopUp/PopUp';
import PaymentIcon from '@mui/icons-material/Payment';
import SellIcon from '@mui/icons-material/Sell';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StartIcon from '@mui/icons-material/Start';
import Image from "next/image";
import { sendOrderOTP } from '@/services/sendOrderOTP';
import { verifyOtpAndDeliver } from '@/services/verifyOtpAndDeliver';
import { updateUserOrderStatus } from '@/services/updateUserOrderStatus';
import { useUserProductOrdersContext } from '../adminPages/UserProductOrdersPage';

const UserProductOrders = () => {
    const [activeTab, setActiveTab] = useState("new orders")
    const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
    const [otpVerification, setOtpVerification] = useState({ active: false, orderId: "", email: "" })
    const { helper, productOrders } = useUserProductOrdersContext()
    const [otp, setOtp] = useState()
    const updateData = async (_id, status) => {
        setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
        await updateUserOrderStatus({ _id, status, helper, setAlert })
    }
    const sendOtp = async (orderId, email, type) => {
        let isOTPsent = false
        if (type == "otp") {
            setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
            isOTPsent = await sendOrderOTP({ orderId, userEmail: email, setAlert,end_url:"user-orders" })
        }
        else isOTPsent = true
        if (isOTPsent) {
            setAlert({ modalActive: false, workStatus: "", message: "" })
            setOtpVerification({ active: true, orderId: orderId, email })
        }
    }

    const verifyOTP = async ({ orderId, userEmail, inputOtp }) => {
        setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
        await verifyOtpAndDeliver({ orderId, userEmail, inputOtp, setAlert, helper, setOtpVerification,end_url:"user-orders" })
        setOtp("")
    }


    return (
        <>
            <div className={style.productOrders + "  row col-12 d-flex  my-5 d-flex flex-row mx-auto  justify-content-center  "}>
                <div className="row  col-12 mx-auto d-flex justify-content-center ">
                    <ul className={style.ul_tabs + " border rounded overflow-auto col-md-12 px-3 flex-nowrap d-flex justify-content-start align-items-center nav nav-pills mb-3"} id="pills-tab" role="tablist">
                        <li className={` flex-nowrap  nav-item col-auto m-2   `} role="presentation">
                            <button onClick={() => setActiveTab("new orders")} className={`${activeTab == "new orders" ? style.active_tab : style.not_active} nav-link  text-capitalize ${activeTab == "new orders" && "active"} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={`true   ${activeTab == "new orders" ? "true" : "false"} `}>Pending Orders</button>
                        </li>
                        <li className={` flex-nowrap  nav-item col-auto m-2   `} role="presentation">
                            <button onClick={() => setActiveTab("completed")} className={`${activeTab == "completed" ? style.active_tab : style.not_active} nav-link  text-capitalize ${activeTab == "completed" && "active"} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={`true   ${activeTab == "completed" ? "true" : "false"} `}>completed</button>
                        </li>
                        <li className={` flex-nowrap  nav-item col-auto m-2   ms-auto`} role="presentation">
                            <button onClick={() => helper()} className={style.refresh + " text-capitalize px-4 mx-2 btn"}>Refresh</button>
                            <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
                        </li>

                    </ul>
                </div>
                <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
                <div className={` row col-12    p-3 mx-auto d-flex justify-content-start align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "new orders" ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    { productOrders?.new_orders?.map((val, index) =>
                        val?.productDetails?.length>0?
                        <>
                            <div key={val?._id + "" + index} className={style.container+ ' row col-12 mx-auto py-3 my-3 shadow rounded-3 border '}>
                                {val?.userDetails && <div className={style.userDetails + ' row col-12 mx-auto mb-3'}>
                                    <label className='px-0'>User Details</label>
                                    <table className="col-12 table table-bordered   text-center text-capitalize mt-2 ">
                                        <thead className='border p-0'>
                                            <th className='text-capitalize  border text-center' >Name</th>
                                            <th className='text-capitalize  border text-center' >Email</th>
                                            <th className='text-capitalize  border text-center' >Phone Number</th>
                                            <th className='text-capitalize  border text-center' >Address</th>
                                        </thead>
                                        <tbody>
                                            {

                                                <tr key={val?.userDetails?.storePhone + "" + index + "" + Math?.random(10000)} className=''>
                                                    <td className='align-middle' >{val?.userDetails?.firstName + " " + val?.userDetails?.lastName}</td>
                                                    <td className='align-middle' >{val?.userDetails?.email}</td>
                                                    <td className='align-middle' >{val?.userDetails?.contactNumber}</td>
                                                    <td className='align-middle' >{val?.userDetails?.address}</td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>}
                                <div className={' row col-12 mx-auto '}>
                                    <div className={style.container + ' p-0'}>
                                        <label className='px-0'>Order Details</label>

                                        <table className="col-12 table table-bordered  text-center text-capitalize  ">
                                            <thead className='border'>
                                                <tr>
                                                    <th colSpan={5} className='text-capitalize p-2 pb-4 border text-center' >Summary</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Product Name</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Quantity</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Price</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Image</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr className=''>
                                                    <td className='align-middle' rowSpan={300} colSpan={5}>
                                                        <table className='table   text-start text-capitalize' >
                                                            <tbody>
                                                                <tr><td>Total price : {val?.amount} Rs</td></tr>
                                                                <tr><td>Order Time: {val?.start?.time}</td></tr>
                                                                <tr><td>last Status: {val?.activeStatus}</td></tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                {
                                                    val?.productDetails?.map((product) =>

                                                        <tr className=''>
                                                            <td className='align-middle' >{product?.menuDetails?.itemName}</td>
                                                            <td className='align-middle' >{product?.quantity}</td>
                                                            <td className='align-middle'>{product?.totalPrice}</td>
                                                            <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={product?.menuDetails?.itemImage || "/assets/images/1.png"} alt="..." /></td>
                                                        </tr>
                                                    )
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className={style.orderStatus + ' py-3 row col-12 mx-auto d-flex justify-content-between align-items-start '}>
                                    <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                                        <div className={style.statusIcon + ` ${!val?.start?.status && style.activeStatus}  ${!val?.start?.status && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><StartIcon className={style.icon + ' p-0'} /></div>
                                        <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0  text-capitalize pb-0 '>Start</p><small className='col-12 text-center text-capitalize '>{val?.start?.status ? "Completed" : ""}</small></div>
                                    </div>
                                    <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                                        <div className={style.statusIcon + ` ${!val?.payment?.status && style.activeStatus}  ${!val?.payment?.status && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><PaymentIcon className={style.icon + ' p-0'} /></div>
                                        <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0  text-capitalize pb-0 '>payment</p><small className='col-12 text-center text-capitalize '>{val?.payment?.status ? "Completed" : ""}</small></div>
                                    </div>
                                    <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                                        <div className={style.statusIcon + ` ${!val?.orderPlaced?.status && style.activeStatus}  ${!val?.payment?.status && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><SellIcon className={style.icon + ' p-0'} /></div>
                                        <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0  text-capitalize pb-0 '>Order Placed</p><small className='col-12 text-center text-capitalize '>{val?.orderPlaced?.status ? "Completed" : val?.payment?.status ? <button onClick={() => updateData(val?._id, "orderPlaced")} className='btn btn-primary shadow-none'>Accept</button> : ""}</small></div>
                                    </div>

                                    <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                                        <div className={style.statusIcon + ` ${!val?.delivered?.status && style.activeStatus}  ${!val?.orderPlaced?.status && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><LocalShippingIcon className={style.icon + ' p-0'} /></div>
                                        <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0  text-capitalize pb-0 '>Delivered</p><small className='col-12 text-center text-capitalize '>{val?.delivered?.status ? "Completed" : val?.orderPlaced?.status ?
                                            <>
                                                <button onClick={() => sendOtp(val?._id, val?.userId, "otp")} className='btn btn-primary shadow-none text-capitalize'>send OTP</button>
                                                <p className='text m-0'>Or</p>
                                                <button onClick={() => sendOtp(val?._id, val?.userId, "none")} className='btn btn-success shadow-none text-capitalize'>verify OTP</button>
                                            </>
                                            : ""}</small></div>
                                    </div>
                                </div>
                            </div >
                        </>:null
                    )}
                </div>
                <div className={` row col-12    p-3 mx-auto d-flex justify-content-start align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "completed" ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    {productOrders?.completed_orders?.map((val, index) =>
                        <>
                            <div key={val?._id + "" + index} className={' row col-12 mx-auto py-3 my-2 shadow rounded-3 border'}>
                                {val?.userDetails && <div className={style.userDetails + ' row col-12 mx-auto mb-4'}>
                                    <label className='px-0'>Client Details</label>
                                    <table className="col-12 table table-bordered table-hover  text-center text-capitalize mt-2 ">
                                        <thead className='border p-0'>
                                            <th className='text-capitalize  border text-center' >Name</th>
                                            <th className='text-capitalize  border text-center' >Email</th>
                                            <th className='text-capitalize  border text-center' >Phone Number</th>
                                            <th className='text-capitalize  border text-center' >Address</th>
                                        </thead>
                                        <tbody>
                                            {

                                                <tr key={val?.userDetails?.storePhone + "" + index + "" + Math?.random(10000)} className=''>
                                                    <td className='align-middle' >{val?.userDetails?.firstName + " " + val?.userDetails?.lastName}</td>
                                                    <td className='align-middle' >{val?.userDetails?.email}</td>
                                                    <td className='align-middle' >{val?.userDetails?.contactNumber}</td>
                                                    <td className='align-middle' >{val?.userDetails?.address}</td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>}
                                <div className={style.container + ' row col-12 mx-auto '}>
                                    <div className='p-0'>
                                        <table className="col-12 table table-bordered  text-center text-capitalize  ">
                                            <thead className='border'>
                                                <tr>
                                                    <th colSpan={5} className='text-capitalize p-2 pb-4 border text-center' >Summary</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Product Name</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Quantity</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Price</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Image</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr className=''>
                                                    <td className='align-middle' rowSpan={300} colSpan={5}>
                                                        <table className='table   text-start text-capitalize' >
                                                            <tbody>
                                                                <tr><td>Total price : {val?.amount} Rs.</td></tr>
                                                                <tr><td>Delivered Time: {val?.delivered?.time}</td></tr>
                                                                <tr><td>Status: {val?.activeStatus}</td></tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                {
                                                    val?.productDetails?.map((product) =>

                                                        <tr className=''>
                                                            <td className='align-middle' >{product?.menuDetails?.itemName}</td>
                                                            <td className='align-middle' >{product?.quantity}</td>
                                                            <td className='align-middle'>{product?.totalPrice}</td>
                                                            <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={product?.menuDetails?.itemImage || "/assets/images/1.png"} alt="..." /></td>
                                                        </tr>
                                                    )
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div >
                        </>
                    )}
                </div>

                <div className={style.otpModal + ` modal fade ${otpVerification?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-body  d-flex justify-content-center align-items-center">
                                <div className={' container-fluid my-4 '}>
                                    <div className={style.otpVerification + 'row col-12 col-lg-10  shadow rounded-4   p-4 mx-auto'}>
                                        <div className={style.header + ' row col-12 mx-auto'}>
                                            <h5 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>OTP Verification</h5>
                                            <small className='mt-2 text-success'>OTP sent to {otpVerification?.email} </small>
                                        </div>
                                        <hr />
                                        <div className='row col-12 mx-auto mt-3'>
                                            <div>
                                                <div className="mb-4">
                                                    <label className="form-label">Order Id</label>
                                                    <input disabled autoComplete="off" value={otpVerification?.orderId} name="orderId" type="text" className="form-control shadow-none" placeholder='Order Id Here' />
                                                </div>
                                                <div className="mb-4">
                                                    <label className="form-label">OTP</label>
                                                    <input autoComplete="off" value={otp} onChange={(e) => setOtp(e.target.value)} name="otp" type="text" className="form-control shadow-none" placeholder='Enter OTP' />
                                                </div>
                                                <div className='row col-12 mx-auto'>
                                                    <button onClick={() => verifyOTP({ orderId: otpVerification?.orderId, userEmail: otpVerification?.email, inputOtp: otp })} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center shadow-none justify-content-center text-capitalize">Verify</button>
                                                    <button onClick={() => { setOtpVerification({ active: false, orderId: "", email: "" }); setOtp("") }} type="button" className="col-auto  ms-2 btn btn-secondary shadow-none" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProductOrders