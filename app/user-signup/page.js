
import LocalSignUp from "@/components/LocalSignUp/LocalSignUp";
import { getMetaTagValues } from "@/services/getMetaTagValues";
const page = () => {

  return (
    <>
      <LocalSignUp/>
    </>

  )
}
export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("SignUp")
  return {
    title: data?.metaTitle || 'Sign Up',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}
export default page