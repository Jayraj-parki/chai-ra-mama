"use client"
import HomeBanner from "@/components/home_banner/HomeBanner"
import HomeHeaderCard from "@/components/home_headerCard/HomeHeaderCard"
import HomeAboutUs from "@/components/home_about/HomeAboutUs"
import HomeGallery from "@/components/home_gallery/HomeGallery"
import HomeMenu from "@/components/home_menu/HomeMenu"
import HomeTestimonial from "@/components/home_testimonial/HomeTestimonial"
import HomeGetInTouch from "@/components/home_getInTouch/HomeGetInTouch"

const page = () => {
  return (
    <> 
      <HomeBanner />
      <HomeHeaderCard />
      <HomeAboutUs/>
      <HomeGallery />
      <HomeMenu  />
      <HomeTestimonial />
      <HomeGetInTouch />
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
