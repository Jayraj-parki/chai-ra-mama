export const getLocalUser = async (userCred,setData) => {
    try { 
      const result = await fetch(`/api/user/local-signup/?email=${userCred}`, { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
    }
    catch (err) {
      console.log(`Error in getLocalUser ` + err)
    }
  }