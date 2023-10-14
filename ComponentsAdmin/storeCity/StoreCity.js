"use client"
import { useState } from 'react'
import style from "./storeCity.module.scss"
import StoreIcon from '@mui/icons-material/Store';
import Image from 'next/image';
import Link from 'next/link';
import StoreEditCity from '../storeEditCity/StoreEditCity';
import StoreAddCity from '../storeAddCity/StoreAddCity';
const StoreCity = () => {
  const [editData, setEditData] = useState({
    active: false,
    city: "",
  })
  const [addData,setAddData]=useState(false)
  return (

    <div className={style.storeCity + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <StoreIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Store</h3>
        </div>
        <button onClick={()=>setAddData(true)}  className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Store City</button>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />
     
      {/* edit data model */}
      <StoreEditCity editData={editData} setEditData={setEditData} />
      {/* Add data modal  */}
      <StoreAddCity addData={addData} setAddData={setAddData}/>

      {/* Data Table */}
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Store city</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Add Store</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            <tr className=''>
              <td className='align-middle' >1</td>
              <td className='align-middle' >Mumbai</td>
              <td className='text-center align-middle'>
                <Link href="./store/add-store/12345" className='btn btn-secondary text-decoration-none mx-2  text-capitalize'>Add Store</Link>
              </td>
              <td className='text-center align-middle'>
                <button onClick={() => setEditData({ active: true, city: "city" })}   className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                <button className='btn btn-danger text-decoration-none mx-2'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StoreCity