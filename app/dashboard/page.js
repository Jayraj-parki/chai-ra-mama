import Dashboard from "@/components/dashboard/Dashboard"
import { getMetaTagValues } from "@/services/getMetaTagValues"

const page = () => {

  return (
    <>
      <Dashboard />
    </>
  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("UserDashboard")
  return {
    title: data?.metaTitle || 'UserDashboard',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}

export default page
