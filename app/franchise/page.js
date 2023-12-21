import FrancisePage from "@/components/pageComponents/FrancisePage"
import { getMetaTagValues } from "@/services/getMetaTagValues"

const page = () => {

  return (
    <>
      <FrancisePage/>
    </>
  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("FranchisePage")
  return {
    title: data?.metaTitle || 'Franchise Page',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}

export default page