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
  const getHeaderAndCms = async () => {
    await getDataService(setHeaders,"headers")
    await getDataService(setCmsData,"cms-pages")
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
  }, [])
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AuthContext.Provider value={{ user, login, logout }}>
            <Navbar />
            <headerCMSUiContext.Provider value={{headers,cmsData}}>
              <div className={style.bodyContent}>
                {children}
              </div>
            </headerCMSUiContext.Provider>
            <Footer />
          </AuthContext.Provider>
        </main>
      </body>
    </html>
  )
}
