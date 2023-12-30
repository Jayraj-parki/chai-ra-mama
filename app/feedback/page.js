import FeedbackPage from '@/components/pageComponents/FeedbackPage'
import { getMetaTagValues } from '@/services/getMetaTagValues'
const page = () => {

  return (
    <>
      <FeedbackPage />
    </>
  )
}

export async function generateMetadata({ params }) {
  const data = await getMetaTagValues("FeedbackPage")
  return {
    title: data?.metaTitle || 'Feedback Page',
    description: data?.metaDesc || "This is chai-ra-mama website",
    keywords: data?.metaKeywords || "keyword1, keyword2, keyword3",

  }
}

export default page