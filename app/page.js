<<<<<<< HEAD
// "use client"
import style from "./page.module.scss"
=======
"use client"
>>>>>>> 58e7d92
import HomeBanner from "@/components/home_banner/HomeBanner"
import HomeHeaderCard from "@/components/home_headerCard/HomeHeaderCard"
import HomeAboutUs from "@/components/home_about/HomeAboutUs"
import HomeGallery from "@/components/home_gallery/HomeGallery"
import HomeMenu from "@/components/home_menu/HomeMenu"
import HomeTestimonial from "@/components/home_testimonial/HomeTestimonial"
import HomeGetInTouch from "@/components/home_getInTouch/HomeGetInTouch"
import { useEffect, useState } from "react"
import { getHomeData } from "@/services/getHomeData"

const page = () => {
  const [data, setData] = useState()
  const helper = async () => {
    await getHomeData(setData)
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <HomeBanner props={data?.homeBannerData[0]} />
      <HomeHeaderCard props={data?.homeHeaderCardData} />
      <HomeAboutUs props={data?.homeAboutUsData[0]} />
      <HomeGallery props={data?.homeGalleryData} />
      <HomeMenu props={data?.homeMenuCardData} />
      <HomeTestimonial props={data?.homeTestimonialCardData} />
      <HomeGetInTouch props={data?.homeGetInTouchImageData} />
    </>
  )
}

// Static MetaTag
// export const metadata = {
//   title: " Static title",
//   description: "Static Desciption"
// }

// dynamic metadata

// export async function generateMetadata({ params }) {
//   return {
//     title: 'Dynamic Title',
//     description: "Dynamic Desciption"
//   }
// }

export default page
