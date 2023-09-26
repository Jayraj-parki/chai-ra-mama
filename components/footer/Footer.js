"use client";
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import AdminFooter from '../adminFooter/AdminFooter';
import UserFooter from '../userFooter/UserFooter';
const Footer = () => {
    const url = usePathname()
    const [userRole, setUserRole] = useState("user")
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
            {
                userRole == "admin" ?
                    <AdminFooter />
                    : <UserFooter />

            }

        </>
    );
};
export default Footer;