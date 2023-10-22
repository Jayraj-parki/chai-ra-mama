export const getStoreCityData = async (setData) => {
    try { 
      const result = await fetch("/api/admin/store-locator", { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
    }
    catch (err) {
      console.log("Error in Store city data" + err)
    }
  }