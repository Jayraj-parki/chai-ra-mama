import UserProduct from "@/components/userProduct/UserProduct"
import { getMetaTagValues } from "@/services/getMetaTagValues"

const page = () => {
 
  return (
      <>
      <UserProduct/>
      </>
  )
}
export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("UsersProductOrders")
  return {
    title: data?.metaTitle || 'Users Product Orders',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
} 

export default page
