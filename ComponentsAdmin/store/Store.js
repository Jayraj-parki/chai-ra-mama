"use client"
import { useState } from 'react'
import style from "./store.module.scss"
import StoreIcon from '@mui/icons-material/Store';
import Image from 'next/image';
import Link from 'next/link';
import EditStore from '../editStore/EditStore';
import AddStore from '../addStore/AddStore';
const Store = () => {
  const [editData, setEditData] = useState({
    active: false,
    heading: "",
    phone: "",
  })
  const [addData,setAddData]=useState(false)
  return (

    <div className={style.store + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <StoreIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Add Store</h3>
        </div>
        <button onClick={()=>setAddData(true)}  className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add New Store</button>
        <Link href="../" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />
        {/* edit data model */}
      <EditStore editData={editData} setEditData={setEditData} heading={editData?.heading} phone={editData?.phone} />
      {/* Add data modal  */}
      <AddStore addData={addData} setAddData={setAddData}/>

      {/* Data Table */}
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize  ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Heading</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Phone Number</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            <tr className=''>
              <td className='align-middle' >1</td>
              <td className='align-middle' >1</td>
              <td className='align-middle'> 90323294892</td>
              <td className='text-center align-middle'>
                <button onClick={() => setEditData({ active: true, heading: "heading", phone:"phones" })} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                <button className='btn btn-danger text-decoration-none mx-2'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Store