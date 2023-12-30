"use client";
import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import AdminFooter from '@/ComponentsAdmin/adminFooter/AdminFooter';
import UserFooter from '../userFooter/UserFooter';
import { getDataService } from '@/services/getDataService';

const footerUIContext = createContext()
export const useFooterUIContext = () => {
    return useContext(footerUIContext)
}

const Footer = () => {
    const url = usePathname()
    const [userRole, setUserRole] = useState("")
    const [socialLink, setData] = useState("")
    const helper = async () => await getDataService(setData, "site-link-tags")
    
    useEffect(() => {
        if (url.toLowerCase().includes("admin") || url.toLowerCase().includes("auth")) setUserRole("admin")
        else setUserRole("user")
    }, [url])
    
    useEffect(() => {
        helper()
    }, [])
    return (
        <>
            <footerUIContext.Provider value={{socialLink,helper}}>

                {
                    userRole == "admin" && <AdminFooter />
                }
                {
                    userRole == "user" && <UserFooter />
                }
            </footerUIContext.Provider>

        </>
    );
};
export default Footer;