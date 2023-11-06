export const getCartProduct = async ({ userCred, setCartProduct }) => {
  try {
    const result = await fetch(`/api/user/product/?userId=${userCred}`, { next: { revalidate: 1800 } })
    const data = await result.json()
    setCartProduct(data?.data)
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