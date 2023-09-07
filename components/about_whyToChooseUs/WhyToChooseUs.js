import React from 'react'
import style from "./whyToChooseus.module.scss"
import WcuCard from '../about_WcuCard/WcuCard'
const WhyToChooseUs = () => {
    return (
        <div className={style.wcu + " container-fluid  pb-5"}>
            <div className='row col-12 py-5 '>
                <div className={" row col-12  d-flex mx-auto mb-5  d-flex justify-content-center "}>
                    <h2 className={style.wcu_title + " p-2 px-3 text-center fw-bold text-light text-uppercase text-justify rounded"}>Why to choose us</h2>
                </div>
                <div className={style.about_heading + " row col-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                    <h1 className=" col-6  fw-bold text-justify text-center text-uppercase">We are provide best service<br /> in your city</h1>
                </div>
                <div className={style.wcuCard + " row col-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                    <WcuCard />
                </div>



            </div>

        </div>
    )
}

export default WhyToChooseUs