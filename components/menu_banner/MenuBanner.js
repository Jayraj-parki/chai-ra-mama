"use client"
import Image from "next/image"
import style from "./menubanner.module.scss"
import { useHeaderAndCMSUiContext } from "@/app/layout"
import { useEffect, useState } from "react"

const MenuBanner = () => {
    const {headers}=useHeaderAndCMSUiContext()
    const [state,setState]=useState()
    useEffect(()=>{
        setState(headers?.find(item => item?.headerTitle === "MENU_PAGE"))
    },[headers])
    return (
        <div className={style.menuBanner + " row col-12 d-flex justify-content-center mx-auto m-0 p-0  "}>
            <div className={style.imageContainer + "  col-12  p-0 m-0"}>
                <Image  className="d-block w-100"  width={100} height={350} objectFit="cover" src={state?.headerImage} alt="..." />
            </div>
            <div className={style.menuText + "  col-12  d-flex justify-content-center align-items-center"}>
                <h1 className={style.bannerHeading+" text-uppercase"}>Menu</h1>
            </div>
        </div>
    )
}

export default MenuBanner