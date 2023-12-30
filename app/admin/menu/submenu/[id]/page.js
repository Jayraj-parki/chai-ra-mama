import SubMenuPage from "@/ComponentsAdmin/adminPages/SubMenuPage"

const page = ({params}) => {
 
  return (
    <>
      <SubMenuPage params={params}/>
    </>
  )
}
export const metadata = {
  title: "Sub Menu",
  description: "Static Desciption"
}
export default page