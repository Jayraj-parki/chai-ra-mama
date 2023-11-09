export const getPurchasedCart = async ({ userCred,setData,status }) => {
  try {
    const result = await fetch(`/api/user/purchase/?userId=${userCred}&status=${status}`, { next: { revalidate: 1800 } })
    const data = await result.json()
    setData(data?.data)
  }
  catch (err) {
    console.log(`Error in getPurchasedCart ` + err)
  }
}
