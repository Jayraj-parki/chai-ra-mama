"use client"
import { useEffect, useState } from "react";
import style from "./siteEnquiryAdd.module.scss"

const SiteEnquiryAdd = ({ addData, setAddData }) => {
  const [contactName, setContactName] = useState()
  const [contactEmail, setContactEmail] = useState()
  const [contactPhone, setContactPhone] = useState()
  return (
    <div className={style.modal + ` modal fade ${addData && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setAddData(false)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div>
            <div className={' container-fluid my-4  '}>
              <div className={style.siteEnquiryAdd + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Add Contact Details</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div className=''>
                    <div className={" mb-4 "}>
                      <label className="form-label">Contact Name</label>
                      <input value={contactName} onChange={(e) => setContactName(e.target?.value)} name="contactName" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Contact Email</label>
                      <input value={contactEmail} onChange={(e) => setContactEmail(e.target?.value)} name="contactEmail" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Contact Phone</label>
                      <input value={contactPhone} onChange={(e) => setContactPhone(e.target?.value)} name="contactPhone" type="text" className="form-control" placeholder='write something here' />
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

export default SiteEnquiryAdd