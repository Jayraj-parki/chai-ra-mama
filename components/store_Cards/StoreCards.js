"use client"
import style from "./storeCards.module.scss"
import { useEffect, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; import { Button } from "@mui/material";
import { useStoreUiContext } from "../pageComponents/StoreLocatorPage";
const StoreCards = () => {
    const [modal, setModal] = useState({ active: false, storeId: "" })
    const { storeCity, storeDetails, storeList } = useStoreUiContext()
    const [cityState, setCityState] = useState("")

    return (
        <div className={style.storeCards + " container-fluidm-0 p-0 my-5 "}>
            <div className="row col-12 col-xxl-8 mx-auto py-5 px-3 d-flex justify-content-around">
                <h5 className="text-center">Apply filter by selecting store city</h5>
                <hr className="border-0" />
                <select value={cityState} onChange={(e) => setCityState(e.target.value)} className="form-select form-select-lg shadow-sm lh-lg" >
                    <option selected >Select City Here</option>
                    <option value={"All"}>All</option>
                    {
                        storeCity?.map((val, index) =>
                            <option className="my-3" key={val?._id + index} value={val?._id}>{val?.storeCity}</option>
                        )
                    }

                </select>
            </div>
            <div className="row col-12 col-xxl-10 mx-auto py-5 px-3 d-flex justify-content-around">
                {
                    storeDetails?.map((val, index) => {
                        return (
                            cityState == val?.parentId || cityState == "All" || cityState == "" ?

                                <div key={val?._id + " " + index} className={style.card + " col-sm-10 col-md-6 col-lg-4 p-4 my-4 border border-2 rounded-3 d-flex justify-content-between flex-column"}>
                                    <div className={style.cardData + "  row col-12 mx-auto d-flex p-md-2  align-items-start flex-column  "}>
                                        <div className="row col-12 my-2 m-auto  mx-auto px-2  d-flex justify-content-center  align-items-center">
                                            <div className={style.iconContainer + " row col-2 mx-auto  px-2  rounded mb-auto"}>
                                                <LocationOnIcon className={style.icon + "  rounded p-1"} />
                                            </div>
                                            <p className="row col-10 mx-auto ps-2 my-auto ">{val?.storeAddress}</p>
                                        </div>
                                        <div className="row col-12 mb-2 mx-auto  p-2  justify-content-center   align-items-center">
                                            <div className={style.iconContainer + " row col-2 mx-auto  px-2  rounded"}>
                                                <LocalPhoneRoundedIcon className={style.icon + "  rounded p-1 "} />
                                            </div>
                                            <p className="row col-10 mx-auto ps-2 my-auto ">{val?.storePhone}</p>
                                        </div>
                                        <div className="row col-12 mb-2 mx-auto  p-2 d-flex justify-content-between   align-items-center">
                                            <div className={style.iconContainer + " row col-2 mx-auto  px-2   rounded"}>
                                                <SupervisorAccountIcon className={style.icon + "  rounded p-1 "} />
                                            </div>
                                            <div className={" row col-10 mx-auto  px-2   rounded"}>
                                                <Button onClick={() => setModal({ active: true, storeId: val?._id })} className={style.storeIncharge + "  row col-11 border mx-auto px-3 my-auto "}>Store Incharge</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.mapLink + " row col-11 d-flex flex-column  my-2 mx-auto p-0"}>
                                        <button className="text-uppercase col-12 text-center  mx-auto fw-bold  rounded-3 p-3" onClick={() => window.open(val?.storeMap || "", "_blank")}>View on Map</button>
                                    </div>
                                    <div className={style.badge + "  text-center fw-bold d-flex justify-content-center align-items-center"}>
                                        {index + 1}
                                    </div>
                                </div> : null
                        )
                    })
                }

            </div>
            <div className={style.modal + ` modal fade ${modal?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={() => setModal({ active: false, storeAdd: "", storeContact: "", storeMap: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex flex-column justify-content-center align-items-center">
                            <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
                                <thead className='border'>
                                    <tr>
                                        <th className='text-capitalize p-2 pb-4 border text-center' >Name</th>
                                        <th className='text-capitalize p-2 pb-4 border text-center' >Email</th>
                                        <th className='text-capitalize p-2 pb-4 border text-center' >Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        storeList?.map((val, index) => {
                                            return (
                                                val?.storeId == modal?.storeId ?
                                                    <tr key={val?._id + "" + index + "" + Math?.random(10000)} className=''>
                                                        <td className='align-middle' >{val?.inchargeName}</td>
                                                        <td className='align-middle'> {val?.inchargeEmail}</td>
                                                        <td className='align-middle'> {val?.inchargePhone}</td>
                                                    </tr> : null
                                            )
                                        }
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => setModal({ active: false, storeAdd: "", storeContact: "", storeMap: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreCards
