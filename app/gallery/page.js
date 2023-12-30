import GalleryPage from "@/components/pageComponents/GalleryPage"
import { getMetaTagValues } from "@/services/getMetaTagValues"

const page = () => {
  return (
    <>
      <GalleryPage/>
    </>
  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("GalleryPage")

  return {
    title: data?.metaTitle || 'Home Page',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}

export default page