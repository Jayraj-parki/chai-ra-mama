"use client"
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/footer/Footer'
import { createContext, useContext, useEffect, useState } from 'react'
import { checkUserLogin } from '@/utils/CheckUserLogin'
import style from "./page.module.scss"
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export default function RootLayout({ children }) {
  const [user, setUser] = useState("")
  const getUser = async () => {
    try {
      const data = await checkUserLogin()
      if ("id" in data) setUser(data?.id)
      else setUser("")
    }
    catch (err) {
      setUser("")
    }
  }
  const login = () => {
    getUser()
  }
  const logout = () => {
    setUser("")
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <AuthContext.Provider value={{ user, login, logout }}>
            <Navbar />
            <div className={style.bodyContent}>
              {children}
            </div>
            <Footer />
          </AuthContext.Provider>
        </main>

      </body>
    </html>
  )
}
