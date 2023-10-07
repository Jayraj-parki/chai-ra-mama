
import style from "./aboutDesc.module.scss"
import Image from 'next/image'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const AboutDesc = ({ props }) => {
    return (
        <div className={style.aboutDesc + " container-fluid my-5 pb-lg-5"}>
            <div className="row  col-12 mx-auto d-flex justify-content-center ">
                <div className={" row col-12 d-flex d-lg-none mx-auto mb-4   "}>
                    <h2 className={style.about_title + " p-2 px-3 text-center mx-auto mx-lg-0 fw-bold text-light text-uppercase text-justify rounded"}>About Us</h2>
                </div>
                <div className={style.about_img + " col-md-8 col-lg-6 text-center"}>
                    <Image className="  col-12 m-auto " src={props?.image} height={100} width={100} objectFit="cover" alt="about image" />
                </div>
                <div className='col-lg-6 col-xxl-5 py-5 px-0'>
                    <div className={" row col-12 d-none d-lg-flex mx-auto mb-4   "}>
                        <h2 className={style.about_title + " p-2 px-3 text-center mx-auto mx-lg-0 fw-bold text-light text-uppercase text-justify rounded"}>About Us</h2>
                    </div>
                    <div className={style.about_heading + " col-12 col-md-10  mx-auto col-lg-12 d-flex  mb-3   "}>
                        <h1 className="text-start  fw-bold text-center text-lg-start">{props?.heading}</h1>
                    </div>
                    <div className={style.about_desc + "  col-md-10  mx-auto col-lg-12  d-flex mb-3   "}>
                        <p className=" ">
                            {props?.text}
                        </p>
                    </div>
                    <div className={style.about_list + " col-md-10  mx-auto col-lg-12  d-flex p-0  "}>
                        <ul className='p-0'>
                            {props?.list?.map((val) => {
                                return (
                                    <li key={val} className=' d-flex justify-content-around'>
                                        <CheckCircleIcon className={style.icon + "  col-auto"} />
                                        <p className=" mb-4 col-10">{val}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutDesc