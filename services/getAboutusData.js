export const getAboutusData = async (setData) => {
    try { 
      const result = await fetch("/api/aboutus/all", { next:{revalidate:1800}})
      const data = await result.json()
      setData(data)
    }
    catch (err) {
      console.log("error in fetching about page data" + err)
    }
  } 