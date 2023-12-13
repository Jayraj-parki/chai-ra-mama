import React, { useEffect, useState } from 'react'
import style from "./staffRequest.module.scss"
import Link from 'next/link';
import {  useStaffRequestContext } from '@/app/admin/staff-request/page';
import ImageModal from '../imageModal/ImageModal';
import Image from 'next/image';
import ActionModal from '../actionModal/ActionModal';
import ActionUpdateModal from '../actionModal/ActionUpdateModal';
import PopUp from '../PopUp/PopUp';
const StaffRequest = () => {
    const [activeTab, setActiveTab] = useState("delete")
    const { helper, deleteReqData, updateReqData } = useStaffRequestContext()
    const [modal, setModal] = useState({ active: false, image: "" })
    const [actionModal, setActionModal] = useState({ active: false, _id: "", clientKey: "" })
    const [actionUpdateModal, setActionUpdateModal] = useState({ active: false, _id: "", clientKey: "" })
    const breakStringOnUppercase = (str = "") => {
        return str?.split(/(?=[A-Z])/).join(' ');
    }
   return (
        <>
            <div className={style.tabsContainer + "  row col-12 d-flex  my-5 d-flex flex-row mx-auto  justify-content-center  "}>
                <div className="row  col-12 mx-auto d-flex justify-content-center ">
                    <ul className={style.ul_tabs + " border rounded overflow-auto col-md-12 px-3 flex-nowrap d-flex justify-content-start align-items-center nav nav-pills mb-3"} id="pills-tab" role="tablist">
                        <li className={` flex-nowrap  nav-item col-auto m-2   `} role="presentation">
                            <button onClick={() => setActiveTab("delete")} className={`${activeTab == "delete" ? style.active_tab : style.not_active} nav-link  text-capitalize ${activeTab == "delete" && "active"} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={`true   ${activeTab == "delete" ? "true" : "false"} `}>delete</button>
                        </li>
                        <li className={` flex-nowrap  nav-item col-auto m-2   `} role="presentation">
                            <button onClick={() => setActiveTab("update")} className={`${activeTab == "update" ? style.active_tab : style.not_active} nav-link  text-capitalize ${activeTab == "update" && "active"} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={`true   ${activeTab == "update" ? "true" : "false"} `}>update</button>
                        </li>
                        <li className={` flex-nowrap  nav-item col-auto m-2   ms-auto`} role="presentation">
                            <button onClick={() => helper()} className={style.refresh + " text-capitalize px-4 mx-2 btn"}>Refresh</button>
                            <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
                        </li>

                    </ul>
                </div>
                <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})} modalActive={alert.modalActive}  modalActive={false} workStatus={"progress"}/>
                <ImageModal modal={modal} setModal={setModal} />
                <ActionModal actionModal={actionModal} setActionModal={setActionModal} />
                <ActionUpdateModal actionModal={actionUpdateModal} setActionModal={setActionUpdateModal} />
                <div className={` row col-12    p-3 mx-auto d-flex justify-content-start align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "delete" ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    { 
                        deleteReqData?.map((val, index) =>
                            <table key={val?._id + "" + index + "" + Math?.random(10000)} className="col-12 table table-bordered table-hover   text-capitalize ">
                                <thead className='border'>
                                    {Object?.keys?.(val)?.map((header, index) =>
                                        header != "_id" ? <th key={index + "" + Math?.random(10000)} className='text-capitalize p-2 pb-4 border text-center' >{breakStringOnUppercase(header)}</th> : null
                                    )}
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
                                </thead>
                                <tbody >
                                    <tr>
                                        {Object?.values?.(val)?.map((content, index) =>
                                            content != val?._id ? <td key={index + "" + Math?.random(10000)} className={` p-2 pb-4 border  text-center`}>{content?.includes("firebasestorage") ? <Image onClick={() => { setModal({ active: true, image: content || "/assets/images/1.png" }); setActionModal({ active: false }) }} className="rounded" width={250} height={200} objectFit="cover" src={content || "/assets/images/1.png"} alt="..." /> : content?.includes("</") ? <p dangerouslySetInnerHTML={{ __html: content }}></p> : content?.includes("maps.app") ? <button className='btn btn-secondary text-light text-decoration-none text-uppercase' onClick={() => window.open(content || "", '_blank')}>view map</button> : content} </td> : null
                                        )}
                                        <td className='text-center align-middle'>
                                            <button onClick={() => setActionModal({ active: true, _id: val?._id, clientKey: val?.clientKey })} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Open</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className={` row col-12    p-0 mx-auto d-flex justify-content-center align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "update" ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    {
                        updateReqData?.map((val, index) =>
                            <table key={val?._id + "" + index + "" + Math?.random(10000)} className="col-12 table table-bordered table-hover   text-capitalize ">
                                <thead className='border'>
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Data</th>
                                    {val?.oldData && Object?.keys?.(val?.oldData)?.map((header, index) =>
                                        header != "_id" ? <th key={index + "" + Math?.random(10000)} className='text-capitalize p-2 pb-4 border text-center' >{breakStringOnUppercase(header)}</th> : null
                                    )}
                                    <th rowSpan={2} className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
                                </thead>
                                <tbody >

                                    <tr>
                                        <td className='text-center align-middle'>Current Data</td>
                                        {val?.oldData && Object?.values?.(val?.oldData)?.map((content, index) =>
                                            content!="" && !(typeof content === 'object' && content !== null)?<td key={index + "" + Math?.random(10000)} className={` p-2 pb-4 border  text-center`}>{content?.includes("firebasestorage") ? <Image onClick={() => { setModal({ active: true, image: content || "/assets/images/1.png" }); setActionModal({ active: false }) }} className="rounded" width={250} height={200} objectFit="cover" src={content || "/assets/images/1.png"} alt="..." /> : content?.includes("</") ? <p dangerouslySetInnerHTML={{ __html: content }}></p> : content?.includes("maps.app") ? <button className='btn btn-secondary text-light text-decoration-none text-uppercase' onClick={() => window.open(content || "", '_blank')}>view map</button> : content} </td>:null
                                        )}
                                        <td rowSpan={2} className='text-center align-middle' >
                                            <button onClick={() => setActionUpdateModal({ active: true, _id: val?._id, clientKey: val?.clientKey })} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Open</button>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td className='text-center align-middle'>Updated Data</td>
                                        {val?.newDataFiltered && Object?.values?.(val?.newDataFiltered)?.map((content, index) =>
                                            content!=""?<td key={index + "" + Math?.random(10000)} className={` p-2 pb-4 border  text-center`}>{content?.includes("firebasestorage") ? <Image onClick={() => { setModal({ active: true, image: content || "/assets/images/1.png" }); setActionModal({ active: false }) }} className="rounded" width={250} height={200} objectFit="cover" src={content || "/assets/images/1.png"} alt="..." /> : content?.includes("</") ? <p dangerouslySetInnerHTML={{ __html: content }}></p> : content?.includes("maps.app") ? <button className='btn btn-secondary text-light text-decoration-none text-uppercase' onClick={() => window.open(content || "", '_blank')}>view map</button> : content} </td>:null
                                        )}
                                        
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default StaffRequest