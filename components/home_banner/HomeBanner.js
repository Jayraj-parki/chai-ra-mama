"use client"
import Image from "next/image"
import style from "./homeBanner.module.scss"
import {  useEffect, useState } from "react"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useHeaderAndCMSUiContext } from "@/app/layout"
import { getDataService } from "@/services/getDataService"
function HomeBanner() {
    const {cmsData}=useHeaderAndCMSUiContext()
    const [banner, setBanner] = useState()
    const [currentSlide, setCurrentSlide] = useState(0);
    const [state,setState]=useState()
    const fetchBanner = async () => {
        await getDataService(setBanner,"home-banner")
    } 
    useEffect(() => {
        fetchBanner()
        setState(cmsData?.find(item => item?.cmsId === "HomeBannerText"))
    }, [cmsData])
    return (
        <>
            <div className={style.banner + "  container-fluid mx-auto m-0 p-0"} data-bs-ride="carousel">
                <div className={style.bannerInner + " d-flex carousel slide  justify-content-center mx-auto m-0 p-0  "}>
                    <div className={style.imageContainer + " col-12 carousel-inner active  p-0 m-0"}>
                        <Image width={100} height={580} objectFit="cover" src={banner?.length > 0 && banner[currentSlide]?.bannerImage} className="d-block w-100 carousel-item " alt="..." />
                    </div>
                    <button onClick={()=>setCurrentSlide((currentSlide - 1 + banner.length) % banner.length)} className={style.prev + " d-flex flex-row justify-content-start bg-transparent border-0  px-2 px-lg-5 outline-none align-items-center mx-auto"}>
                        <ArrowBackIosIcon className={style.icon + " p-0 text-light "} />
                    </button>
                    <button onClick={()=>setCurrentSlide((currentSlide + 1) % banner.length)} className={style.next + " d-flex flex-row justify-content-start bg-transparent border-0  px-2 px-lg-5 outline-none align-items-center mx-auto"}>
                        <ArrowForwardIosIcon className={style.icon + " p-0 text-light "} />
                    </button>

                    <div className={style.bannerItem + "  row col-12  col-md-11 d-flex flex-row justify-content-start align-items-center mx-auto  "}>
                        <div className={style.text + " col-12 col-md-8  "}>
                            <h1 className={style.bannerHeading + " col-12    text-center mb-4 text-light"}> {state?.cmsHeading}<span className={style.text_blue}> </span>  <span className={style.text_orange}></span></h1>
                            <p className={style.bannerText + " row mx-auto text-light col-sm-11 col-md-10 text-center"} dangerouslySetInnerHTML={{__html:state?.cmsContent}}></p>
                            <div className={style.orderBtn + " d-flex p-4 d-md-none col-12 col-md-4  justify-content-center"}>
                                <button className="outline-none border-0 text-light  mb-auto my-md-auto shadow-lg rounded-pill ">Order Now</button>
                            </div>
                        </div>
                        <div className={style.orderBtn + " d-none d-md-flex p-4  col-12 col-md-4  justify-content-center"}>
                            <button className="outline-none border-0 text-light  mb-auto my-md-auto shadow-lg rounded-pill ">Order Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeBanner