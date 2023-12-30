"use client"
import React, { useEffect, useState } from 'react';
import style from "./myOrders.module.scss"
import Image from "next/image"
import StartIcon from '@mui/icons-material/Start';
import { Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useAuth } from '@/app/layout';
import { getClientPurchasedCart } from '@/services/localUser/getClientPurchasedCart';
import PaymentIcon from '@mui/icons-material/Payment';
import SellIcon from '@mui/icons-material/Sell';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const ClientOrders = () => {
    const { userCred } = useAuth()
    const [purchasedProduct, setPurchaseProduct] = useState()
    const fetchLatestData = async () => await getClientPurchasedCart({ userCred, setData: setPurchaseProduct, status: "processing" })
    
    useEffect(() => { 
        fetchLatestData()
    }, [userCred])
    return (
        <div className={style.myOrders + " container-fluid"}>
            <div className='row col-12 mx-auto d-flex align-items-center justify-content-between'>
                <h4 className='col-auto'>My Orders</h4>
                <Button onClick={fetchLatestData} className=' col-auto bg-dark text-capitalize text-light'><RefreshIcon /> reload</Button>
            </div>
            <p>{purchasedProduct?.length == 0 && "Oops..! No active order found."}</p>
            {
                purchasedProduct?.map((val, index) => {
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
                                                    <td className='align-middle' rowSpan={300} colSpan={5}>
                                                        <table className='table   text-start text-capitalize' >
                                                            <tbody>
                                                                <tr><td>Total price : {val?.amount}</td></tr>
                                                                <tr><td>Order Time: {val?.start?.time}</td></tr>
                                                                <tr><td>last Status: {val?.activeStatus}</td></tr>
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
                                <div className={style.orderStatus + ' py-3 row col-12 mx-auto d-flex justify-content-between align-items-start '}>
                                    <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                                        <div className={style.statusIcon + ` ${!val?.start?.status && style.activeStatus}  ${!val?.start?.status && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><StartIcon className={style.icon + ' p-0'} /></div>
                                        <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0  text-capitalize pb-0 '>Start</p><small className='col-12 text-center text-capitalize '>{val?.start?.status ? "Completed" : ""}</small></div>
                                    </div>
                                    <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                                        <div className={style.statusIcon + ` ${!val?.payment?.status && style.activeStatus}  ${!val?.payment?.status && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><PaymentIcon className={style.icon + ' p-0'} /></div>
                                        <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0  text-capitalize pb-0 '>payment</p><small className='col-12 text-center text-capitalize '>{val?.payment?.status ? "Completed" : ""}</small></div>
                                    </div>
                                    <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                                        <div className={style.statusIcon + ` ${!val?.orderPlaced?.status && style.activeStatus}  ${!val?.payment?.status && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><SellIcon className={style.icon + ' p-0'} /></div>
                                        <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0  text-capitalize pb-0 '>Order Placed</p><small className='col-12 text-center text-capitalize '>{val?.orderPlaced?.status ? "Completed" : val?.payment?.status ? "processing" : ""}</small></div>
                                    </div>
                                    
                                    <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                                        <div className={style.statusIcon + ` ${!val?.delivered?.status && style.activeStatus}  ${!val?.orderPlaced?.status && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><LocalShippingIcon className={style.icon + ' p-0'} /></div>
                                        <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0  text-capitalize pb-0 '>Delivered</p><small className='col-12 text-center text-capitalize '>{val?.delivered?.status ? "Completed" : val?.orderPlaced?.status ? "processing" : ""}</small></div>
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

export default ClientOrders;
