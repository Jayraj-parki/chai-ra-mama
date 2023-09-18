import React from 'react'
import style from "./aboutDesc.module.scss"
import Image from 'next/image'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const AboutDesc = ({ props }) => {
    return (
        <div className={style.aboutDesc + " container-fluid my-5 pb-5"}>
            <div className="row  col-12 mx-auto d-flex justify-content-center ">
                <div className={style.about_img + "  col-6 text-center"}>
                    <Image className="  col-12 mx-auto" src={props?.image} height={100} width={100} objectFit="cover" alt="about image" />
                </div>
                <div className='col-5 py-5 '>
                    <div className={" row col-12 d-flex mx-auto mb-4   "}>
                        <h2 className={style.about_title + " p-2 px-3 text-start fw-bold text-light text-uppercase text-justify rounded"}>About Us</h2>
                    </div>
                    <div className={style.about_heading + " col-12 d-flex  mb-3   "}>
                        <h1 className="text-start  fw-bold text-justify">{props?.heading}</h1>
                    </div>
                    <div className={style.about_desc + " col-12 d-flex mb-3   "}>
                        <p className="text-start text-justify">
                            {props?.text}
                        </p>
                    </div>
                    <div className={style.about_list + " col-12 d-flex p-0  "}>
                        <ul className='p-0'>
                            {props?.list?.map((val) => {
                                return (<li key={val} className=" mb-4"><CheckCircleIcon className={style.icon + " "} />{val}</li>)
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutDesc