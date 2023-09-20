import React from 'react'
import style from "./FranchisePartnership.module.scss"
import Image from 'next/image'
const FranchisePartnership = () => {
    return (
        <div className={style.franchisePartnershipDesc + " container-fluid my-5 pb-5"}>
            <div className="row  col-12 mx-auto d-flex justify-content-center align-items-center ">
                <div className={style.franchisePartnership_img + "  col-6 text-center"}>
                    <Image className="  col-12 mx-auto" src={"/assets/images/franchisePartner.png"} height={100} width={100} objectFit="cover" alt="about image" />
                </div>
                <div className='col-5 py-5 '>
                    <div className={" row col-12 d-flex mx-auto mb-4   "}>
                        <h2 className={style.franchisePartnership_title + " p-2 px-3 text-start fw-bold text-light text-uppercase text-justify rounded"}>Partnership</h2>
                    </div>
                    <div className={style.heading + " row col-12 d-flex  mb-3 d-flex mx-auto   d-flex justify-content-center  "}>
                        <h1 className=" col-12  fw-bold text-justify text-uppercase  p-0">Franchise Partnership</h1>
                    </div>
                    <div className={style.franchisePartnership_desc + " col-12 d-flex mb-3   "}>
                        <p className="text-start text-justify">
                            Mauris rhoncus orci in imperdiet placerat. Vestibulum
                            euismod nisl suscipit ligula volutpat, a feugiat urna
                            maximus. Cras massa nibhtincidunt.
                        </p>
                    </div>
                    <div className={style.franchisePartnership_list + " col-12 d-flex p-0 align-items-center  "}>
                        <div className="col-8 ">
                            <input type="email" className=" p-2  lh-lg  border border-1 outline-none form-control shadow-none fw-bold text-capitalize" placeholder="Enter your email id" />
                        </div>
                        <div className="col-auto ms-auto ">
                            <button type="submit" className="row text-uppercase h5 col-12 m-auto d-flex justify-content-center text-light  rounded  border-0 outline-none ">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FranchisePartnership