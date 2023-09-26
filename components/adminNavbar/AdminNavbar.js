"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from "./adminNavbar.module.scss"
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const AdminNavbar = () => {
    const [collapse, setCollapse] = useState(true)
    const [activeLink, setActiveLink] = useState("signin")
    const [logoImg, setLogoImg] = useState("")
    const [menu, SetMenu] = useState(true)
    const url = usePathname()
    useEffect(() => {
        try {
            const data = require("@/data/headerData.json")
            setLogoImg(data.logoImg)
        }
        catch (e) {
            setLogoImg("'/assets/images/logo.png'")
        }
    }, [])
    useEffect(() => {
        const handleNavlink = () => {
            try {
                if (url.toLowerCase().includes("signin")) setActiveLink("signin")
                else if (url.toLowerCase().includes("signup")) setActiveLink("signup")
            }
            catch (err) {
                console.log("err" + err)
                setActiveLink("signin")
            }
        }
        handleNavlink()
        setCollapse(true)
        SetMenu(true)
    }, [url])
    return (

        <>

            <nav className={style.navbar + " contaner-fluid navbar navbar-expand-lg  p-3"}>
                <div className="container-fluid col-lg-12 col-xl-11  mx-auto">
                    <div className="navbar-brand  col-auto">
                        <Link href="# ">
                            <Image src={logoImg || "/assets/images/logo.png"} className='' width={140} height={60} objectFit="cover" alt="logo" />
                        </Link>
                    </div>
                    <button onClick={() => setCollapse(prev => (!prev))} className={`navbar-toggler shadow-none border-0  outline-none ${collapse && "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={`${collapse} && "false"`} aria-label="Toggle navigation">
                        {menu ?
                            <MenuIcon onClick={() => SetMenu(!menu)} className={style.icon + '  border rounded border-2 col-auto '} />
                            : <CloseIcon onClick={() => SetMenu(!menu)} className={style.icon + '  border rounded border-2 col-auto '} />
                        }
                    </button>
                    <div className={`col-auto   flex-wrap collapse navbar-collapse ${!collapse && "show"}`} id="navbarSupportedContent">
                        <ul className={style.navlink_container + "  row col-12  mx-auto  navbar-nav  d-flex justify-content-center justify-content-lg-end  mb-2 mb-lg-0"}>
                            <li className={`nav-item d-flex  col-auto mx-auto mx-lg-0  ${activeLink == "signin" && "border-bottom border-3"} `}>
                                <Link onClick={() => setActiveLink("signin")} className={`nav-link border-3 `} aria-current="page" href="/admin/signin">Sign In</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto mx-lg-0  ${activeLink == "signup" && "border-bottom border-3"}  `}>
                                <Link onClick={() => setActiveLink("signup")} className={`nav-link `} aria-current="page" href="/admin/signup">Sign Up</Link>
                            </li>
                            
                            {/* after login */}
                            {/* todo: create navbar for admin */}


                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default AdminNavbar