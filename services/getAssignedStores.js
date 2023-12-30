export const getAssignedStores = async (userId,setData,end_url) => {
    try { 
      const result = await fetch(`/api/admin/store-incharge/${end_url}/?userId=${userId}`, { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
    }
    catch (err) {
      console.log(`Error in ${end_url}` + err)
    }
  }