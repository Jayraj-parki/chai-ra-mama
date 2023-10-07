export const getMenuData = async (setData) => {
    try {
      const result = await fetch("/api/menu/all",  { next:{revalidate:1800}})
      const pageData = await result.json()
      setData(pageData)
    }
    catch (err) {
      console.log("error in fetching menu data" + err)
    }
  }