export const getCartProduct = async ({ userCred, setData,status }) => {
  try {
    const result = await fetch(`/api/user/product/filter/?userId=${userCred}&status=${status}`, { next: { revalidate: 1800 } })
    const data = await result.json()
    setData(data?.data)
    // console.log(data)
  }
  catch (err) {
    console.log(`Error in getCartProduct ` + err)
  }
}
export const getCartCount = async ({ userCred,setCartCount}) => {
  try {
    const result = await fetch(`/api/user/product/count/?userId=${userCred}`, { next: { revalidate: 1800 } })
    const data = await result.json()
    setCartCount(data?.count)
  }
  catch (err) {
    console.log(`Error in getCartCount ` + err)
  }
}