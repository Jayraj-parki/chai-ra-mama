import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {/* Navbar */}
          <Navbar /> 
          {children}
          {/* footer */}
          <Footer />
        </main>

      </body>
    </html>
  )
}
