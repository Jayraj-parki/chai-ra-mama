export const updateStoreCityData = async ({_id,storeCity ,helper,setEditData,clearForm}) => {
    try {
        if (storeCity.trim() == "") {
            alert("Please fill all the fields")
            
        }
        else {
            
            const result = await fetch("/api/admin/store-locator", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id:_id,
                    storeCity:storeCity
                })
            })
            const data = await result.json()
            alert(data?.message)
            helper()
            clearForm()
            setEditData({ active: false, _id: "", city:"" })
        }
    }
    catch (err) {
        console.log("STORE CITY ERROR: " + err)
    }
}