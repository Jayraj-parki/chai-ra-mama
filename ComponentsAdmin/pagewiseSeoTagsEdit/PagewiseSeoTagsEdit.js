"use client"
import { useEffect, useState } from "react";
import style from "./pagewiseSeoTagsEdit.module.scss"
import { usePageTagContext } from "@/app/admin/pagewise-tags/page";
import { updatePagewiseTags } from "@/services/updatePagewiseTags";
import PopUp from "../PopUp/PopUp";

const PagewiseSeoTagsEdit = ({ editData, setEditData }) => {

  const { helper } = usePageTagContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [pageId, setPageId] = useState()
  const [metaTitle, setMetaTitle] = useState()
  const [metaKeyword, setMetaKeyword] = useState()
  const [metaDesc, setMetaDesc] = useState()
  const [_id, setId] = useState()
  const clearForm = () => {
    setMetaTitle("")
    setMetaKeyword("")
    setMetaDesc("")
  }
  const updateData = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait" })
    await updatePagewiseTags({ _id, pageId, metaTitle, metaDesc, metaKeyword, helper, setEditData, clearForm ,setAlert})
  }
  useEffect(() => {
    clearForm()
    setPageId(editData?.pId)
    setId(editData?._id)
    setMetaTitle(editData?.title)
    setMetaKeyword(editData?.keyword)
    setMetaDesc(editData?.desc)
  }, [editData])
  return (
    <>
      <PopUp modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />

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
                        <label className="form-label">Page Id</label>
                        <input autocomplete="off" disabled value={pageId} name="pageTitle" type="text" className="form-control" placeholder='write something here...' />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">meta title tags</label>
                        <input onChange={(e) => setMetaTitle(e.target.value)} value={metaTitle} name="pageMetaTag" type="text" className="form-control" placeholder='Page title here' />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">meta keywords</label>
                        <textarea autocomplete="off" onChange={(e) => setMetaKeyword(e.target.value)} value={metaKeyword} name="pageMetaKeyword" type="text" className="form-control" placeholder='meta keyword here' ></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">meta description</label>
                        <textarea autocomplete="off" onChange={(e) => setMetaDesc(e.target.value)} value={metaDesc} name="pageMetaDescription" type="text" className="form-control" placeholder='meta description here' ></textarea>
                      </div>
                      <div className='row col-12 '>
                        <button onClick={clearForm} type="reset" className="btn btn-dark d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">reset</button>
                        <button onClick={updateData} type="submit" className="btn btn-primary d-flex col-auto px-4 ms-2 text-center justify-content-center text-capitalize">update</button>
                      </div>
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
    </>
  )
}

export default PagewiseSeoTagsEdit