"use client"
import OurChef from '@/components/about_OurChef/OurChef'
import AboutDesc from '@/components/about_aboutDesc/AboutDesc'
import AboutBanner from '@/components/about_banner/AboutBanner'
import BestCoffee from '@/components/about_bestCoffee/BestCoffee'
import WhyToChooseUs from '@/components/about_whyToChooseUs/WhyToChooseUs'
import { useEffect, useState } from "react"


const page = () => {
  const [data, setData] = useState()
  const getAboutusData = async (e) => {
    try {
      const result = await fetch("/api/aboutus/all", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
      })
      const data = await result.json()
      setData(data)
    }
    catch (err) {
      console.log("error in signup" + err)
    }
  }
  const helper = async () => {
    await getAboutusData()
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <AboutBanner props={data?.aboutBannerData}/>
      <AboutDesc props={data?.aboutIntroData}/>
      <WhyToChooseUs props={data?.aboutWCUDataData} />
      <BestCoffee props={data?.aboutBestCoffeeData} />
      <OurChef props={data?.ourChefData} />
    </>

  )
}

export default page