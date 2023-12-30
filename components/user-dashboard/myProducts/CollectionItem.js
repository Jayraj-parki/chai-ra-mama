"use client"
import { useEffect, useState } from 'react'

import Image from 'next/image';import { Button } from '@mui/material';
import { updateClientMenuQuantity } from '@/services/updateClientMenuQuantity';
;

const CollectionItem = ({ val, removeFromList }) => {

  const [quantity, setQuantity] = useState(0);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const handleQuanity = (value) => {
    if (/^\d+$/.test(value)) {
      setQuantity(parseInt(value, 10));
    }
    else {
      setQuantity(0)
    }
  }
  const removeData = (_id) => {
    removeFromList(_id);
  }
  const filteredData=(value)=>{
    let newValue=value == NaN ? 0 : parseInt(value, 10)
    newValue = isNaN(newValue) ? 0 : newValue
    return newValue
  }
  const addQuantity = async(_id) => {
    let a = filteredData(quantity)
    let b = filteredData(availableQuantity)
    const add=a + b
    setAvailableQuantity(add)
    setQuantity(0)
    await updateClientMenuQuantity({ _id, quantity:add})
  }
  const minusQuantity =async (_id) => {
    let a = filteredData(quantity)
    let b = filteredData(availableQuantity)
    let minus=b-a
    minus=minus<0?0:minus
    setAvailableQuantity(minus)
    setQuantity(0)
    await updateClientMenuQuantity({ _id, quantity:minus})
  }
  useEffect(() => {
    setAvailableQuantity(val?.quantity)
  }, [])
  return (
    <>
      <tr className=''>
        <td className='align-middle' >{val?.clientMenuName}</td>
        <td className='align-middle'> <Image onClick={() => setModal({ active: true, image: val?.clientMenuImage || "/assets/images/1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.clientMenuImage || "/assets/images/1.png"} alt="..." /></td>
        <td className='align-middle' >{val?.clientMenuPrice}</td>
        <td className='align-middle' >{availableQuantity}</td>
        <td className='text-center align-middle'>
          <div className="row col-12 mx-auto input-group mb-1">
            <input
              type="number"
              className="form-control col-12 shadow-none outline-1  "
              id={`quantity-${val?._id}`}
              value={quantity}
              onChange={(e) => handleQuanity(e.target.value)}
            />
          </div>
          <div className="row col-12 mx-auto input-group mb-3 d-flex justify-content-center">
            <Button onClick={() => minusQuantity(val?._id)} className="col-auto m-2 text-light bg-secondary rounded" type="button" >Minus</Button>
            <Button onClick={() => addQuantity(val?._id)} className="col-auto m-2 text-light bg-success rounded" type="button" >Add</Button>
          </div>
        </td>
        <td className='text-center align-middle'>
          <button onClick={() => removeData(val?._id)} className="btn btn-danger mx-2" type="button" >Delete</button>
        </td>
      </tr>
    </>
  )
}

export default CollectionItem