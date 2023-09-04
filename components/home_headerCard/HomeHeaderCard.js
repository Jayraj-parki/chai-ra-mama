"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from "./homeHeaderCard.module.scss"
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

function HomeHeaderCard() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        try {
            const data = require("@/data/cardData.json")
            setCards(data)
            // console.log(cards)
        }
        catch (e) {

        }
    }, [])
    return (
        <div className="container-fluid">
            <div className="row  col-10 mx-auto d-flex justify-content-around ">
                {
                    cards.map((val) => {
                        return (<div key={val.title + val.description} className={style.homeCard + "  card col-3 d-flex justify-content-center align-items-center m-2 border-0 shadow-lg p-4"}>
                            {/* <FreeBreakfastIcon className={style.icon} /> */}
                            <div className={style.icon + " col-auto px-2 mx-auto my-3  "}>
                                <Image className={style.bgImg + " d-block w-100 m-0 p-0  "} width={100} height={100} objectFit="cover" src={"/assets/images/coffee.png"} alt="..." />
                            </div>
                            <div className="card-body">
                                <h5 className={style.cardTitle + " card-title text-center"}>{val.title}</h5>
                                <p className={style.cardText + " card-text text-center"}>{val.description}</p>
                            </div>
                        </div>)

                    })
                }
            </div>
        </div>

    )
}

export default HomeHeaderCard