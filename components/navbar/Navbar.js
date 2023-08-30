"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from "./navbar.module.scss"
import { set } from 'mongoose';

const Navbar = () => {
    const [collapse, setCollapse] = useState(true)
    const [activeLink, setActiveLink] = useState("home")
    const [logoImg,setLogoImg]=useState("")
    useEffect(()=>{
        try{
            const data=require("@/data/headerData.json")
            setLogoImg(data.logoImg)
        }
        catch(e){
            setLogoImg("'/assets/images/logo.png'")
        }
        
    },[])

    return (

        <>

            <nav className={style.navbar + " navbar navbar-expand-lg  p-3"}>
                <div className="container-fluid col-10  mx-auto">
                    <div className="navbar-brand  col-2">
                        <Link href="#">
                            <Image className='bg-info' width={140} height={60} objectFit="cover" alt="logo" src={logoImg} />
                        </Link>
                    </div>
                    <button onClick={() => setCollapse(prev => (!prev))} className={`navbar-toggler ${collapse && "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={`${collapse} && "false"`} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`col-10 collapse navbar-collapse ${!collapse && "show"}`} id="navbarSupportedContent">
                        <ul className={style.navlink_container + " row col-12  mx-auto  navbar-nav me-auto mb-2 mb-lg-0"}>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "home" && "border-bottom"} `}>
                                <Link onClick={() => setActiveLink("home")} className={`nav-link border-2 `} aria-current="page" href="#">Home</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto  ${activeLink == "aboutus" && "border-bottom"}  `}>
                                <Link onClick={() => setActiveLink("aboutus")} className={`nav-link border-2`} aria-current="page" href="#">About Us</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "menu" && "border-bottom"} `}>
                                <Link onClick={() => setActiveLink("menu")} className={`nav-link border-2 `} aria-current="page" href="#">Menu</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "franchise" && "border-bottom"}`}>
                                <Link onClick={() => setActiveLink("franchise")} className={`nav-link border-2  `} aria-current="page" href="#">Franchise</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "gallery" && "border-bottom"}`}>
                                <Link onClick={() => setActiveLink("gallery")} className={`nav-link border-2  `} aria-current="page" href="#">Gallery</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto  ${activeLink == "feedback" && "border-bottom"} `}>
                                <Link onClick={() => setActiveLink("feedback")} className={`nav-link border-2 `} aria-current="page" href="#">Feedback</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "storeLocators" && "border-bottom"}`}>
                                <Link onClick={() => setActiveLink("storeLocators")} className={`nav-link border-2  `} aria-current="page" href="#">Store Locators</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "contactus" && "border-bottom"}`}>
                                <Link onClick={() => setActiveLink("contactus")} className={`nav-link border-2  `} aria-current="page" href="#">Contact Us</Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar