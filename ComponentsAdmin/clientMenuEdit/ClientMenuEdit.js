"use client"
import { useEffect, useRef, useState } from "react";
import style from "./clientMenuEdit.module.scss"
import Image from 'next/image';
import PopUp from "../PopUp/PopUp";
import { useClientMenuContext } from "@/app/admin/client-menu/page";
import { updateClientMenuData } from "@/services/updateClientMenuData";

const ClientMenuEdit = ({ editData, setEditData }) => {
  const { helper } = useClientMenuContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [clientMenuName, setClientMenuName] = useState();
  const [clientMenuImage, setClientMenuImage] = useState();
  const [clientMenuPrice, setClientMenuPrice] = useState();
  const [_id, setId] = useState("")
  const imageRef = useRef()

  const updateData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Sending update request to Admin" })
    await updateClientMenuData({ _id, clientMenuName, clientMenuImage, clientMenuPrice, helper, setEditData, clearForm, setAlert })
  }
  const clearForm = () => {
    imageRef.current.value = ""
    setClientMenuName("")
    setClientMenuImage("")
    setClientMenuPrice("")
  }
  useEffect(() => {
    clearForm()
    setClientMenuName(editData?.itemName)
    setClientMenuImage(editData?.itemImage)
    setClientMenuPrice(editData?.itemPrice)
    setId(editData?._id)
  }, [editData])
  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
      <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => setEditData({  active: false, _id: "", itemName: "", itemPrice: "",itemImage:"" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body  d-flex justify-content-center align-items-center">

              <div className={' container-fluid my-4  '}>
                <div className={style.clientMenuEdit + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                  <div className={style.header + ' row col-12 mx-auto'}>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Menu Item</h3>
                  </div>
                  <hr />
                  <div className='row col-12 mx-auto mt-2'>
                    <div className=''>
                      <div className="mb-4">
                        <label className="form-label">Edit Item Name</label>
                        <input autocomplete="off" value={clientMenuName} onChange={(e) => setClientMenuName(e.target?.value)} type="text" className="form-control" placeholder='Enter title here' />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Edit Item Price</label>
                        <input autocomplete="off" value={clientMenuPrice} onChange={(e) => setClientMenuPrice(e.target?.value)} type="number" className="form-control" placeholder='Enter title here' />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Edit Item Image</label>
                        <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof clientMenuImage === "string" && clientMenuImage?.includes("http") ? clientMenuImage : clientMenuImage != null && clientMenuImage instanceof File ? URL.createObjectURL(clientMenuImage) : "/assets/images/1.png"} hidden={clientMenuImage ? false : true} alt="..." />
                        <input autocomplete="off" onChange={(e) => setClientMenuImage(e.target?.files[0])} ref={imageRef} type="file" accept="image/*" className="form-control" />
                      </div>
                      <div className='row col-12 '>
                        <button onClick={clearForm} type="reset" className="btn btn-dark d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">reset</button>
                        <button onClick={updateData} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-2 text-center justify-content-center text-capitalize">update</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div>
            <div className="modal-footer">
              <button onClick={() => setEditData({  active: false, _id: "", itemName: "", itemPrice: "",itemImage:"" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientMenuEdit