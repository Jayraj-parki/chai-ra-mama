export const AddStoreCityData = async ({ storeCity ,helper,setAddData,clearForm}) => {
    try {
        if (storeCity.trim() == "") {
            alert("Please fill all the fields")
        }
        else {
            
            const result = await fetch("/api/admin/store-locator", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    storeCity:storeCity
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setAddData(false)
        }
    }
    catch (err) {
        console.log("STORE CITY ERROR: " + err)
    }
}