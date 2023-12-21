
import HomeBanner from "@/components/home_banner/HomeBanner"
import HomeHeaderCard from "@/components/home_headerCard/HomeHeaderCard"
import HomeAboutUs from "@/components/home_about/HomeAboutUs"
import HomeGallery from "@/components/home_gallery/HomeGallery"
import HomeMenu from "@/components/home_menu/HomeMenu"
import HomeTestimonial from "@/components/home_testimonial/HomeTestimonial"
import HomeGetInTouch from "@/components/home_getInTouch/HomeGetInTouch"
import { getMetaTagValues } from "@/services/getMetaTagValues"

const page = () => {
  return (
    <>
      <HomeBanner />
      <HomeHeaderCard />
      <HomeAboutUs />
      <HomeGallery />
      <HomeMenu />
      <HomeTestimonial />
      <HomeGetInTouch />
    </>
  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("HomePage")
  return {
    title: data?.metaTitle || 'Home Page',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}

export default page
