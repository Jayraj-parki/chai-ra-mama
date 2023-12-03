"use client"
import { useEffect, useRef, useState } from "react";
import style from "./subMenuEdit.module.scss"
import { useSubMenuContext } from "@/app/admin/menu/submenu/[id]/page";
import { updateSubMenuData } from "@/services/updateSubMenuData";
import Image from "next/image"
import PopUp from "../PopUp/PopUp";

const SubMenuEdit = ({ editData, setEditData }) => {
  const { helper } = useSubMenuContext()
  const [itemName, setItemName] = useState()
  const [itemPrice, setItemPrice] = useState()
  const [itemImage, setItemImage] = useState()
  const [_id, setId] = useState("")
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const imageRef = useRef()
  const updateData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Sending update request to Admin" })
    await updateSubMenuData({ _id, itemName, itemImage, itemPrice, helper, setEditData, clearForm ,setAlert})
  }
  const clearForm = () => {
    setItemPrice("")
    setItemName("")
    setItemImage("")
    imageRef.current.value = ""
  }
  useEffect(() => {
    clearForm()
    setItemName(editData?.title)
    setItemPrice(editData?.price)
    setItemImage(editData?.image)
    setId(editData?._id)
  }, [editData])
  return (
    <>
      <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
      <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => setEditData({ active: false, heading: "", price: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div>
              <div className={' container-fluid my-4  '}>
                <div className={style.subMenuEdit + 'row col-12 col-lg-10 shadow rounded-4  p-4 mx-auto'}>
                  <div className={style.header + ' row col-12 mx-auto'}>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Sub Menu</h3>

                  </div>
                  <hr />
                  <div className='row col-12 mx-auto mt-2'>
                    <div className=''>
                      <div className={" mb-4 "}>
                        <label className="form-label">Item Name</label>
                        <input autocomplete="off" value={itemName} onChange={(e) => setItemName(e.target?.value)} name="itemName" type="text" className="form-control" placeholder='write something here' />

                      </div>
                      <div className={" mb-4 "}>
                        <label className="form-label">Item Price</label>
                        <input autocomplete="off" value={itemPrice} onChange={(e) => setItemPrice(e.target?.value)} name="itemPrice" type="text" className="form-control" placeholder='write something here' />
                      </div>
                      <div className="mb-4 ">
                        <label className="form-label text-capitalize">add Image</label>
                        <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof itemImage === "string" && itemImage?.includes("http") ? itemImage : itemImage != null && itemImage instanceof File ? URL.createObjectURL(itemImage) : "/assets/images/1.png"} hidden={itemImage ? false : true} alt="..." />
                        <input autocomplete="off" onChange={(e) => setItemImage(e.target?.files[0])} ref={imageRef} type="file" accept="image/*" className="form-control" />
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
              <button onClick={() => setEditData({ active: false, heading: "", image: "", content: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubMenuEdit