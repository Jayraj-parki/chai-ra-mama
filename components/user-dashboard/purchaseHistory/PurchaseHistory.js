"use client"
import { useDashboardContext } from '@/app/dashboard/page';
import React, { useEffect, useState } from 'react';
import style from "./purchaseHistory.module.scss"
import Image from "next/image"
const PurchaseHistory = () => {
    const { purchaseHistoryProduct} = useDashboardContext()
    return (
        <div className={style.purchaseHistory + " container mt-4"}>
            <h4>Purchase History</h4>
            <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
                {purchaseHistoryProduct?.length > 0 ?
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
                                purchaseHistoryProduct?.map((val, index) =>
                                    <tr key={val?.itemName + "" + index + "" + Math?.random(10000)} className=''>
                                        <td className='align-middle' >{index + 1}</td>
                                        <td className='align-middle' >{val?.menuDetails?.itemName}</td>
                                        <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={val?.menuDetails?.itemImage || "/assets/images/1.png"} alt="..." /></td>
                                        <td className='align-middle text-start'>
                                            <table className='table text-start text-capitalize'>
                                                <tbody>
                                                    <tr>
                                                        <td className='text0start'>
                                                            <span className='h6'>Unit Price: {val?.menuDetails?.itemPrice} rs.</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className='text0start'>
                                                            <span className='h6'>Quantity: {val?.quantity}</span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className=''>
                                                            Total Price: {val?.totalPrice} Rs.
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </td>
                                        <td className='text-center align-middle'>
                                            {val?.orderTime}
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                    : <p className='text-center'>No Purchase History found..!</p>}
            </div>
        </div>
    );
};

export default PurchaseHistory;
