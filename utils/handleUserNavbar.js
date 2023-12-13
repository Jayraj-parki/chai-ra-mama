export const handleUserNavbar = async ({url,setCollapse,SetMenu,setActiveLink}) => {
    try {
        if (url.toLowerCase().includes("about")) setActiveLink("aboutus")
        else if (url.toLowerCase().includes("menu")) setActiveLink("menu")
        else if (url.toLowerCase().includes("franchise")) setActiveLink("franchise")
        else if (url.toLowerCase().includes("gallery")) setActiveLink("gallery")
        else if (url.toLowerCase().includes("feedback")) setActiveLink("feedback")
        else if (url.toLowerCase().includes("storelocators")) setActiveLink("storeLocators")
        else if (url.toLowerCase().includes("contactus")) setActiveLink("contactus")
        else if (url.toLowerCase().includes("user-signup")) setActiveLink("user-signup")
        else if (url.toLowerCase().includes("user-signin")) setActiveLink("user-signin")
        else if (url.toLowerCase().includes("dashboard")) setActiveLink("dashboard")
        else if (url.toLowerCase().includes("user-product")) setActiveLink("user-product")
        else if (url.toLowerCase().includes("client-product")) setActiveLink("client-product")
        else setActiveLink("home")
        setCollapse(true)
        SetMenu(true)
    }
    catch (err) {
        setActiveLink("home")
        console.log("err" + err)
    }
}