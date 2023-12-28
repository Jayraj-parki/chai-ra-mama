import MenuPage from '@/components/pageComponents/MenuPage'
import { getMetaTagValues } from '@/services/getMetaTagValues'

const page = () => {

  return (
    <>
      <MenuPage />
    </>
  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("MenuPage")
  return {
    title: data?.metaTitle || 'Menu Page',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",
  }
}

export default page
