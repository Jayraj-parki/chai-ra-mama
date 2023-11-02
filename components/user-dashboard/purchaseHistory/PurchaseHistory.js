"use client"
import { useCartUiContext } from '@/app/dashboard/page';
import React, { useState } from 'react';
import style from "./purchaseHistory.module.scss"
import Image from "next/image"
const PurchaseHistory = () => {
    const { subMenuData } = useCartUiContext()
    const [cart, setCart] = useState([])
    const onCheckout = () => { return 1 }
    const onCommentAdd = () => { return 1 }
    const removeCart = (product) => { return 1 }
    return (
        <div className={style.purchaseHistory + " container mt-4"}>
            <h3>My Cart</h3>
            <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
                <table className="col-12 table table-bordered table-hover  text-center text-capitalize  ">
                    <thead className='border'>
                        <tr>

                            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Title</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Image</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Price</th>
                            <th className='text-capitalize p-2 pb-4 border text-center' >Delivered on</th>
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
                                                        <span className='h6'>{1}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className=''>
                                                        Price: {val?.itemPrice} Rs.
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                    <td className='text-center align-middle'>
                                        1 Nov 2023pm, 6PM
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PurchaseHistory;
