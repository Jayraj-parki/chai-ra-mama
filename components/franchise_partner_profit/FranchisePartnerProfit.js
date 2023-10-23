"use client";
import { useEffect, useState } from 'react'
import Image from 'next/image'
import style from "./franchisePartnerProfit.module.scss"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useHeaderAndCMSUiContext } from '@/app/layout';
const FranchisePartnerProfit = () => {
    const { cmsData } = useHeaderAndCMSUiContext()
    const [state, setState] = useState()

    useEffect(() => {
        setState(cmsData?.find(item => item?.cmsId === "PartnershipProfit"))
    }, [cmsData])
    return (
        <div className={style.franchise + " container-fluid mt-2 "}>
            <div className="row mx-auto  col-12 mx-auto d-flex justify-content-center my-4">

                <div className={style.franchise_img + "  col-md-8 p-0 col-lg-6 text-center d-flex flex-column"}>
                    <div className={" row col-12 d-flex d-lg-none mx-auto mb-4  "}>
                        <h2 className={style.franchise_title + " col-auto p-2 px-3 text-start mx-auto  mx-lg-0 fw-bold text-light text-uppercase text-justify rounded"}>Partnership Profit</h2>
                    </div>
                    {state?.cmsImage?.includes("mp4") &&
                        <iframe
                            className='row col-12 d-flex m-auto p-0'
                            width="560"
                            height="430"
                            src={state?.cmsImage}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>}
                    {(state?.cmsImage?.includes("http") && !state?.cmsImage?.includes("mp4")) ?
                        <Image className="  col-12 mx-auto" src={state?.cmsImage} height={100} width={100} objectFit="cover" alt="Franchise image" />
                        : null

                    }
                </div>
                <div className={style.about_text + " col-lg-6 col-xxl-5 py-5   "}>
                    <div className={" row col-12 d-none d-lg-flex mx-auto mb-4   "}>
                        <h2 className={style.franchise_title + " col-auto p-2 px-3 text-start mx-auto  mx-lg-0 fw-bold text-light text-uppercase text-justify rounded"}>Partnership Profit</h2>
                    </div>
                    <div className={style.heading + " row col-12 col-md-10  mx-auto col-lg-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                        <h1 className=" col-12  fw-bold text-center text-lg-start text-uppercase  p-0">{state?.cmsHeading}</h1>
                    </div>
                    <div className={style.franchisePartnership_desc + "   col-md-10  mx-auto col-lg-12  d-flex mb-3    "}>
                        <p className="" dangerouslySetInnerHTML={{ __html: state?.cmsContent }}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FranchisePartnerProfit