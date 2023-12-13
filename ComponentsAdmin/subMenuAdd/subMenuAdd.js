"use client"
import style from "./subMenuAdd.module.scss"
import Image from "next/image"
import { useEffect, useRef, useState } from "react";
import { useSubMenuContext } from "@/app/admin/menu/submenu/[id]/page";
import { AddSubMenuData } from "@/services/AddSubMenuData";
import PopUp from "../PopUp/PopUp";

const SubMenuAdd = ({ addData, setAddData }) => {
  const { helper, pId } = useSubMenuContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [itemName, setItemName] = useState()
  const [itemPrice, setItemPrice] = useState()
  const [itemImage, setItemImage] = useState()
  const imageRef = useRef()
  const AddData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
    await AddSubMenuData({ parentId: pId, itemName, itemImage, itemPrice, helper, setAddData, clearForm,setAlert })
  }

  const clearForm = () => {
    setItemPrice("")
    setItemName("")
    setItemImage("")
    imageRef.current.value = ""
  }
  useEffect(() => {
    clearForm()
  }, [])
  return (
    <>
      <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />

      <div className={style.modal + ` modal fade ${addData && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={() => setAddData(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body  d-flex justify-content-center align-items-center">

              <div className={' container-fluid my-4  '}>
                <div className={style.subMenuAdd + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                  <div className={style.header + ' row col-12 mx-auto'}>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Add sub Menu</h3>
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
                        <button onClick={AddData} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-2 text-center justify-content-center text-capitalize">submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div >
            </div>
            <div className="modal-footer">
              <button onClick={() => setAddData(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubMenuAdd