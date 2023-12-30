import React, { useEffect, useState } from 'react'
import style from "./requestHistory.module.scss"
import Link from 'next/link';
import { useClientRequestHistoryContext } from '../adminPages/RequestHistoryPage';

const RequestHistory = () => {
    const { helper, reqHistory } = useClientRequestHistoryContext()
    const getStatus=(type)=>{
        if (type=="updated" || type=="delete") return "In Process"
        else if (type?.includes("Expired")) return <span className='text-success'>Approved</span>
        else if(type?.includes("Rejected")) return <span className='text-danger'>Rejected</span>
        else return "Unknown"
    }
    const getReqType=(type)=>{
        if (type?.includes("delete")) return "Delete"
        else if(type?.includes("update")) return "Update"
        else return "Unknown"
    }
    return (
        <>
            <div className={style.tabsContainer + "  row col-12 d-flex  my-5 d-flex flex-row mx-auto  justify-content-center  "}>
                <div className="row  col-12 mx-auto d-flex justify-content-center ">
                    <ul className={style.ul_tabs + " border rounded overflow-auto col-md-12 px-3 flex-nowrap d-flex justify-content-start align-items-center nav nav-pills mb-3"} id="pills-tab" role="tablist">
                        
                        <li className={` flex-nowrap  nav-item col-auto m-2   ms-auto`} role="presentation">
                            <button onClick={() => helper()} className={style.refresh + " text-capitalize px-4 mx-2 btn"}>Refresh</button>
                            <Link href="./home" className='col-auto ms-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
                        </li>

                    </ul>
                </div>
                <div className={` row col-12    p-3 mx-auto d-flex justify-content-start align-items-center flexwrap   mb-4 `} >
                    <table className="col-12 table table-bordered table-hover   text-capitalize ">
                        <thead className='border'>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Sr No.</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Client Ref No.</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Request Status</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Request Type</th>
                        </thead>
                        <tbody >
                            {
                                reqHistory?.map((val, index) =>
                                    <tr key={val?._id + "" + index + "" + Math?.random(10000)}>
                                        <td className='text-center align-middle'>{index+1}</td>
                                        <td className='text-center align-middle'>{val?.clientRef}</td>
                                        <td className='text-center align-middle'>{getStatus(val?.request)}</td>
                                        <td className='text-center align-middle'>{getReqType(val?.request)}</td>
                                    </tr>
                                )}

                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}

export default RequestHistory