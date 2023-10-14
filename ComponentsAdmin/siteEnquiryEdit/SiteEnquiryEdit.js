"use client"
import { useEffect, useState } from "react";
import style from "./siteEnquiryEdit.module.scss"
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from "@/utils/ReactTextEditor";

const SiteEnquiryEdit = ({ editData, setEditData }) => {
  const [contactName, setContactName] = useState()
  const [contactEmail, setContactEmail] = useState()
  const [contactPhone, setContactPhone] = useState()

  useEffect(() => {
    setContactName(editData?.name)
    setContactEmail(editData?.email)
    setContactPhone(editData?.phone)
  }, [editData])
  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false, name: "", email: "", phone: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div>
            <div className={' container-fluid my-4  '}>
              <div className={style.siteEnquiryEdit + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Contact Details</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div className=''>
                    <div className={" mb-4 "}>
                      <label className="form-label">Contact Name</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={contactName} onChange={(value) => setContactName(value)} formats={formats}
                          placeholder="Write something..." />
                      )}
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Contact Email</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={contactEmail} onChange={(value) => setContactEmail(value)} formats={formats}
                          placeholder="Write something..." />
                      )}
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Contact Phone</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={contactPhone} onChange={(value) => setContactPhone(value)} formats={formats}
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
            <button onClick={() => setEditData({ active: false, heading: "", image: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SiteEnquiryEdit