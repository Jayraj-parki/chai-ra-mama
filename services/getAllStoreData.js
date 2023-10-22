export const getAllStoreData = async (setData) => {
    try { 
      const result = await fetch(`/api/admin/stores/all`, { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
    }
    catch (err) {
      console.log("Error in STORE data" + err)
    }
  }