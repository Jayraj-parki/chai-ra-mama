"use client"
import { useEffect, useState } from "react";
import style from "./pagewiseSeoTagsEdit.module.scss"

const PagewiseSeoTagsEdit = ({ editData, setEditData }) => {
  const [pageTitle, setPageTitle] = useState()
  const [pageMetaTag, setPageMetaTag] = useState()
  const [pageMetaKeyword, setPageMetaKeyword] = useState()
  const [pageMetaDescription, setPageMetaDescription] = useState()
 

  useEffect(() => {
    setPageTitle(editData?.title)
    setPageMetaTag(editData?.metaTag)
    setPageMetaKeyword(editData?.metaKeyword)
    setPageMetaDescription(editData?.metaDescription)
  }, [editData])
  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false, heading: "", image: "", content: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body  d-flex justify-content-center align-items-center">

            <div className={' container-fluid my-4 '}>
              <div className={style.pagewiseSeoTagsEdit + 'row col-12 col-lg-10  shadow rounded-4   p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>{"Edit Seo tags"}</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-5'>
                  <div className="text-capitalize">
                    <div className="mb-4">
                      <label  className="form-label">Page Name</label>
                      <input  autocomplete="off"   onChange={(e) => setPageTitle(e.target.value)} value={pageTitle} name="pageTitle" type="text" className="form-control" placeholder='write something here...' />
                    </div>
                    <div className="mb-4">
                      <label  className="form-label">meta title tags</label>
                      <textarea onChange={(e) => setPageMetaTag(e.target.value)} value={pageMetaTag} name="pageMetaTag" type="text" className="form-control" placeholder='write something here...' ></textarea>
                    </div>
                    <div className="mb-4">
                      <label  className="form-label">meta keywords</label>
                      <input  autocomplete="off"   onChange={(e) => setPageMetaKeyword(e.target.value)} value={pageMetaKeyword} name="pageMetaKeyword" type="text" className="form-control" placeholder='write something here...' ></input>
                    </div>
                    <div className="mb-4">
                      <label  className="form-label">meta description</label>
                      <input  autocomplete="off"   onChange={(e) => setPageMetaDescription(e.target.value)} value={pageMetaDescription} name="pageMetaDescription" type="text" className="form-control" placeholder='write something here...' ></input>
                    </div>
                   
                    
                    <button type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">Update</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => setEditData({ active: false, heading: "", image: "", content: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PagewiseSeoTagsEdit