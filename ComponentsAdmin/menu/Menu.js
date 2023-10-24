"use client"
import { useEffect, useState } from 'react'
import style from "./menu.module.scss"
import WidgetsIcon from '@mui/icons-material/Widgets';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal from '../imageModal/ImageModal';
import MenuEdit from '../menuEdit/MenuEdit';
import MenuAdd from '../menuAdd/MenuAdd';
import { useMenuContext } from '@/app/admin/menu/page';
import { DeleteDataService } from '@/services/deleteData';
const Menu = () => {
  const { menuData, helper } = useMenuContext()
  const [modal, setModal] = useState({ active: false, image: "" })
  const [addData, setAddData] = useState(false)
  const [editData, setEditData] = useState({ active: false, _id: "", title: "", image: "", content: "" })

  const deleteData = async (_id) => {
    await DeleteDataService({ _id, helper,end_url:"menu" })
  }
  useEffect(() => {
    helper()
  }, [])
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
      <ImageModal modal={modal} setModal={setModal} />
      <MenuEdit editData={editData} setEditData={setEditData} />
      <MenuAdd addData={addData} setAddData={setAddData} />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Menu Title</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Images</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Content</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Add sub menu</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            {
              menuData?.map((val, index) =>
                <tr key={val?.menuName+""+index+""+Math?.random(10000)} className=''>
                  <td className='align-middle' >{index+1}</td>
                  <td className='align-middle' >{val?.menuName}</td>
                  <td className='align-middle'> <Image onClick={() => setModal({ active: true, image: val?.menuImage||"/assets/images/g1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.menuImage||"/assets/images/g1.png"} alt="..." /></td>
                  <td className='align-middle' dangerouslySetInnerHTML={{__html:val?.menuContent}} ></td>
                  <td className='text-center align-middle'>
                    <Link href={`./menu/submenu/${val?._id}`} className='btn btn-secondary text-decoration-none mx-2  text-capitalize'>Add sub menu</Link>
                  </td>
                  <td className='text-center align-middle'>
                    <button onClick={() => setEditData({ active: true,_id:val?._id, title: val?.menuName, image: val?.menuImage ,content:val?.menuContent})} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
                    <button onClick={()=>deleteData(val?._id)} className='btn btn-danger text-decoration-none m-2'>Delete</button>
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Menu