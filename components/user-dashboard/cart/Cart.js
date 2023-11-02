"use client"
import { useCartUiContext } from '@/app/dashboard/page';
import React, { useState } from 'react';
import style from "./cart.module.scss"
import Image from "next/image"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const Cart = () => {
    const { subMenuData } = useCartUiContext()
    const onCheckout = () => { return 1 }
    const removeCart = (product) => { return 1 }
    const [productCounts, setProductCounts] = useState({});

    const handleIncrement = (productId) => {
        setProductCounts(prevCounts => ({
            ...prevCounts,
            [productId]: (prevCounts[productId] || 1) + 1
        }));
    };

    const handleDecrement = (productId) => {
        if (productCounts[productId] >1) {
            setProductCounts(prevCounts => ({
                ...prevCounts,
                [productId]: prevCounts[productId] - 1
            }));
        }
    };
    return (
        <div className={style.cart + " container mt-4"}>
            <h3>My Cart</h3>
            <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
                <table className="col-12 table table-bordered table-hover  text-center text-capitalize  ">
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
                            subMenuData?.map((val, index) =>
                                <tr key={val?.itemName + "" + index + "" + Math?.random(10000)} className=''>
                                    <td className='align-middle' >{index + 1}</td>
                                    <td className='align-middle' >{val?.itemName}</td>
                                    <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={val?.itemImage || "/assets/images/1.png"} alt="..." /></td>
                                    <td className='align-middle text-start'>
                                        <table className='table text-center text-capitalize'>
                                            <tbody>
                                                <tr>
                                                    <td className=''>
                                                        {/* quantity <input className={style.quantity +" border-1 p-2 bg-light rounded border-0 "} value={productCounts[val._id] || 1} onChange={(e) => setProductCounts(e.target.value)} type='number' /> */}
                                                        <RemoveIcon className={ style.quantity +' border-1 p-0  rounded mx-2'} onClick={() => handleDecrement(val?._id)}/>
                                                        <span  className='h6'>{productCounts[val?._id] || 1}</span>
                                                        <AddIcon className={ style.quantity +' border-1 p-0  rounded mx-2'} onClick={() => handleIncrement(val?._id)}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=''>
                                                        Price: {val?.itemPrice * (productCounts[val?._id]||1)} Rs.
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                    <td className='text-center align-middle'>
                                        <button onClick={() => removeCart({ id: val?._id, name: val?.itemName, price: val?.itemPrice })} className={style.addToCart + " row btn outline-none border-0 col-12 py-2 px-3 px-md-5 fw-bold text-center my-auto mx-auto"} >Remove from Cart</button>
                                    </td>
                                </tr>
                            )}
                        <tr className=''>
                            <td className='align-middle' >Total</td>
                            <td className='align-middle text-end' >1500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row col-auto mx-auto mb-5">
                <button className="btn col-6 col-md-4 col-xl-3 btn-success mt-3 ms-auto" onClick={onCheckout}>Checkout</button>
            </div>
        </div >
    );
};

export default Cart;
