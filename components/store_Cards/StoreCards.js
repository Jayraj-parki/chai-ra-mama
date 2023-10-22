"use client"
import style from "./storeCards.module.scss"
import { useEffect, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import { useStoreUiContext } from "@/app/storeLocators/page";
const StoreCards = () => {
    const { storeCity, storeDetails } = useStoreUiContext()
    const [cityState,setCityState]=useState("")

    return (
        <div className={style.storeCards + " container-fluidm-0 p-0 my-5 "}>
            <div className="row col-12 col-xxl-8 mx-auto py-5 px-3 d-flex justify-content-around">
                <select value={cityState} onChange={(e)=>setCityState(e.target.value)}  className="form-select form-select-lg shadow lh-lg" >
                    <option selected >Select City Here</option>
                    <option value={"All"}>All</option>
                    {
                        storeCity?.map((val, index) =>
                            <option className="my-3" key={val?._id+index} value={val?._id}>{val.storeCity}</option>
                        )
                    }

                </select>
            </div>
            <div className="row col-12 col-xxl-10 mx-auto py-5 px-3 d-flex justify-content-around">
                {
                    storeDetails?.map((val, index) => {
                        return (
                            cityState == val?.parentId || cityState=="All" ||cityState==""?
                            <div key={val?._id + " " + index} className={style.card + " col-sm-10 col-md-6 col-lg-4 p-4 my-4 border border-2 rounded-3 d-flex justify-content-between flex-column"}>
                                <div className={style.cardData + "  row col-12 mx-auto d-flex p-md-2 align-items-start flex-column  "}>
                                    <div className="row col-12 my-2 m-auto  mx-auto px-2  d-flex justify-content-center  align-items-center">
                                        <div className={style.iconContainer + " row col-2 mx-auto  px-2  rounded mb-auto"}>
                                            <LocationOnIcon className={style.icon + "  rounded px-2 "} />
                                        </div>
                                        <p className="row col-10 mx-auto ps-2 my-auto ">{val?.storeAddress}</p>
                                    </div>
                                    <div className="row col-12 mb-2 mx-auto  p-2  justify-content-center   align-items-center">
                                        <div className={style.iconContainer + " row col-2 mx-auto  px-2  rounded"}>
                                            <LocalPhoneRoundedIcon className={style.icon + "  rounded px-2 "} />
                                        </div>
                                        <p className="row col-10 mx-auto ps-2 my-auto ">{val?.storePhone}</p>
                                    </div>
                                </div>
                                <div className={style.mapLink + " row col-11 d-flex flex-column  my-2 mx-auto p-0"}>
                                    <button className="text-uppercase col-12 text-center  mx-auto fw-bold  rounded-3 p-3" onClick={()=>window.open(val?.storeMap||"","_blank")}>View on Map</button>
                                </div>
                                <div className={style.badge + "  text-center fw-bold d-flex justify-content-center align-items-center"}>
                                    {index + 1}
                                </div>
                            </div>:null
                        )
                    })
                }

            </div>
        </div>
    )
}

export default StoreCards
