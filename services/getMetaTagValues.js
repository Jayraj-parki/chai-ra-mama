export const getMetaTagValues = async (pageId) => {
    try { 
      const result = await fetch(`http://localhost:8080/api/admin/pagewise-tag/filter/?pageId=${pageId}`, { next:{revalidate:1800}})
      const data = await result.json()
     
      return data?.data
    }
    catch (err) {
      console.log(`Error in fetching metatag for ${pageId}` + err)
      return {}
    }
  } 