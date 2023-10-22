"use client"
import { useEffect, useRef, useState } from "react";
import style from "./menuEdit.module.scss"
import Image from 'next/image';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from "@/utils/ReactTextEditor";
import { useMenuContext } from "@/app/admin/menu/page";
import { updateMenuData } from "@/services/updateMenuData";

const MenuEdit = ({ editData, setEditData }) => {
  const { menuData, helper } = useMenuContext()
  const [menuName, setMenuName] = useState()
  const [menuImage, setMenuImage] = useState()
  const [menuContent, setMenuContent] = useState()
  const [products, setProduct] = useState([])
  const [_id, setId] = useState("")
  const imageRef = useRef()
  const updateData = async () => {
    await updateMenuData({ _id, menuName, menuImage, menuContent, helper, setEditData, clearForm })
  }

  const clearForm = () => {
    setMenuContent("")
    setMenuImage("")
    setMenuName("")
    imageRef.current.value = ""
    setProduct(Array.from(new Set(menuData?.map((val) => val?.menuName?.toUpperCase()))))
  }
  useEffect(() => {
    clearForm()
    setMenuName(editData?.title)
    setMenuImage(editData?.image)
    setMenuContent(editData?.content)
    setId(editData?._id)
  }, [editData])
  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false, _id: "", title: "", image: "", content: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div>
            <div className={' container-fluid my-4  '}>
              <div className={style.menuEdit + 'row col-12 col-lg-10 shadow rounded-4 p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Menu</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div className=''>
                    <div className="mb-4">
                      <label className="form-label text-capitalize">Choose an existing title or enter a new one</label>
                      <select class="form-select" value={products.includes(menuName)?menuName:""} onChange={(e) => setMenuName(e.target?.value)}>
                        <option value="" disabled selected>Select Existing Title</option>
                        {
                          products?.map((val, index) => {
                            return (
                              <option key={index + " " + val} value={val}>{val}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                    <div className={" mb-4 "}>
                      <input  autocomplete="off"   value={menuName} onChange={(e) => setMenuName(e.target?.value?.toUpperCase())} name="menuHeading" type="text" className="form-control" placeholder='write something here' />
                    </div>
                    <div className="mb-4 ">
                      <label className="form-label text-capitalize">add Image</label>
                      <Image className={style.image + " rounded w-100 h-100 mb-4"} width={250} height={200} objectFit="cover" src={typeof menuImage === "string" && menuImage?.includes("http") ? menuImage : menuImage != null && menuImage instanceof File ? URL.createObjectURL(menuImage) : "/assets/images/1.png"} hidden={menuImage ? false : true} alt="..." />
                      <input  autocomplete="off"   onChange={(e) => setMenuImage(e.target?.files[0])} ref={imageRef} type="file" accept="image/*" className="form-control" />
                    </div>
                    <div className={" mb-4 "}>
                      <label className="form-label">Content</label>
                      {typeof document !== 'undefined' && (
                        <ReactQuill modules={modules} value={menuContent} onChange={(value) => setMenuContent(value)} formats={formats}
                          placeholder="Write something..." />
                      )}
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
            <button onClick={() => setEditData({ active: false, _id: "", title: "", image: "", content: "" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MenuEdit