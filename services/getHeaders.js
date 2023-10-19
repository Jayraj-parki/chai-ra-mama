export const getHeaders = async (setData) => {
    try { 
      const result = await fetch("/api/admin/headers", { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
      console.log(data)
    }
    catch (err) {
      console.log("Error in Headers data" + err)
    }
  }