"use client";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import UserNavbar from '../userNavbar/UserNavbar';
import AdminNavbar from '../adminNavbar/AdminNavbar';
const Navbar = () => {
    const url = usePathname()
    const [userRole, setUserRole] = useState("user")
    useEffect(() => {
        if(url.toLowerCase().includes("admin")){
            setUserRole("admin")
        }
        else{
            setUserRole("user")
        }
    }, [url])
    return (
        <>
            {
                userRole == "admin" ?
                    <AdminNavbar />
                    : <UserNavbar />

            }
        </>
    )
}

export default Navbar