export const getGalleryData = async (setData) => {
    try { 
      const result = await fetch("/api/admin/gallery", { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
      console.log(data)
    }
    catch (err) {
      console.log("Error in Gallery data" + err)
    }
  }