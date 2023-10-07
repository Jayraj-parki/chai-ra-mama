"use client";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import UserNavbar from '../userNavbar/UserNavbar';
import AdminNavbar from '@/ComponentsAdmin/adminNavbar/AdminNavbar';
const Navbar = () => {
    const url = usePathname()
    const [userRole, setUserRole] = useState("")
    useEffect(() => {
        if (url.toLowerCase().includes("admin")) {
            setUserRole("admin")
        }
        else {
            setUserRole("user")
        }
    }, [url])
    return (
        <>

            <nav className={style.navbar + " navbar navbar-expand-lg  p-3"}>
                <div className="container-fluid col-10  mx-auto">
                    <div className="navbar-brand  col-2">
                        <Link href="#">
                            <Image src={logoImg} className='bg-info' width={140} height={60} objectFit="cover" alt="logo" />
                        </Link>
                    </div>
                    <button onClick={() => setCollapse(prev => (!prev))} className={`navbar-toggler shadow-none border-0  outline-none ${collapse && "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={`${collapse} && "false"`} aria-label="Toggle navigation">
                        {menu ?
                            <MenuIcon onClick={()=>SetMenu(!menu)} className={style.icon + '  border rounded border-2 col-auto '} />
                            : <CloseIcon onClick={()=>SetMenu(!menu)} className={style.icon + '  border rounded border-2 col-auto '} />
                        }
                    </button>
                    <div className={`col-10 collapse navbar-collapse ${!collapse && "show"}`} id="navbarSupportedContent">
                        <ul className={style.navlink_container + " row col-12  mx-auto  navbar-nav me-auto mb-2 mb-lg-0"}>
                            <li className={`nav-item d-flex  col-auto mx-auto ${activeLink == "home" && "border-bottom border-3"} `}>
                                <Link onClick={() => setActiveLink("home")} className={`nav-link border-3 `} aria-current="page" href="/">Home</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto  ${activeLink == "aboutus" && "border-bottom border-3"}  `}>
                                <Link onClick={() => setActiveLink("aboutus")} className={`nav-link `} aria-current="page" href="/aboutUs">About Us</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "menu" && "border-bottom border-3"} `}>
                                <Link onClick={() => setActiveLink("menu")} className={`nav-link  `} aria-current="page" href="/menu">Menu</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "franchise" && "border-bottom border-3"}`}>
                                <Link onClick={() => setActiveLink("franchise")} className={`nav-link   `} aria-current="page" href="franchise">Franchise</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "gallery" && "border-bottom border-3"}`}>
                                <Link onClick={() => setActiveLink("gallery")} className={`nav-link   `} aria-current="page" href="gallery">Gallery</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto  ${activeLink == "feedback" && "border-bottom border-3"} `}>
                                <Link onClick={() => setActiveLink("feedback")} className={`nav-link  `} aria-current="page" href="feedback">Feedback</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "storeLocators" && "border-bottom border-3"}`}>
                                <Link onClick={() => setActiveLink("storeLocators")} className={`nav-link   `} aria-current="page" href="storeLocators">Store Locators</Link>
                            </li>
                            <li className={`nav-item d-flex col-auto mx-auto ${activeLink == "contactus" && "border-bottom border-3"}`}>
                                <Link onClick={() => setActiveLink("contactus")} className={`nav-link   `} aria-current="page" href="contactus">Contact Us</Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar