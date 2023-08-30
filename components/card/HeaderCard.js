"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import style from "./card.module.scss"
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

function HeaderCard() {
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
                        return (<div key={val.title+val.description} className={style.homeCard + "  card col-3 d-flex justify-content-center align-items-center m-2 border-0 shadow-lg p-4"}>
                                <FreeBreakfastIcon className={style.icon} />
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

export default HeaderCard