export const getSiteEnquiryData = async (setData) => {
    try { 
      const result = await fetch("/api/admin/site-enquiry", { next:{revalidate:1800}})
      const data = await result.json()
      setData(data?.data)
    }
    catch (err) {
      console.log("Error in getting Site enquiry data" + err)
    }
  }