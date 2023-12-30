import ClientProduct from "@/components/clientProduct/ClientProduct"
import { getMetaTagValues } from "@/services/getMetaTagValues"

const page = () => {

  return (

    <>
      <ClientProduct />
    </>
  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("ClientProductOrders")
  return {
    title: data?.metaTitle || 'ClientProductOrders',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}

export default page
