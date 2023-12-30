import AddStorePage from "@/ComponentsAdmin/adminPages/AddStorePage"

const page = ({params}) => {
 
  return (
    <>
      <AddStorePage params={params}/>
    </>
  )
}
export const metadata = {
  title: "Add Store",
  description: "Static Desciption"
}
export default page