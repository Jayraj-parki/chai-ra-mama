"use client"
import style from "./homeGallery.module.scss"
import Image from 'next/image'
import Link from "next/link"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useEffect, useState } from "react"
import { getGalleryData } from "@/services/getGalleryData"
const HomeGallery = () => {
    const [data,setData]=useState()
    const helper=async()=>{
        await getGalleryData(setData)
    }
    useEffect(()=>{
        helper()
    },[])
    return (
        <div className={style.gallery + ' container-fluid m-0 my-4 my-xl-5 p-0'}>
            <h1 className={style.heading + " text-center mb-5 text-justify"}><span className={style.text_blue}>Our</span> <span className={style.text_orange}>Gallery</span></h1>
            <div className='row col-11 col-xl-11 col-xxl-12   mx-auto d-flex justify-content-center'>
                {
                    data?.map((val,index) => {
                        return (
                            index<6 ?
                            <div key={val?._id} className=' col-sm-10 col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-xxl-1 '>
                                <Image className='py-2' src={val?.galleryImage} width={400} height={300} objectFit='cover' alt='gallery image' />
                            </div>
                            :null
                        )
                    })
                }
            </div>
            <div className={style.viewMore + ' row col-10 mx-auto d-flex justify-content-center mt-md-5 py-md-5'}>
                <Link href={"./gallery"} className='btn border-0 outline-none col-auto py-3 px-5 rounded '>View more <KeyboardArrowRightIcon />  </Link>
            </div>
        </div>
    )
}

export default HomeGallery