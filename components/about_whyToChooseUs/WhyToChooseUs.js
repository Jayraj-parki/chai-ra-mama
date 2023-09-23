"use client";
import Image from "next/image";
import style from "./whyToChooseus.module.scss"

const WhyToChooseUs = ({ props }) => {
    return (
        <div className={style.wcu + " container-fluid  pb-md-5"}>
            <div className='row col-12 py-5 mx-auto p-0'>
                <div className={" row col-12  d-flex mx-auto mb-5  d-flex justify-content-center "}>
                    <h2 className={style.wcu_title + " p-2 px-3 text-center fw-bold text-light text-uppercase text-justify rounded"}>Why to choose us</h2>
                </div>
                <div className={style.about_heading + " row p-0 col-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                    <h1 className=" col-xxl-6 fw-bold text-justify text-center text-uppercase">We are provide best service<br /> in your city</h1>
                </div>
                <div className={style.wcuCard + " row col-12 d-flex p-0 mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                    <div className={" container-fluid my-5  p-0"}>
                        <div className="row  col-12 col-xxl-10 mx-auto d-flex justify-content-around ">
                            {
                                props?.map((val) => {
                                    return (
                                        <div key={val?._id} className={style.wcuCard + "  col-sm-9 card col-md-6   my-2  col-xl-4  d-flex justify-content-center align-items-center  border-1 py-4"}>
                                            <div className={style.iconContainer + " col-auto mx-auto "}>
                                                <div className={style.icon + " col-12 px-2 mx-auto my-3  "}>
                                                    <Image className={style.bgImg + " d-block w-100 m-0 p-0  "} width={100} height={100} objectFit="cover" src={val?.cardImage} alt="..." />
                                                </div>
                                                <div className={style.circle}></div>
                                            </div>
                                            <div className="row col-12 col-12 card-body  px-0 ">
                                                <h5 className={style.cardTitle + " fw-bold mb-4 card-title text-uppercase text-center"}>{val?.cardTitle}</h5>
                                                <p className={style.cardText + " card-text text-center"}>
                                                    {val?.cardText}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyToChooseUs