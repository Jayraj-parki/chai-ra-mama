"use client"
import { useEffect, useState } from "react";
import Image from "next/image"
import style from "./clientFeedbackEdit.module.scss"
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from "@/utils/ReactTextEditor";

const ClientFeedbackEdit = ({ editData, setEditData }) => {
  const [clientName,setClientName]=useState("")
  const [clientFeedback,setClientFeedback]=useState("")
  const [image, setImage] = useState("");
  useEffect(() => {
    if (editData) {
      setClientName(editData?.name||"")
      setClientFeedback(editData?.content||"")
      setImage(editData?.image);
    }
  }, [editData]);
  


  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false, name: "", image: "", content: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div>
            <div className={' container-fluid my-4  '}>
              <div className={style.clientFeedbackEdit + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Client Feedback</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div className=''>
                    <div className={" mb-4 "}>
                      <label className="form-label">Client Name</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={clientName} onChange={(value) => setClientName(value)} formats={formats}
                          placeholder="Write something..." />
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Edit Image</label>
                      <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={ "/assets/images/1.png"} alt="..." />
                      <input type="file" accept="image/*" className="form-control" id="editImage2" />
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Client Feedback</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={clientFeedback} onChange={(value) => setClientFeedback(value)}
                          placeholder="Write something..." />
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">update</button>
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
  )
}

export default ClientFeedbackEdit