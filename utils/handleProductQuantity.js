export const handleIncrement = async (productId, setProductCounts, productCounts) => {
  const productIndex = productCounts.findIndex(item => item.id === productId);
  if (productIndex !== -1) {
    const updatedProductCounts = [...productCounts];
    const quantity=updatedProductCounts[productIndex]?.quantity + 1
    const price=updatedProductCounts[productIndex]?.price
    updatedProductCounts[productIndex] = {
      id: productId,
      quantity ,
      price,
      totalPrice:Number(price)*Number(quantity)
    };
    setProductCounts(updatedProductCounts);
  } else {
    setProductCounts(prevCounts => [
      ...prevCounts,
      {
        id: productId,
        quantity: 1,
      }
    ]);
  }
};

export const handleDecrement = (productId, setProductCounts, productCounts) => {
  const productIndex = productCounts.findIndex(item => item.id === productId);
  if (productIndex !== -1 && productCounts[productIndex]?.quantity > 1) {
    const updatedProductCounts = [...productCounts];
    const quantity= updatedProductCounts[productIndex]?.quantity - 1
    const price= updatedProductCounts[productIndex]?.price
    updatedProductCounts[productIndex] = {
      ...updatedProductCounts[productIndex],
      quantity,
      totalPrice:Number(price)*Number(quantity)
    };
    setProductCounts(updatedProductCounts);
  }
};
