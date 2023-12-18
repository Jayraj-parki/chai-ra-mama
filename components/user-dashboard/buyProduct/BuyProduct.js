"use client"
import style from "./buyProduct.module.scss"
import Image from 'next/image'
import { useEffect, useState } from "react";
import { getDataService } from "@/services/getDataService";
import PopUp from "@/ComponentsAdmin/PopUp/PopUp";
import { useAuth } from "@/app/layout";
import { removeFromClientCart } from "@/services/localUser/removeFromClientCart";
import { AddToClientCart } from "@/services/localUser/AddToClientCart";
import { getClientCartProduct } from "@/services/localUser/getClientCartProduct";
import { useClientDashboardContext } from "@/components/dashboard/Dashboard";
const BuyProduct = () => {
    const {clientMenu, helper} = useClientDashboardContext()
    const [clientCartProduct, setClientCartProduct] = useState()
    
    const { userCred, userRole, getCountOfAddedClientCart } = useAuth()
   const [cartButton, setCartButton] = useState(true)
    const [cart, setCart] = useState([]);
    const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })

    const handleCartAction = async (product) => {
        setCartButton(product?.productId)
        
        const isProductInCart = cart?.find(item => item?.productId === product?.productId);
        if (isProductInCart) {
            const updatedCart = cart?.filter(item => item?.productId !== product?.productId);
            const res = await removeFromClientCart({ uId: isProductInCart?.uId, setAlert })
            if (!res) setAlert({ modalActive: true, workStatus: "failed", message: "Oops! Something went wrong" })
            else {
                setCart(updatedCart);
                getCountOfAddedClientCart()
            }
        } else {
            const uId = await AddToClientCart({ userCred, productId: product?.productId, setAlert })
            if (!uId) {
                setAlert({ modalActive: true, workStatus: "failed", message: "Oops! Something went wrong" })
            }
            else {
                setCart(prevCart => (prevCart ? [...prevCart, { ...product, uId }] : [{ ...product, uId }]));
                getCountOfAddedClientCart()
            }
        }
        setCartButton("")
    };
    const getClientMenuCartData=async()=>{
        await getClientCartProduct({ userCred, setData:setClientCartProduct ,status:"start"})
      }
    useEffect(() => {
        setCart(clientCartProduct?.map((val) => ({ productId: val?.productId, uId: val?._id })))
    }, [clientCartProduct])
    useEffect(() => {
        getClientMenuCartData()
    }, [])
    return (
        <>
            <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
            <div className={style.buyProduct + ' container-fluid m-0 p-0 '}>
                <div className='row col-12 mx-auto  d-flex  my-3'>
                    <button onClick={() => helper()} className={style.refresh + " col-auto text-capitalize px-4 ms-auto btn btn-secondary shadow-none"}>Refresh</button>
                </div>
                <div className='row col-12 mx-auto d-flex justify-content-between my-3'>
                    {
                        clientMenu?.map((val) => {
                            return (

                                <div key={val._id + "all"} className={style.itemCard + "  m-auto col-md-10 col-lg-6 col-xl-3  p-0 d-flex flex-column justify-content-center align-items-center my-4 p-0  "} >
                                    <div className={style.cardImage + " row col-12 m-0  p-0 d-flex justify-content-center align-items-center my-auto"}>
                                        <Image className="m-0 p-0 rounded-pill border" src={val?.clientMenuImage} width={300} height={300} objectFit='cover' alt="menu item" />
                                    </div>
                                    <div className={style.cardBody + " row  col-12 r border px-4 py-2 rounded shadow d-flex justify-content-around align-items-center flex-column my-auto"}>
                                        <div className=" col-12 mx-auto py-2  mb-auto justify-content-between align-items-center">
                                            <h3 className={style.itemName + " col-auto  text-center my-auto fw-bold h5 py-2 ps-2"}>{val?.clientMenuName}</h3>
                                        </div>
                                        <div className=" col-12 mt-auto">
                                            <h6 className={style.price + " col-auto py-2 px-0 fw-bold text-center my-auto "}>RS. {val?.clientMenuPrice}/-</h6>
                                            {cartButton != val?._id ?
                                                <button onClick={() => handleCartAction({ productId: val?._id })} className={style.addToCart + " row btn outline-none border-0 col-12 py-2 px-3 px-md-5 fw-bold text-center my-auto mx-auto"} >{cart?.some(item => item?.productId === val?._id) ? 'Remove from Cart' : 'Add to Cart'}</button>
                                                : "Proccesing"
                                            }
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>

            </div>
        </>
    )
}

export default BuyProduct