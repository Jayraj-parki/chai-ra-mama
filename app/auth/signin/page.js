import AdminSignIn from "@/ComponentsAdmin/admin_SignIn/AdminSignIn"
import { getMetaTagValues } from "@/services/getMetaTagValues"

const page = () => {

  return (
    <>
      <AdminSignIn />
    </>
  )
}
export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("AdminSignIn")
  return {
    title: data?.metaTitle || 'AdminSignIn',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}

export default page