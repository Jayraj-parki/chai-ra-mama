"use client";
import React, { useEffect, useState } from 'react'
import style from "./homeAbout.module.scss"
import Image from "next/image"
const HomeAboutUs = () => {
    const [about,setAbout]=useState({
        aboutImg:"/assets/images/image 7.png",
        description:"dummy text"
    })
    useEffect(()=>{
        try{
            const data=require("@/data/aboutData.json")
            setAbout({aboutImg:data.aboutImg,description:data.description})
        }
        catch(e){
            
        }
    },[])
    return (
        <div className={style.aboutus + " container-fluid mb-5 pb-5"}>
            <div className="row  col-9 mx-auto d-flex justify-content-between ">
                <div className={style.about_img + "  col-6 text-center"}>
                    <Image className="  col-12 mx-auto" src={about.aboutImg} height={100} width={100} objectFit="cover" alt="about image" />
                </div>
                <div className={style.about_text + " col-5 d-flex   flex-column  "}>
                    <h1 className="text-start mb-5 text-justify"><span className={style.text_blue}>About</span> <span className={style.text_orange}>Us</span></h1>
                    <p>{about.description}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutUs