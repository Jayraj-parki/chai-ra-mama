import { useState, useEffect, useRef } from "react";
import style from "./clientMenuAdd.module.scss"
import Image from 'next/image';
import PopUp from "../PopUp/PopUp";
import { useClientMenuContext } from "@/app/admin/client-menu/page";
import { AddClientMenu } from "@/services/AddClientMenu";

const ClientMenuAdd = ({ addData, setAddData }) => {
  const { helper } = useClientMenuContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [clientMenuName, setClientMenuName] = useState();
  const [clientMenuImage, setClientMenuImage] = useState();
  const [clientMenuPrice, setClientMenuPrice] = useState();
  const imageRef = useRef();
  const AddData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
    await AddClientMenu({ clientMenuName, clientMenuImage, clientMenuPrice, helper, setAddData, clearForm, setAlert })
  }
  const clearForm = () => {
    imageRef.current.value = ""
    setClientMenuName("")
    setClientMenuImage("")
    setClientMenuPrice("")
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
                <div className={style.clientMenuAdd + ' row col-12 col-lg-10 shadow rounded-4 p-4  mx-auto'}>
                  <div className={style.header + ' row col-12 mx-auto'}>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto pb-2 text-capitalize'}>Add Menu Item</h3>
                  </div>
                  <hr />
                  <div className='row col-12 mx-auto mt-2'>
                    <div className=''>

                      <div className="mb-4">
                        <label className="form-label"> Item Name</label>
                        <input  autoComplete="off"  value={clientMenuName} onChange={(e) => setClientMenuName(e.target?.value)} type="text" className="form-control" placeholder='Enter title here' />
                      </div>
                      <div className="mb-4">
                        <label className="form-label"> Item Price</label>
                        <input  autoComplete="off"  value={clientMenuPrice} onChange={(e) => setClientMenuPrice(e.target?.value)} type="number" className="form-control" placeholder='Enter title here' />
                      </div>
                      <div className="mb-4">
                        <label className="form-label"> Item Image</label>
                        <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof clientMenuImage === "string" && clientMenuImage?.includes("http") ? clientMenuImage : clientMenuImage != null && clientMenuImage instanceof File ? URL.createObjectURL(clientMenuImage) : "/assets/images/1.png"} hidden={clientMenuImage ? false : true} alt="..." />
                        <input  autoComplete="off"  onChange={(e) => setClientMenuImage(e.target?.files[0])} ref={imageRef} type="file" accept="image/*" className="form-control" />
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

export default ClientMenuAdd