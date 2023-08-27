
const page = () => {
  return (
    <div>page</div>
  )
}

// Static MetaTag
// export const metadata = {
//   title: " Static title",
//   description: "Static Desciption"
// }
 
// dynamic metadata

export async function generateMetadata({ params }) {
  return {
    title: 'Dynamic Title',
    description: "Dynamic Desciption"
  }
}

export default page
