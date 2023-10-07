
import style from "./bestCoffee.module.scss"
import Image from 'next/image'
const BestCoffee = ({ props }) => {
    return (
        <>
            <div className={style.container + " container-fluid m-0 mb-5 p-0"}>
                <div className={style.bestCoffee + " flex-row d-flex justify-content-center flex-column mx-auto m-0 p-0  "}>
                    <div className={style.imageContainer + "   row col-12 my-0  mx-auto p-0  "}>
                        <Image className={style.bgImg + " d-block  m-0 p-0 rounded "} width={100} height={100} objectFit="cover" src={props?.image} alt="..." />
                    </div>
                    <div className={style.content + " col-xl-10 mt-4 mt-lg-0 d-flex justify-content-center align-items-center   px-4 px-xl-0 mx-auto h-100 "}>
                        <div className={style.card + " row shadow-lg   col-12 col-lg-9 col-xl-10 col-xxl-8 d-flex justify-content-center mx-auto ms-xl-auto h-auto rounded-3 p-0 p-lg-4 py-5 "}>
                            <div className={" col-11  p-0 mt-0 "}>
                                <h1 className={style.heading + " m-0 p-0 h1 my-4 fw-bold text-center text-lg-start text-black"}>{props?.heading}</h1>
                                {
                                    props?.list?.map((val)=>{
                                        return (
                                            <p key={val} className={style.text + ' my-4 p-0'}>{val}</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestCoffee