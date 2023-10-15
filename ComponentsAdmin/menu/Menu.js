"use client"
import { useState } from 'react'
import style from "./menu.module.scss"
import WidgetsIcon from '@mui/icons-material/Widgets';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal from '../imageModal/ImageModal';
import MenuEdit from '../menuEdit/MenuEdit';
import MenuAdd from '../menuAdd/MenuAdd';
const Menu = () => {
  const [modal, setModal] = useState({
    active: false,
    image: "",
  })
  const [editData, setEditData] = useState({
    active: false,
    heading: "",
    image: "",
  })
  const [addData, setAddData] = useState(false)
  return (

    <div className={style.menu + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <WidgetsIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Menu</h3>
        </div>
        <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Menu</button>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />
      {/* image modal */}
      <ImageModal modal={modal} setModal={setModal} />
      {/* edit data modal */}
      <MenuEdit editData={editData} setEditData={setEditData}/>
      {/* Add data modal  */}
      <MenuAdd addData={addData} setAddData={setAddData} />

      {/* Data Table */}
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Heading</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Images</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Add sub menu</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            <tr className=''>
              <td className='align-middle' >1</td>
              <td className='align-middle' >Tea</td>
              <td className='align-middle'> <Image onClick={() => setModal({ active: true, image: "/assets/images/g1.png" })}  className="rounded " width={250} height={200} objectFit="cover" src={"/assets/images/g1.png"} alt="..." /></td>
              <td className='text-center align-middle'>
                <Link href="./menu/submenu/12345" className='btn btn-secondary text-decoration-none mx-2  text-capitalize'>Add sub menu</Link>
              </td>
              <td className='text-center align-middle'>
                <button onClick={() => setEditData({ active: true, heading: "heading", image: "/assets/images/g1.png" })}   className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                <button className='btn btn-danger text-decoration-none m-2'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Menu