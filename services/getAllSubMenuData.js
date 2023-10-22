export const getAllSubMenuPageData = async (setData) => {
    try { 
      const result = await fetch(`/api/admin/sub-menu/all`, { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
    }
    catch (err) {
      console.log("Error in Sub Menu data" + err)
    }
  }