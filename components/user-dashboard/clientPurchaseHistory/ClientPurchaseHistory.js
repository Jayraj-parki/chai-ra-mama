"use client"
import React, { useEffect, useState } from 'react';
import style from "./purchaseHistory.module.scss"
import Image from "next/image"
import RefreshIcon from '@mui/icons-material/Refresh';
import { Button } from '@mui/material';
import { useAuth } from '@/app/layout';
import { getClientPurchasedCart } from '@/services/localUser/getClientPurchasedCart';
const ClientPurchaseHistory = () => {
    const { userCred} = useAuth()
    const [purchaseHistoryProduct,setPurchaseHistoryProduct]=useState()
    const fetchLatestData=async()=>{
        await getClientPurchasedCart({ userCred, setData:setPurchaseHistoryProduct,status:"history" })
    }
    useEffect(()=>{
        fetchLatestData() 
    },[userCred])
    return (

        <div className={style.purchaseHistory + " container-fluid "}>
            <div className='row col-12 mx-auto d-flex align-items-center justify-content-between'>
                <h4 className='col-auto'>My Purchased Product</h4>
                <Button onClick={fetchLatestData} className=' col-auto bg-dark text-capitalize text-light'><RefreshIcon /> reload</Button>
            </div>
            <p>{purchaseHistoryProduct?.length==0  && "Oops..! No active order found."}</p>
            {
                purchaseHistoryProduct?.map((val, index) => {
                    return (
                        <>
                            <div key={val?._id + "" + index} className={' row col-12 mx-auto py-3 my-5 shadow rounded-3 border'}>
                                <div className={style.container + ' row col-12 mx-auto '}>
                                    <div>
                                        <table className="col-12 table table-bordered  text-center text-capitalize  ">
                                            <thead className='border'>
                                                <tr>
                                                    <th colSpan={5} className='text-capitalize p-2 pb-4 border text-center' >Summary</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Product Name</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Quantity</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Price</th>
                                                    <th className='text-capitalize p-2 pb-4 border text-center' >Image</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr className=''>
                                                    <td className='align-middle' rowSpan={3} colSpan={5}>
                                                        <table className='table   text-start text-capitalize' >
                                                            <tbody>
                                                                <tr><td>Total price : {val?.amount}</td></tr>
                                                                <tr><td>Ordered Time: {val?.start?.time}</td></tr>
                                                                <tr><td>Delivered Time: {val?.completed?.time}</td></tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                {
                                                    val?.productDetails?.map((product) =>

                                                        <tr className=''>
                                                            <td className='align-middle' >{product?.menuDetails?.clientMenuName}</td>
                                                            <td className='align-middle' >{product?.quantity}</td>
                                                            <td className='align-middle'>{product?.totalPrice}</td>
                                                            <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={product?.menuDetails?.clientMenuImage || "/assets/images/1.png"} alt="..." /></td>
                                                        </tr>
                                                    )
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div >
                        </>
                    )
                }
                )
            }
        </div>
    );
};

export default ClientPurchaseHistory;
