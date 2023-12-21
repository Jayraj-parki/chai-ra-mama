import ContactUsPage from "@/components/pageComponents/ContactUsPage"
import { getMetaTagValues } from "@/services/getMetaTagValues"

const page = () => {

  return (
    <>
    <ContactUsPage/>
  </>
  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("ContactUsPage")
  return {
    title: data?.metaTitle || 'ContactUs Page',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}
export default page