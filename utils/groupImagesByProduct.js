export const groupImagesByProduct = async ({ galleryData ,setProduct}) => {
    const productMap=galleryData ? galleryData?.reduce((arr, product) => {
        arr[product?.galleryTitle] = arr[product?.galleryTitle] || [];
        arr[product?.galleryTitle].push(product?.galleryImage);
        return arr;
      }, {}):{}
    setProduct(productMap)
}