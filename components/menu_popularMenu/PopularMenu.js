"use client";
import Image from "next/image";
import style from "./popularMenu.module.scss"
import { useEffect, useState } from "react";
import { useMenuUiContext } from "@/app/menu/page";
const PopularMenu = () => {
    const { menuData, subMenuData } = useMenuUiContext()
    const [activeTab, setActiveTab] = useState("all")
    const [cart, setCart] = useState([]);
    const handleCartAction = (product) => {
        const isProductInCart = cart.some(item => item.id === product.id);
        if (isProductInCart) {
            const updatedCart = cart.filter(item => item.id !== product.id);
            setCart(updatedCart);
        } else {
            setCart([...cart, product]);
        }
    };
    useEffect(() => {
    }, [menuData])
    return (
        <div className={style.popularMenu + " container-fluid  pb-5"}>
            <div className='row col-12 py-5 mx-auto'>
                <div className={" row col-12  d-flex mx-auto mb-5  d-flex justify-content-center "}>
                    <h2 className={style.menu_title + " p-2 px-3 text-center fw-bold text-light text-uppercase text-justify rounded"}>Menu</h2>
                </div>
                <div className={style.heading + " row col-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                    <h1 className=" col-12  fw-bold text-justify text-center text-uppercase">Our Popular Menu</h1>
                </div>
                <div className={style.tabsContainer + " row col-12 d-flex  my-5 d-flex flex-row mx-auto p-0  justify-content-center  "}>
                    <div className="row  col-12 mx-auto d-flex justify-content-center ">
                        <ul className={style.ul_tabs + " border rounded overflow-auto col-lg-10 px-3 flex-nowrap d-flex justify-content-start nav nav-pills mb-3"} id="pills-tab" role="tablist">
                            <li className={` flex-nowrap  nav-item col-auto m-2  `} role="presentation">
                                <button onClick={() => setActiveTab("all")} className={`${activeTab == "all" ? style.active_tab : style.not_active} nav-link ${activeTab == "all" && "active"} `} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={`true   ${activeTab == "all" ? "true" : "false"} `}>All</button>
                            </li>

                            {
                                menuData?.map((val) => {
                                    return (
                                        <li key={val?._id} className={` nav-item col-auto m-2`} role="presentation">
                                            <button onClick={() => setActiveTab(val?._id)} className={`${activeTab == val?._id ? style.active_tab : style.not_active} nav-link text-uppercase ${activeTab == val?._id && "active"} `} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected={`false ${activeTab == val?._id ? "true" : "false"} `}>{val?.menuName}</button>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    <div className={style.menuItems + " row col-xl-11  mx-auto tab-content p-0 p-md-2  my-5"} id="pills-tabContent">

                        <div className={` row col-12 mx-auto d-flex justify-content-center p-0 align-items-center flexwrap   mb-4 tab-pane fade ${activeTab == "all" ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            {subMenuData?.map((val) => {
                                return (
                                    <div key={val._id + "all"} className={style.itemCard + "  m-auto col-md-10 col-lg-6 p-0 d-flex justify-content-center align-items-center my-4 p-0  "} >
                                        <div className={style.cardImage + " col-2 m-0 p-0 d-flex justify-content-center align-items-center my-auto"}>
                                            <Image className="m-0 p-0 rounded-pill" src={val?.itemImage} width={300} height={300} objectFit='cover' alt="menu item" />
                                        </div>
                                        <div className={style.cardBody + "  col-10 border px-4 py-5 rounded shadow d-flex justify-content-around align-items-center flex-column my-auto"}>
                                            <div className="row col-10 mx-auto justify-content-between align-items-center">
                                                <h3 className={style.itemName + " col-auto text-uppercase text-black my-auto fw-bold h5 text-light py-2 px-0"}>{val?.itemName}</h3>
                                                <h6 className={style.price + " col-auto py-2 px-0 fw-bold text-center my-auto "}>RS. {val?.itemPrice}/-</h6>
                                            </div>
                                            <div className="row col-auto ms-auto">
                                                <button onClick={() => handleCartAction({ id: val?._id, name: val?.itemName })} className={style.addToCart + " row btn outline-none border-0 col-12 py-2 px-3 px-md-5 fw-bold text-center my-auto mx-auto"} >{cart?.some(item => item?.id === val?._id) ? 'Remove from Cart' : 'Add to Cart'}</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {
                            menuData?.map((val) => {
                                return (
                                    <div key={val._id + "items"} className={` row col-12 mx-auto d-flex justify-content-center align-items-center flexwrap p-0  mb-4 tab-pane fade ${activeTab == val?._id ? "show active" : "d-none"}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        {subMenuData?.map((item) => {
                                            if (val._id == item?.parentId) {

                                                return (
                                                    <div key={item._id + "" + val._id} className={style.itemCard + "  m-auto col-md-10 col-lg-6 p-0  d-flex justify-content-center align-items-center my-4 p-0  "} >
                                                        <div className={style.cardImage + " col-2 m-0 p-0 d-flex justify-content-center align-items-center my-auto"}>
                                                            <Image className="m-0 p-0 rounded-pill" src={item?.itemImage} width={300} height={300} objectFit='cover' alt="menu item" />
                                                        </div>
                                                        <div className={style.cardBody + "  col-10 border px-4 py-5 rounded shadow d-flex justify-content-around align-items-center flex-column my-auto"}>
                                                            <div className="row col-10 mx-auto justify-content-between align-items-center ">
                                                                <h3 className={style.itemName + " col-auto text-uppercase text-black my-auto fw-bold h5 text-light py-2 px-0"}>{item?.itemName}</h3>
                                                                <h6 className={style.price + " col-auto py-2 px-0 fw-bold text-center my-auto "}>RS. {item?.itemPrice}/-</h6>
                                                            </div>
                                                            <div className="row col-auto ms-auto">
                                                                <button onClick={() => handleCartAction({ id: item?._id, name: item?.itemName })} className={style.addToCart + " row btn outline-none border-0 col-12 py-2 px-3 px-md-5 fw-bold text-center my-auto mx-auto"} >{cart?.some(p => p?.id === item?._id) ? 'Remove from Cart' : 'Add to Cart'}</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            }
                                            else { return }
                                        })}
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* <div className="row  col-12 mx-auto d-flex justify-content-center ">
                        <button className={style.loadmore + " col-auto fw-bold text-light rounded px-5 text-uppercase text-center py-3 outline-none border-0 "}>Load more</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default PopularMenu