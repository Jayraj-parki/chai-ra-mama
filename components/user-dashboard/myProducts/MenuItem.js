"use client"
import { useEffect, useState } from 'react'

import Image from 'next/image';;

const MenuItem = ({ val, addProductToMyList }) => {

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity(Math.max(quantity - 1, 0));
  };

  const handleIncrement = () => {
    setQuantity(Math.max(quantity + 1, 0));
  };

  const saveData = (_id, quantity) => {
    addProductToMyList(_id, quantity);
    setQuantity(1)
  }

  return (
    <>
      <tr className=''>
        <td className='align-middle' >{val?.clientMenuName}</td>
        <td className='align-middle'> <Image onClick={() => setModal({ active: true, image: val?.clientMenuImage || "/assets/images/1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.clientMenuImage || "/assets/images/1.png"} alt="..." /></td>
        <td className='align-middle' >{val?.clientMenuPrice}</td>
        <td className='text-center align-middle'>
          <div className="row col-12 mx-auto input-group mb-3">
            <button className="col-auto btn btn-secondary" type="button" onClick={() => handleDecrement()}>-</button>
            <input
              type="number"
              className="form-control col-auto shadow-none outline-none "
              id={`quantity-${val?._id}`}
              value={quantity}
              min={0}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className="col-auto btn btn-secondary" type="button" onClick={() => handleIncrement()}>+</button>
          </div>
        </td>
        <td className='text-center align-middle'>
          <button onClick={() => saveData(val?._id, quantity)} className="btn btn-primary" type="button" >Save</button>
        </td>
      </tr>
    </>
  )
}

export default MenuItem