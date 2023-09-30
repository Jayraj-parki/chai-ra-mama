"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import style from "./adminNavbar.module.scss"
import { usePathname } from 'next/navigation';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from '@/app/layout';
import { useRouter } from "next/navigation"
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
const AdminNavbar = () => {
    const { user, logout } = useAuth()
    const [collapse, setCollapse] = useState(true)
    const [activeLink, setActiveLink] = useState("")
    const [logoImg, setLogoImg] = useState("")
    const [menu, SetMenu] = useState(true)
    const url = usePathname()
    const router = useRouter();
    const LogOut = async() => {
        setActiveLink("")
        logout()
        try {
            const result = await fetch("/api/admin/logout", {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await result.json()
            if ("success" in data) {
                router.push("/admin/signin")
            }
        }
        catch (e) {
            console.log("error in logout"+e)
        }
    }


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
                else if (url.toLowerCase().includes("home")) setActiveLink("home")
                else if (url.toLowerCase().includes("profile")) setActiveLink("profile")
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

            <nav className={style.navbar + " contaner-fluid navbar bg-light navbar-expand-lg shadow-sm  px-3"}>
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
                            {
                                !user ?
                                    <>
                                        <li className={`nav-item d-flex  col-auto mx-auto mx-lg-0  ${activeLink == "signin" && "border-bottom border-3"} `}>
                                            <Link onClick={() => setActiveLink("signin")} className={`nav-link border-3 `} aria-current="page" href="/admin/signin">Sign In</Link>
                                        </li>
                                        <li className={`nav-item d-flex col-auto mx-auto mx-lg-0  ${activeLink == "signup" && "border-bottom border-3"}  `}>
                                            <Link onClick={() => setActiveLink("signup")} className={`nav-link `} aria-current="page" href="/admin/signup">Sign Up</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                    <li className={`nav-item d-flex col-auto mx-auto mx-lg-0  ${activeLink == "home" && "border-bottom border-3"} `}>
                                        <Link onClick={() => setActiveLink("home")}  className={`nav-link `} aria-current="page" href="/admin/home"><HomeIcon className={style.icon+` `}/></Link>
                                    </li>
                                    <li className={`nav-item d-flex col-auto mx-auto mx-lg-0  ${activeLink == "profile" && "border-bottom border-3"} `}>
                                        <Link onClick={()=>setActiveLink("profile")} className={`nav-link `} aria-current="page" href="/admin/profile"><PersonIcon className={style.icon+` `}/></Link>
                                    </li>
                                    <li className={`nav-item d-flex col-auto mx-auto mx-lg-0   `}>
                                        <Link onClick={LogOut} className={`nav-link `} aria-current="page" href="/admin/signin"><LogoutIcon className={style.icon+` `}/></Link>
                                    </li>
                                    </>
                            }

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