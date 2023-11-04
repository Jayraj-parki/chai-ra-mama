"use client"
import React, { useState } from 'react';
import style from "./myOrders.module.scss"
import Image from "next/image"
import StartIcon from '@mui/icons-material/Start';
const MyOrders = () => {
    const arr = ["Start", "payment completed", " Order placed", "packing", "shipping", "delivered"]
    return (
        <div className={style.myOrders + " container-fluid mt-4"}>
            <h3>My Orders</h3>
            <div className={' row col-12 mx-auto py-3 my-5 shadow rounded-3 border'}>
                {/* Oops..! No active order found. */}
                <div className={style.container + ' row col-12 mx-auto '}>
                    <div>
                        <table className="col-12 table table-bordered  text-center text-capitalize  ">
                            <thead className='border'>
                                <tr>
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Product Name</th>
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Quantity</th>
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Price</th>
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Image</th>
                                    <th colSpan={4} className='text-capitalize p-2 pb-4 border text-center' >Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <td className='align-middle' >Tea</td>
                                    <td className='align-middle' >2</td>
                                    <td className='align-middle'>30 Rs.</td>
                                    <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/1.png"} alt="..." /></td>
                                    <td className='align-middle' rowSpan={3}>

                                        <table className='table   text-start text-capitalize' >
                                            <tbody>
                                                <tr>
                                                    <td>Total price : 30 Rs.</td>
                                                </tr>
                                                <tr>
                                                    <td>Order Time: 20Oct 23, 5:23Pm</td>
                                                </tr>
                                                <tr>
                                                    <td>Status: Delivered</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className=''>
                                    <td className='align-middle' >Tea</td>
                                    <td className='align-middle' >2</td>
                                    <td className='align-middle'>30 Rs.</td>
                                    <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/1.png"} alt="..." /></td>
                                </tr>
                                <tr className=''>
                                    <td className='align-middle' >Tea</td>
                                    <td className='align-middle' >2</td>
                                    <td className='align-middle'>30 Rs.</td>
                                    <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/1.png"} alt="..." /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={style.orderStatus + ' py-3 row col-12 mx-auto d-flex justify-content-between align-items-start '}>
                    {arr?.map((val, index) =>
                        <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                            <div className={style.statusIcon + ` ${index == 2 && style.activeStatus}  ${index > 2 && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><StartIcon className={style.icon + ' p-0'} /></div>
                            <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0 pb-0 '>{val}</p><small className='col-12 text-center text-capitalize '>{index < 2 ? "Completed" : index == 2 ? "active" : ""}</small></div>
                        </div>
                    )}
                </div>
            </div>
            <div className={' row col-12 mx-auto py-3 shadow rounded-3 border'}>
                {/* Oops..! No active order found. */}
                <div className={style.container + ' row col-12 mx-auto '}>
                    <div>
                        <table className="col-12 table table-bordered  text-center text-capitalize  ">
                            <thead className='border'>
                                <tr>
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Product Name</th>
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Quantity</th>
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Price</th>
                                    <th className='text-capitalize p-2 pb-4 border text-center' >Image</th>
                                    <th colSpan={4} className='text-capitalize p-2 pb-4 border text-center' >Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className=''>
                                    <td className='align-middle' >Tea</td>
                                    <td className='align-middle' >2</td>
                                    <td className='align-middle'>30 Rs.</td>
                                    <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/1.png"} alt="..." /></td>
                                    <td className='align-middle' rowSpan={3}>

                                        <table className='table   text-start text-capitalize' >
                                            <tbody>
                                                <tr>
                                                    <td>Total price : 30 Rs.</td>
                                                </tr>
                                                <tr>
                                                    <td>Order Time: 20Oct 23, 5:23Pm</td>
                                                </tr>
                                                <tr>
                                                    <td>Status: Delivered</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className=''>
                                    <td className='align-middle' >Tea</td>
                                    <td className='align-middle' >2</td>
                                    <td className='align-middle'>30 Rs.</td>
                                    <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/1.png"} alt="..." /></td>
                                </tr>
                                <tr className=''>
                                    <td className='align-middle' >Tea</td>
                                    <td className='align-middle' >2</td>
                                    <td className='align-middle'>30 Rs.</td>
                                    <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/1.png"} alt="..." /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={style.orderStatus + ' py-3 row col-12 mx-auto d-flex justify-content-between align-items-start '}>
                    {arr?.map((val, index) =>
                        <div className=' col-4 col-md-2 d-flex justify-content-start flex-column align-items-center '>
                            <div className={style.statusIcon + ` ${index == 2 && style.activeStatus}  ${index > 2 && style.reqStatus} text-center rounded-pill   d-flex justify-content-center align-items-center `}><StartIcon className={style.icon + ' p-0'} /></div>
                            <div className={style.statusText + ' text-center'}><p className='col-12 text-center m-0 pb-0 '>{val}</p><small className='col-12 text-center text-capitalize '>{index < 2 ? "Completed" : index == 2 ? "active" : ""}</small></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
