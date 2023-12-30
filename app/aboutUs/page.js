import OurChef from '@/components/about_OurChef/OurChef'
import AboutDesc from '@/components/about_aboutDesc/AboutDesc'
import AboutBanner from '@/components/about_banner/AboutBanner'
import BestCoffee from '@/components/about_bestCoffee/BestCoffee'
import WhyToChooseUs from '@/components/about_whyToChooseUs/WhyToChooseUs'
import { getMetaTagValues } from '@/services/getMetaTagValues'


const page = () => {
  return (
    <>
      <AboutBanner />
      <AboutDesc />
      <WhyToChooseUs />
      <BestCoffee />
      <OurChef />
    </>

  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("AboutUsPage")
  return {
    title: data?.metaTitle || 'About Us Page',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}

export default page