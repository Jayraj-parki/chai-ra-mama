"use client"
import { useDashboardContext } from '@/app/dashboard/page';
import React, { useEffect, useState } from 'react';
import style from "./cart.module.scss"
import Image from "next/image"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { handleDecrement, handleIncrement } from '@/utils/handleProductQuantity';
import { removeFromCart } from '@/services/localUser/removeFromCart';
import { useAuth } from '@/app/layout';
import { saveCheckoutData } from '@/services/localUser/saveCheckoutData';
const Cart = () => {
    const { getCountOfAddedCart,userCred } = useAuth()
    const { cartProduct, getCartData } = useDashboardContext()
    const onCheckout = () => { return 1 }
    const [productCounts, setProductCounts] = useState([]);
    const [removedProduct, setRemovedProduct] = useState([]);
    const removeCart = async ({ id }) => {
        const confirm = window.confirm("Do you really want to remove this product? ")
        if (confirm) {
            await removeFromCart({ uId: id })
            getCountOfAddedCart()    
            alert("Product removed Successfully")
            setProductCounts(prevCounts => prevCounts.filter(item => item.id !== id));
            setRemovedProduct({...removedProduct,id})
            getCartData("start")
        }
    }
    const proceeedCheckout = async () => {
        await saveCheckoutData()
    }
    useEffect(() => {
        if (cartProduct) {
            const updatedProductCounts = cartProduct.map(val => ({
                id: val?._id,
                quantity: val?.quantity,
                price: val?.menuDetails?.itemPrice,
                totalPrice: Number(val?.menuDetails?.itemPrice) * Number(val?.quantity)
            }));
            setProductCounts(updatedProductCounts);
        }

    }, [cartProduct])
    return (
        <div className={style.cart + " container mt-4"}>
            <h4>My Cart</h4>
            <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
                {cartProduct?.length > 0 ?
                    <table className="col-12 table table-bordered text-center text-capitalize  ">
                        <thead className='border'>
                            <tr>
                                <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
                                <th className='text-capitalize p-2 pb-4 border text-center' >Title</th>
                                <th className='text-capitalize p-2 pb-4 border text-center' >Image</th>
                                <th className='text-capitalize p-2 pb-4 border text-center' >Price</th>
                                <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartProduct?.map((val, index) =>
                                    <tr key={val?._id + "" + index + "" + Math?.random(10000)} className=''>
                                        <td className='align-middle' >{index + 1}</td>
                                        <td className='align-middle' >{val?.menuDetails?.itemName}</td>
                                        <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={val?.menuDetails?.itemImage || "/assets/images/1.png"} alt="..." /></td>
                                        <td className='align-middle text-start'>
                                            <table className='table text-center text-capitalize'>
                                                <tbody>
                                                    <tr>
                                                        <td className=''>
                                                            <RemoveIcon className={style.quantity + ' border-1 p-0  rounded mx-2'} onClick={() => handleDecrement(val?._id, setProductCounts, productCounts,userCred)} />
                                                            <span className='h6'>{productCounts?.find(item => item.id === val?._id)?.quantity || 1}</span>
                                                            <AddIcon className={style.quantity + ' border-1 p-0  rounded mx-2'} onClick={() => handleIncrement(val?._id, setProductCounts, productCounts,userCred)} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className=''>
                                                            Price: {productCounts?.find(item => item.id === val?._id)?.totalPrice || productCounts?.find(item => item.id === val?._id)?.price} Rs.
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </td>
                                        <td className='text-center align-middle'>
                                            <button onClick={() => removeCart({ id: val?._id })} className={style.addToCart + " row btn text-capitalize btn-secondary outline-none border-0 col-12 py-2 px-3 px-md-5 fw-bold text-center my-auto mx-auto"} >Remove from Cart</button>
                                        </td>
                                    </tr>
                                )}

                            <tr className=''>
                                {/* <td className='align-middle' >Total</td> */}
                                <td className='align-middle text-end' colSpan={4}>Total Price: {productCounts?.map(val => val.totalPrice)?.reduce((acc, price) => acc + price, 0)}/- Rs. </td>
                            </tr>
                        </tbody>
                    </table> : <p className='text-center'>No Product Added to Cart</p>}
            </div>
            {/* <div className="row col-auto mx-auto mb-5">
                <button className="btn col-6 col-md-4 col-xl-3 btn-success mt-3 ms-auto text-capitalize" onClick={onCheckout}>Checkout</button>
            </div> */}
            {cartProduct?.length > 0 && <div className="row col-auto mx-auto mb-5">
                <button className="btn col-6 col-md-4 col-xl-3 btn-primary mt-3 mx-auto text-capitalize" onClick={proceeedCheckout}>Proceed for Checkout</button>
            </div>}
        </div >
    );
};

export default Cart;
