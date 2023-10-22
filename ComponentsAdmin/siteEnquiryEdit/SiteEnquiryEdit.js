"use client"
import { useEffect, useState } from "react";
import style from "./siteEnquiryEdit.module.scss"
import { useSiteEnquiryContext } from "@/app/admin/site-enquiries/page";
import { updateSiteEnquiryData } from "@/services/updateSiteEnquiryData";

const SiteEnquiryEdit = ({ editData, setEditData }) => {
  const { helper } = useSiteEnquiryContext()
  const [contactName, setContactName] = useState()
  const [contactEmail, setContactEmail] = useState()
  const [contactPhone, setContactPhone] = useState()
  const [_id, setId] = useState("")
  const updateData = async () => {
    await updateSiteEnquiryData({ _id, contactEmail, contactName, contactPhone, helper, setEditData, clearForm })
  }
  const clearForm = () => {
    setContactEmail("")
    setContactName("")
    setContactPhone("")
  }
  useEffect(() => {
    clearForm()
    setContactName(editData?.name)
    setContactEmail(editData?.email)
    setContactPhone(editData?.phone)
    setId(editData?._id)
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
                      <input autocomplete="off" value={contactName} onChange={(e) => setContactName(e.target?.value)} name="contactName" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Contact Email</label>
                      <input autocomplete="off" value={contactEmail} onChange={(e) => setContactEmail(e.target?.value)} name="contactEmail" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Contact Phone</label>
                      <input autocomplete="off" value={contactPhone} onChange={(e) => setContactPhone(e.target?.value)} name="contactPhone" type="text" className="form-control" placeholder='write something here' />
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
            <button onClick={() => setEditData({ active: false, heading: "", image: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SiteEnquiryEdit