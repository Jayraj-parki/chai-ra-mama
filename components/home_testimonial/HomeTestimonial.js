"use client"
import { useHeaderAndCMSUiContext } from "@/app/layout"
import style from "./homeTestimonial.module.scss"
import Image from 'next/image'
import { useEffect, useState } from "react"
const HomeTestimonial = () => {
    const {cmsData}=useHeaderAndCMSUiContext()
    const [state,setState]=useState()
    useEffect(() => {
        setState(cmsData?.filter(item => item?.cmsId?.startsWith("HomeFeedBack")))
    }, [cmsData])
    return (
        <div className={style.testimonial + ' container-fluid m-0 my-0 p-0 py-5 d-flex justify-content-center flex-column'}>
            <h1 className={style.heading + " text-center my-5 text-justify"}><span className={style.text_blue}>Testimonials</span></h1>
            {state?.length > 0 &&
                (<div className='row col-12 mt-5 col-xl-10 mx-auto d-flex justify-content-center'>
                    <div className={style.cardContainer + ' col-10 col-sm-8 col-md-8 col-lg-4 my-5 m-md-1 d-flex justify-content-center flex-column '}>
                        <div className='row col-12 mx-auto p-0 d-flex justify-content-center'>
                            <Image className='py-2 ' src={state[0]?.cmsImage} width={50} height={50} objectFit='cover' alt='gallery image' />
                        </div>
                        <div className="row col-12 mx-auto p-0 d-flex justify-content-center">
                            <div className="px-3 row-col-12 mx-auto">
                                <h3 className="col-12  text-center">{state[0]?.cmsHeading}</h3>
                                <p className="col-12 text-center" dangerouslySetInnerHTML={{__html:state[0]?.cmsContent}}></p>
                            </div>
                        </div>
                        <div className={style.circleOne}></div>
                        <div className={style.circleTwo}></div>
                        <div className={style.circleThree}></div>
                    </div>
                </div>)}
            <div className='row col-12 col-lg-11 mx-auto d-flex justify-content-center  justify-content-lg-between'>

                {state?.length > 1 && (<div className={style.cardContainer + '  col-10 col-sm-8 my-5 col-md-8 col-lg-6 col-xl-4 d-flex justify-content-center flex-column '}>
                    <div className='row col-12 mx-auto p-0 d-flex justify-content-center'>
                        <Image className='py-2 ' src={state[1]?.cmsImage} width={50} height={50} objectFit='cover' alt='gallery image' />
                    </div>
                    <div className="row col-12 mx-auto p-0 d-flex justify-content-center">
                        <div className="px-3 row-col-12 mx-auto">
                            <h3 className="col-12  text-center">{state[1]?.cmsHeading}</h3>
                            <p className="col-12 text-center"dangerouslySetInnerHTML={{__html:state[1]?.cmsContent}}></p>
                        </div>
                    </div>
                    <div className={style.circleOne}></div>
                    <div className={style.circleTwo}></div>
                    <div className={style.circleThree}></div>
                </div>)}
                {state?.length > 2 && (<div className={style.cardContainer + '  col-10 col-sm-8 my-5 col-md-8 col-lg-6 col-xl-4  d-flex justify-content-center flex-column '}>
                    <div className='row col-12 mx-auto p-0 d-flex justify-content-center'>
                        <Image className='py-2 ' src={state[2]?.cmsImage} width={50} height={50} objectFit='cover' alt='gallery image' />
                    </div>
                    <div className="row col-12 mx-auto p-0 d-flex justify-content-center">
                        <div className="px-3 row-col-12 mx-auto">
                            <h3 className="col-12  text-center">{state[2]?.cmsHeading}</h3>
                            <p className="col-12 text-center"dangerouslySetInnerHTML={{__html:state[2]?.cmsContent}}></p>
                        </div>
                    </div>
                    <div className={style.circleOne}></div>
                    <div className={style.circleTwo}></div>
                    <div className={style.circleThree}></div>
                </div>)}
            </div>
            <div className='row col-12  col-xl-10 mx-auto d-flex justify-content-center'>
                {state?.length > 3 && (
                    <div className={style.cardContainer + ' col-10 col-sm-8 my-5 col-md-8 col-lg-4 m-5 d-flex justify-content-center flex-column '}>
                        <div className='row col-12 mx-auto p-0 d-flex justify-content-center'>
                            <Image className='py-2 ' src={state[3]?.cmsImage} width={50} height={50} objectFit='cover' alt='gallery image' />
                        </div>
                        <div className="row col-12 mx-auto p-0 d-flex justify-content-center">
                            <div className="px-3 row-col-12 mx-auto">
                                <h3 className="col-12  text-center">{state[3]?.cmsHeading}</h3>
                                <p className="col-12 text-center"dangerouslySetInnerHTML={{__html:state[3]?.cmsContent}}></p>
                            </div>
                        </div>
                        <div className={style.circleOne}></div>
                        <div className={style.circleTwo}></div>
                        <div className={style.circleThree}></div>
                    </div>)}
            </div>
        </div >
    )
}

export default HomeTestimonial