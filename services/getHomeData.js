export const getHomeData = async (setData) => {
    try {
      const result = await fetch("/api/home/all",  { next:{revalidate:1800}}) 
      const data = await result.json()
      setData(data)
    }
    catch (err) {
      console.log("error in fetching home data" + err)
    }
  }