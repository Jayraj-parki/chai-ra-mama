"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/footer/Footer'
import { createContext, useContext, useEffect, useState } from 'react'
import { checkUserLogin } from '@/services/CheckUserLogin'
import style from "./page.module.scss"
import Cookies from 'js-cookie';
import { getDataService } from '@/services/getDataService'

const siteDataUIContext = createContext()
export const useSiteDataUIContext = () => {
  return useContext(siteDataUIContext)
}

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

const headerCMSUiContext = createContext()
export const useHeaderAndCMSUiContext = () => {
  return useContext(headerCMSUiContext)
}

export default function RootLayout({ children }) {
  const [user, setUser] = useState("")
  const [headers, setHeaders] = useState()
  const [cmsData, setCmsData] = useState()
  const [siteUIData, setData] = useState()
  const helper = async () => {
    await getDataService(setData, "site-details/ui")
  }
  const getHeaderAndCms = async () => {
    await getDataService(setHeaders, "headers")
    await getDataService(setCmsData, "cms-pages")
  }

  const getUser = async () => {
    const cookie = Cookies.get("teaToken")
    try {
      const data = await checkUserLogin(cookie)
      if ("id" in data) setUser(data?.id)
      else setUser("")
    }
    catch (err) {
      setUser("")
    }
  }
  const login = () => getUser()
  const logout = () => {
    setUser("")
    Cookies.remove('teaToken');
  }
  useEffect(() => {
    getUser("cookie")
    getHeaderAndCms()
    helper()
  }, [])
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AuthContext.Provider value={{ user, login, logout }}>
            <siteDataUIContext.Provider value={{siteUIData,helper}}>
              <Navbar />
              <headerCMSUiContext.Provider value={{ headers, cmsData }}>
                <div className={style.bodyContent}>
                  {children}
                </div>
              </headerCMSUiContext.Provider>
              <Footer />
            </siteDataUIContext.Provider>
          </AuthContext.Provider>
        </main>
      </body>
    </html>
  )
}
