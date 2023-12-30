
import LocalSignIn from "@/components/localSignIn/LocalSignIn";
import { getMetaTagValues } from "@/services/getMetaTagValues";

const page = () => {

  return (
    <>
      {
        <LocalSignIn />
      }
    </>
  )
}
export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("SignIn")
  return {
    title: data?.metaTitle || 'Sign In',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}

export default page