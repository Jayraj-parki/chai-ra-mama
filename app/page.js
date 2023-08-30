"use client"
import HeaderCard from "@/components/card/HeaderCard"
import style from "./page.module.scss"
import Banner from "@/components/banner/Banner"

import AboutUs from "@/components/about/AboutUs"

const page = () => {
  return (
    <>
      {/* banner */}
      <Banner />

      {/* card */}
      <HeaderCard />


      {/* about us */}
      <AboutUs />

    </>
  )
}

// Static MetaTag
// export const metadata = {
//   title: " Static title",
//   description: "Static Desciption"
// }

// dynamic metadata

export async function generateMetadata({ params }) {
  return {
    title: 'Dynamic Title',
    description: "Dynamic Desciption"
  }
}

export default page
