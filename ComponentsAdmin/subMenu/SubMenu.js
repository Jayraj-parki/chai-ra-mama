"use client"
import { useEffect, useState } from 'react'
import style from "./subMenu.module.scss"
import WidgetsIcon from '@mui/icons-material/Widgets';
import Image from 'next/image';
import Link from 'next/link';
import ImageModal from '../imageModal/ImageModal';
import SubMenuEdit from '../subMenuEdit/SubMenuEdit';
import SubMenuAdd from '../subMenuAdd/subMenuAdd';
import { useSubMenuContext } from '@/app/admin/menu/submenu/[id]/page';
import { DeleteDataService } from '@/services/deleteData';
const SubMenu = () => {
  const { subMenuData, helper } = useSubMenuContext()
  const [modal, setModal] = useState({ active: false, image: "" })
  const [editData, setEditData] = useState({ active: false, _id: "", image: "", title: "", price: "" })
  const [addData, setAddData] = useState(false)
  const deleteData = async (_id) => {
    await DeleteDataService({ _id, helper,end_url:"sub-menu" })
  }
  useEffect(() => {
    helper()
  }, [])
  return (

    <div className={style.subMenu + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <WidgetsIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Sub Menu</h3>
        </div>
        <button onClick={() => setAddData(true)} className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add sub Menu</button>
        <Link href="../" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />
      <ImageModal modal={modal} setModal={setModal} />
      <SubMenuEdit editData={editData} setEditData={setEditData} />
      <SubMenuAdd addData={addData} setAddData={setAddData} />

      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize  ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Title</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Image</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Price</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            {
              subMenuData?.map((val,index) =>
                <tr key={val?.itemName+""+index+""+Math?.random(10000)} className=''>
                  <td className='align-middle' >{index+1}</td>
                  <td className='align-middle' >{val?.itemName}</td>
                  <td className='align-middle'> <Image onClick={() => setModal({ active: true, image: val?.itemImage||"/assets/images/1.png" })} className="rounded " width={250} height={200} objectFit="cover" src={val?.itemImage||"/assets/images/1.png"} alt="..." /></td>
                  <td className='align-middle'> {val?.itemPrice}</td>
                  <td className='text-center align-middle'>
                  <button onClick={() => setEditData({ active: true,_id:val?._id, title: val?.itemName, image: val?.itemImage ,price:val?.itemPrice})} className='btn btn-primary text-decoration-none mx-2  text-capitalize'>Edit</button>
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

export default SubMenu