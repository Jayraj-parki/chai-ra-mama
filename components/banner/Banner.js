"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import style from "./banner.module.scss"
function Banner() {
    const [banner, setBanner] = useState({
        bannerImg: "/assets/images/banner1.png",
        bannerHeading: {
            "heading1": "What is",
            "heading2": "in your life, you always offer"
            , "bold1": "happening"
            , "bold2": "Tea"
        },
        bannerText: "banner Text"
    })
    useEffect(() => {
        try {
            const data = require("@/data/headerData.json")
            // console.log(data)
            setBanner({ bannerImg: data.bannerImg, bannerHeading: data.bannerHeading, bannerText: data.bannerText })
        }
        catch (e) {

        }
    }, [])
    return (
        <>
            <div className={style.banner + "  container-fluid mx-auto m-0 p-0"} data-bs-ride="carousel">
                <div className={style.bannerInner + " d-flex justify-content-center mx-auto m-0 p-0  "}>
                    <div className={style.imageContainer + " col-12  p-0 m-0"}>
                        <Image width={100} height={580} objectFit="cover" src={banner.bannerImg} className="d-block w-100" alt="..." />
                    </div>
                    <div className={style.bannerItem + " d-flex flex-row justify-content-center row mx-auto col-10 m-0  p-0 my-auto"}>
                        <div className={style.text + " col-8 my-auto"}>
                            <h1 className={style.bannerHeading + " text-center mb-4 text-light"}>&ldquo;{banner.bannerHeading.heading1}<span className={style.text_blue}> { banner.bannerHeading.bold1}</span> {banner.bannerHeading.heading2} <span className={style.text_orange}>{banner.bannerHeading.bold2}</span> &rdquo;</h1>
                            <p className={style.bannerText + " row mx-auto text-light col-10 text-center"}>{banner.bannerText}
                            </p>
                        </div>
                        <div className={style.orderBtn + " d-flex px-4 col-4 my-auto"}>
                            <button className="outline-none border-0 text-light  shadow-lg rounded-pill ">Order Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Banner