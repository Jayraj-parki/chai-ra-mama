export const getOrderId = async (type,price) => {
  try {
    let end_url = ""
    if (type == "client") end_url = "client-payment-handler"
    else if (type == "user") end_url = "user-payment-handler"
    else return
    const result = await fetch(`/api/payment/${end_url}/orders`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          price
        })
      }

    )
    const data = await result.json()
    return data?.data
  }
  catch (err) {
    console.log(`Error in ${end_url}` + err)
    return null
  }
}
