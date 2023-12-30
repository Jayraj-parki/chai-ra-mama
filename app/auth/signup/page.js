
import AdminSignUp from "@/ComponentsAdmin/admin_SignUp/AdminSignUp";
import { getMetaTagValues } from "@/services/getMetaTagValues";
const page = () => {

  return (
    <>
      <AdminSignUp/>
    </>

  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("AdminSignUp")
  return {
    title: data?.metaTitle || 'AdminSignUp',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}
export default page