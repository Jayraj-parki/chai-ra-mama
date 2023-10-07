"use client"
import OurChef from '@/components/about_OurChef/OurChef'
import AboutDesc from '@/components/about_aboutDesc/AboutDesc'
import AboutBanner from '@/components/about_banner/AboutBanner'
import BestCoffee from '@/components/about_bestCoffee/BestCoffee'
import WhyToChooseUs from '@/components/about_whyToChooseUs/WhyToChooseUs'
import { getAboutusData } from '@/services/getAboutusData'
import { useEffect, useState } from "react"


const page = () => {
  const [data, setData] = useState()
  const helper = async () => {
    await getAboutusData(setData)
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <AboutBanner props={data?.aboutBannerData} />
      <AboutDesc props={data?.aboutIntroData} />
      <WhyToChooseUs props={data?.aboutWCUDataData} />
      <BestCoffee props={data?.aboutBestCoffeeData} />
      <OurChef props={data?.ourChefData} />
    </>

  )
}

export default page