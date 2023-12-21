"use client";
import Image from "next/image";
import style from "./galleryCard.module.scss"
import { useEffect, useState } from "react";

import { groupImagesByProduct } from "@/utils/groupImagesByProduct";
import { useGalleryContext } from "../pageComponents/GalleryPage";
const GalleryCard = () => {
    const { galleryData } = useGalleryContext()
    const [activeTab, setActiveTab] = useState("all")
    const [products, setProduct] = useState()
    const mapData = async () => {
        await groupImagesByProduct({ galleryData, setProduct })
    }
    useEffect(() => {
        mapData()
    }, [galleryData])
    return (
        <div className={style.galleryCard + " container-fluid px-0 mx-auto  pb-5"}>
            <div className='row col-12 py-5 mx-auto '>

                <div className={style.tabsContainer + "  row col-12 d-flex  my-5 d-flex flex-row mx-auto  justify-content-center  "}>
                    <div className="row  col-12 mx-auto d-flex justify-content-center ">
                        <ul className={style.ul_tabs + " border rounded overflow-auto col-md-8 px-3 flex-nowrap d-flex justify-content-start nav nav-pills mb-3"} id="pills-tab" role="tablist">
                             <li className={` flex-nowrap  nav-item col-auto m-2  `} role="presentation">
                                <button onClick={() => setActiveTab("all")} className={`${activeTab == "all" ? style.active_tab : style.not_active} nav-link ${activeTab == "all" && "active"} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={`true   ${activeTab == "all" ? "true" : "false"} `}>All</button>
                            </li>

                            {
                                Object?.keys(products || {})?.map((val, index) => {
                                    return (
                                        <li key={index + " " + val} className={` nav-item col-auto m-2`} role="presentation">
                                            <button onClick={() => setActiveTab(val)} className={`${activeTab == val ? style.active_tab : style.not_active} nav-link text-uppercase ${activeTab == val && "active"} `} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected={`false ${activeTab == val ? "true" : "false"} `}>{val}</button>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className={style.galleryItem + " row col-md-11 col-xxl-12 p-0  mx-auto tab-content  m-0 my-5"} id="pills-tabContent">
                        <div className={` row col-12    p-0 mx-auto d-flex justify-content-center align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "all" ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            {
                                Object?.keys(products || {})?.map((val) =>
                                    products[val]?.map((item, index) => {
                                        return (
                                            item?<div key={index + "" + item + "all"} className=' col-sm-10  p-2  col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-xxl-1 '>
                                                <Image className=' rounded-3 h-100 w-100' src={item} width={400} height={300} objectFit='cover' alt='...' />
                                            </div>:null
                                        )
                                    })
                                )
                            } 
                        </div>
                        {
                            Object?.keys(products || {})?.map((val, index) => {
                                return (
                                    <div className={` row col-12    p-0 mx-auto d-flex justify-content-center align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == val ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        {
                                            products[val]?.map((item, index) => {
                                                return (
                                                    item?<div key={index + "" + item} className=' col-sm-10  p-2  col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-xxl-1 '>
                                                        <Image className=' rounded-3 h-100 w-100' src={item} width={400} height={300} objectFit='cover' alt='...' />
                                                    </div>:null
                                                )
                                            })
                                        }

                                    </div>
                                )
                            })
                        }

                    </div>
                    {/* <div className="row  col-12 mx-auto d-flex justify-content-center ">
                        <button className={style.loadmore + " col-auto fw-bold text-light rounded px-5 text-uppercase text-center py-3 outline-none border-0 "}>Load more</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default GalleryCard