"use client"
import style from "./subMenuAdd.module.scss"
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from "@/utils/ReactTextEditor";
import { useState } from "react";

const SubMenuAdd = ({ addData, setAddData }) => {
  const [itemName, setItemName] = useState()
  const [itemPrice, setItemPrice] = useState()

  return (
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
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={itemName} onChange={(value) => setItemName(value)} formats={formats}
                          placeholder="Write something..." />
                      )}
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Item Price</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={itemPrice} onChange={(value) => setItemPrice(value)} formats={formats}
                          placeholder="Write something..." />
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">submit</button>
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
  )
}

export default SubMenuAdd