"use client"
import { useEffect, useState } from "react";
import style from "./franchiseFaqEdit.module.scss"
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from "@/utils/ReactTextEditor";

const FranchiseFaqEdit = ({ editData, setEditData }) => {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();
  useEffect(() => {
    if (editData) {
      setAnswer(editData?.answer || '')
      setQuestion(editData?.question||"")
    }
  }, [editData]);
  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false, question: "", answer: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body  d-flex justify-content-center align-items-center">

            <div className={' container-fluid my-4  '}>
              <div className={style.franchiseFaqEdit + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Franchise Question</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div className=''>
                    <div className={" mb-4 "}>
                      <label className="form-label">Question</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={question} onChange={(value) => setQuestion(value)} formats={formats}
                          placeholder="Write something..." />
                      )}
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Answer</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={answer} onChange={(value) => setAnswer(value)} formats={formats}
                          placeholder="Write something..." />
                      )}
                    </div>
                    <button type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">Submit</button>
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

export default FranchiseFaqEdit