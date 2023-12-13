
export const SendRequestForStoreIncharge = async ({ inchargeName, inchargeEmail, inchargePhone, helper, store, setAlert }) => {
    try {
        if(!store){
            setAlert({ modalActive: true, workStatus: "failed", message: "Please select store details" })
            return
        }
        if (!inchargeEmail?.trim() || !inchargeName?.trim() || !inchargePhone?.trim()) {
            setAlert({ modalActive: true, workStatus: "failed", message: "Profile data is incomplete, please update your Profile data" })
            return
        }
        else {
            const result = await fetch("/api/admin/store-incharge-request", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    inchargeName, inchargeEmail, inchargePhone,
                    storeId:store
                })
            })
            const data = await result.json()
            setAlert({ modalActive: true, workStatus: "done", message: data?.message })
            helper()

        }
    }
    catch (err) {
        console.log("STORE INCHARGE REQUEST ERROR: " + err)
    }
}