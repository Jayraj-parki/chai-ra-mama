import React from 'react'
import CoffeeIcon from '@mui/icons-material/Coffee';
import style from "./wcuCard.module.scss"
const WcuCard = () => {
    return (

        <div className={style.container + " container-fluid my-5"}>
            <div className="row  col-12 mx-auto d-flex justify-content-around ">
                <div className={style.wcuCard + "  card col-3 d-flex justify-content-center align-items-center m-2 border-1 py-4"}>
                    <div className={style.iconContainer+" col-auto mx-auto "}>
                        <CoffeeIcon className={style.icon} />
                         <div className={style.circle}></div>
                    </div>
                    <div className="row col-12 col-12 card-body  px-0 ">
                        <h5 className={style.cardTitle + " fw-bold mb-4 card-title text-uppercase text-center"}>tasty coffee recipe</h5>
                        <p className={style.cardText + " card-text text-center"}>
                            Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.
                        </p>
                    </div>
                </div>
                <div className={style.wcuCard + "  card col-3 d-flex justify-content-center align-items-center m-2 border-1 py-4"}>
                    <div className={style.iconContainer}>
                        <CoffeeIcon className={style.icon} />
                         <div className={style.circle}></div>
                    </div>
                    <div className="col-12 card-body  px-0">
                        <h5 className={style.cardTitle + " fw-bold mb-4 card-title text-uppercase text-center"}>tasty coffee recipe</h5>
                        <p className={style.cardText + " card-text text-center"}>
                            Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.
                        </p>
                    </div>
                </div>
                <div className={style.wcuCard + "  card col-3 d-flex justify-content-center align-items-center m-2 border-1 py-4"}>
                    <div className={style.iconContainer}>
                        <CoffeeIcon className={style.icon} />
                         <div className={style.circle}></div>
                    </div>
                    <div className="col-12 card-body  px-0">
                        <h5 className={style.cardTitle + " fw-bold mb-4 card-title text-uppercase text-center"}>tasty coffee recipe</h5>
                        <p className={style.cardText + " card-text text-center"}>
                            Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WcuCard