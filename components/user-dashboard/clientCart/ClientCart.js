"use client"
import React, { useEffect, useState } from 'react';
import style from "./cart.module.scss"
import Image from "next/image"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { handleClientProductDecrement, handleClientProductIncrement } from '@/utils/handleProductQuantity';
import { useAuth } from '@/app/layout';
import { handlePayment } from '@/services/localUser/handlePayment';
import { removeFromClientCart } from '@/services/localUser/removeFromClientCart';
import { updateClientProduct } from '@/services/localUser/updateClientProduct';
import { getClientCartProduct } from '@/services/localUser/getClientCartProduct';
import { saveClientCheckoutData } from '@/services/localUser/saveClientCheckoutData';
import { getAssignedStores } from '@/services/getAssignedStores';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
const ClientCart = () => {
    const { getCountOfAddedClientCart, userCred } = useAuth()
    const [cartProduct, setCartProduct] = useState()
    const [productCounts, setProductCounts] = useState([]);
    const [removedProduct, setRemovedProduct] = useState([]);
    const [assignedStore, setAssignedStore] = useState([]);
    const [selectedStore, setSelectedStore] = useState("");
    const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })

    const helper = async () => { await getClientCartProduct({ userCred, setData: setCartProduct, status: "start" }) }
    const getMyStore = async () => { await getAssignedStores(userCred, setAssignedStore, "filter") }
    const removeCart = async ({ id }) => {
        await removeFromClientCart({ uId: id })
        getCountOfAddedClientCart()
        setProductCounts(prevCounts => prevCounts.filter(item => item.id !== id));
        setRemovedProduct({ ...removedProduct, id })
        helper()
    }
    const proceeedCheckout = async () => {
        if (selectedStore == "") {
            setAlert({ modalActive: true, workStatus: "failed", message: "Please select store as delivery address" })
            return
        }
        setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
        const userId = userCred;
        const isUpdated = await updateClientProduct({ userId, _id: userId, update: "checkout" })
        let isPaymentSucessful = true
        // if(isUpdated) isPaymentSucessful=await handlePayment({})
        if (isPaymentSucessful) {
            await updateClientProduct({ userId, _id: userId, update: "payment" })
            await saveClientCheckoutData({ userId: userCred,storeId:selectedStore })
        }
        else {
            await updateClientProduct({ userId, _id: userId, update: "cancel" })
        }
        setAlert({ modalActive: false, workStatus: "", message: "" })
        
        helper()
        getCountOfAddedClientCart()
    }
    useEffect(() => {
        helper()
        getMyStore()
    }, [userCred])
    useEffect(() => {
        if (cartProduct) {
            const updatedProductCounts = cartProduct.map(val => ({
                id: val?._id,
                quantity: val?.quantity,
                price: val?.menuDetails?.clientMenuPrice,
                totalPrice: Number(val?.menuDetails?.clientMenuPrice) * Number(val?.quantity)
            }));
            setProductCounts(updatedProductCounts);
        }
    }, [cartProduct])
    return (
        <>
            <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <div className={style.cart + " container col-12  "}>
                <h4>My Cart</h4>
                <div className={style.tableContainer + ' row col-12 mx-auto mt-3 border rounded p-3'}>
                    <div className=" row col-12 mx-auto mb-4 p-0 ">
                        <label className="form-label  text-capitalize">Select City</label>
                        <select className="form-select shadow-none" value={selectedStore} onChange={(e) => { setSelectedStore(e.target?.value); }}>
                            <option value="" disabled selected>Select Store</option>
                            {
                                assignedStore?.map((val, index) => {
                                    return (
                                        <option key={val?._id + index} value={val?._id}>{val?.storeAddress}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {cartProduct?.length > 0 ?
                        <table className="col-12  table table-bordered text-center text-capitalize rounded  ">
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
                                            <td className='align-middle' >{val?.menuDetails?.clientMenuName}</td>
                                            <td className='align-middle'> <Image className="rounded " width={250} height={200} objectFit="cover" src={val?.menuDetails?.clientMenuImage || "/assets/images/1.png"} alt="..." /></td>
                                            <td className='align-middle text-start'>
                                                <table className='table text-center text-capitalize'>
                                                    <tbody>
                                                        <tr>
                                                            <td className=''>
                                                                <RemoveIcon className={style.quantity + ' border-1 p-0  rounded mx-2'} onClick={() => handleClientProductDecrement(val?._id, setProductCounts, productCounts, userCred)} />
                                                                <span className='h6'>{productCounts?.find(item => item.id === val?._id)?.quantity || 1}</span>
                                                                <AddIcon className={style.quantity + ' border-1 p-0  rounded mx-2'} onClick={() => handleClientProductIncrement(val?._id, setProductCounts, productCounts, userCred)} />
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
                                            <td rowSpan={4} className='text-center align-middle'>
                                                <button onClick={() => removeCart({ id: val?._id })} className={style.addToCart + " row btn text-capitalize btn-secondary outline-none border-0 col-12 py-2 px-3 px-md-5 fw-bold text-center my-auto mx-auto"} >Remove from Cart</button>
                                            </td>
                                        </tr>
                                    )}

                                <tr className=''>
                                    {/* <td className='align-middle' >Total</td> */}
                                    <td className='align-middle text-end' colSpan={4}>Total Price: {productCounts?.map(val => val.totalPrice)?.reduce((acc, price) => acc + price, 0)}/- Rs. </td>
                                </tr>
                            </tbody>
                        </table> : <p className='text-center'>No Product Added to Cart..!</p>}
                </div>
                {/* <div className="row col-auto mx-auto mb-5">
                <button className="btn col-6 col-md-4 col-xl-3 btn-success mt-3 ms-auto text-capitalize" onClick={onCheckout}>Checkout</button>
            </div> */}
                {cartProduct?.length > 0 && <div className="row col-auto mx-auto mb-5">
                    <button className="btn col-6 col-md-4 col-xl-3 btn-primary mt-3 mx-auto text-capitalize" onClick={proceeedCheckout}>Proceed for Checkout</button>
                </div>}
            </div >
        </>
    );
};

export default ClientCart;
