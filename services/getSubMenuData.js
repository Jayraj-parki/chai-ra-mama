export const getSubMenuPageData = async ({_id,setData}) => {
    try { 
      const result = await fetch(`/api/admin/sub-menu?_id=${_id}`, { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
    }
    catch (err) {
      console.log("Error in Sub Menu data" + err)
    }
  }