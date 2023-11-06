import { updateProduct } from "@/services/localUser/updateProduct";

export const handleIncrement = async (productId, setProductCounts, productCounts,userId) => {
  const productIndex = productCounts.findIndex(item => item.id === productId);
  if (productIndex !== -1) {
    const updatedProductCounts = [...productCounts];
    const quantity=updatedProductCounts[productIndex]?.quantity + 1
    const price=updatedProductCounts[productIndex]?.price
    const totalPrice=Number(price)*Number(quantity)
    updatedProductCounts[productIndex] = {
      id: productId,
      quantity ,
      price,
      totalPrice
    };
    setProductCounts(updatedProductCounts);
    await updateProduct({_id:productId,quantity,userId,update:"quantity",totalPrice})
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

export const handleDecrement = async(productId, setProductCounts, productCounts,userId) => {
  const productIndex = productCounts.findIndex(item => item.id === productId);
  if (productIndex !== -1 && productCounts[productIndex]?.quantity > 1) {
    const updatedProductCounts = [...productCounts];
    const quantity= updatedProductCounts[productIndex]?.quantity - 1
    const price= updatedProductCounts[productIndex]?.price
    const totalPrice=Number(price)*Number(quantity)
    updatedProductCounts[productIndex] = {
      ...updatedProductCounts[productIndex],
      quantity,
      totalPrice
    };
    setProductCounts(updatedProductCounts);
    await updateProduct({_id:productId,quantity,userId,update:"quantity",totalPrice})
  }
};
