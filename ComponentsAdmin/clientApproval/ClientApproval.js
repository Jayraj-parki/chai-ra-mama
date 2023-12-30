"use client"
import React, { useEffect, useState } from 'react'
import style from "./clientApproval.module.scss"
import Link from 'next/link';
import PopUp from '../PopUp/PopUp';
import { updateClientApprovalStatus } from '@/services/updateClientApprovalStatus';
import { useClientApprovalContext } from '../adminPages/ClientApprovalPage';
const   ClientApproval = () => {
    const [activeTab, setActiveTab] = useState("pending request")
    const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
    const { helper, clientApproval } = useClientApprovalContext()
    const updateData = async (_id, email, status) => {
        setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
        await updateClientApprovalStatus({ _id, email, status, helper, setAlert })
    }
    return (
        <>
            <div className={style.tabsContainer + "  row col-12 d-flex  my-5 d-flex flex-row mx-auto  justify-content-center  "}>
                <div className="row  col-12 mx-auto d-flex justify-content-center ">
                    <ul className={style.ul_tabs + " border rounded overflow-auto col-md-12 px-3 flex-nowrap d-flex justify-content-start align-items-center nav nav-pills mb-3"} id="pills-tab" role="tablist">
                        <li className={` flex-nowrap  nav-item col-auto m-2   `} role="presentation">
                            <button onClick={() => setActiveTab("pending request")} className={`${activeTab == "pending request" ? style.active_tab : style.not_active} nav-link  text-capitalize ${activeTab == "pending request" && "active"} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={`true   ${activeTab == "pending request" ? "true" : "false"} `}>Pending</button>
                        </li>
                        <li className={` flex-nowrap  nav-item col-auto m-2   `} role="presentation">
                            <button onClick={() => setActiveTab("approved")} className={`${activeTab == "approved" ? style.active_tab : style.not_active} nav-link  text-capitalize ${activeTab == "approved" && "active"} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={`true   ${activeTab == "approved" ? "true" : "false"} `}>approved</button>
                        </li>
                        <li className={` flex-nowrap  nav-item col-auto m-2   ms-auto`} role="presentation">
                            <button onClick={() => helper()} className={style.refresh + " text-capitalize px-4 mx-2 btn"}>Refresh</button>
                            <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
                        </li>

                    </ul>
                </div>
                <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
                <div className={` row col-12    p-3 mx-auto d-flex justify-content-start align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "pending request" ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                    <table className="col-12 table table-bordered table-hover   text-capitalize ">
                        <thead className='border'>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Sr No.</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Name</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Email</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Phone</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
                        </thead>
                        <tbody >
                            {
                                clientApproval?.pendingToApprove?.map((val, index) =>
                                    <tr key={val?._id + "" + index + "" + Math?.random(10000)}>

                                        <td className='text-center align-middle'>{index + 1}</td>
                                        <td className='text-center align-middle'>{val?.firstName + " " + val?.lastName}</td>
                                        <td className='text-center align-middle'>{val?.email}</td>
                                        <td className='text-center align-middle'>{val?.contactNumber || "NA"}</td>
                                        <td className='text-center align-middle'>
                                            <button onClick={() => updateData(val?._id, val?.email, "approve")} className='btn btn-primary text-decoration-none m-2  text-capitalize'>Approve</button>
                                            <button onClick={() => updateData(val?._id, val?.email, "reject")} className='btn btn-danger text-decoration-none m-2  text-capitalize'>Reject</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className={` row col-12    p-0 mx-auto d-flex justify-content-center align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "approved" ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <table className="col-12 table table-bordered table-hover   text-capitalize ">
                        <thead className='border'>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Sr No.</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Name</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Email</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Phone</th>
                        </thead>
                        <tbody >
                            {
                                clientApproval?.approved?.map((val, index) =>
                                    <tr key={val?._id + "" + index + "" + Math?.random(10000)}>

                                        <td className='text-center align-middle'>{index + 1}</td>
                                        <td className='text-center align-middle'>{val?.firstName + " " + val?.lastName}</td>
                                        <td className='text-center align-middle'>{val?.email}</td>
                                        <td className='text-center align-middle'>{val?.contactNumber || "NA"}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ClientApproval