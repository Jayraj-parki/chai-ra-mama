import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={inter.className}>
        <main>
          {/* add Navbar */}
          <Navbar/>
          {children} 
          {/* add footer */}
        </main>

      </body>
    </html>
  )
}
