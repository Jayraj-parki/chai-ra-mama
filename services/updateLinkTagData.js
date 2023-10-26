export const updateLinkTagData = async ({ _id, facebook,instagram,whatsapp,youtube,metaTitleTag,metaKeyword,metaDesc  }) => {
    try {
        
            const result = await fetch("/api/admin/site-link-tags", {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    _id: _id,
                    facebook,instagram,whatsapp,youtube,metaTitleTag,metaKeyword,metaDesc 
                })
            })
            const data = await result.json()
            alert(data?.message) 
         }
    
    catch (err) {
        console.log("LINK TAG DATA ERROR: " + err)
    }
}