import StoreLocatorPage from "@/components/pageComponents/StoreLocatorPage"
import { getMetaTagValues } from "@/services/getMetaTagValues"

const page = () => {
 
  return (
    <>
     <StoreLocatorPage/>
    </>
  )
}
export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("StoreLocatorPage")
  return {
    title: data?.metaTitle || 'StoreLocator Page',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
} 

export default page 