"use client"
import ContactBanner from '@/components/contact_banner/ContactBanner'
import ContactDetails from '@/components/contact_contactDetails/ContactDetails'

// const contactUsUIContext = createContext()
// export const useContactUsUIContext = () => {
//   return useContext(contactUsUIContext)
// }

const ContactUsPage = () => {
  // const [contactData, setData] = useState()
  // const helper = async () => {
  //   await getDataService(setData, "site-details/ui")
  // }
  // useEffect(() => {
  //  helper()
  // }, [])
  return (
    <>
      {/* <contactUsUIContext.Provider value={{contactData,helper}}> */}
      <ContactBanner />
      <ContactDetails />
      {/* </contactUsUIContext.Provider> */}
    </>
  )
}

export default ContactUsPage