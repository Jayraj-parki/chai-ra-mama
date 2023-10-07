import SignUp from "@/ComponentsAdmin/admin_SignUp/SignUp"

const page = () => {
  useEffect(() => {
    if (user) {
      router.push('/admin/home');
    }
  }, [user,router])
  return (
    <>
      <SignUp/>
    </>

  )
}

export default page