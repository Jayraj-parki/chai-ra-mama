export const getMenuPageData = async (setData) => {
    try { 
      const result = await fetch("/api/admin/menu", { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
    }
    catch (err) {
      console.log("Error in Menu data" + err)
    }
  }