"use client"
import { useEffect, useState } from "react";
import style from "./subMenuEdit.module.scss"
const SubMenuEdit = ({ heading, price, editData, setEditData }) => {
  const [state, setState] = useState({})
  const handleInput = (event) => {
    const { name, value } = event?.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  useEffect(() => {
    setState({
      subMenuHeading: heading,
      subMenuPrice: price,
    })
  }, [heading])
  return (
    <div className={style.modal + ` modal fade ${editData?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={() => setEditData({ active: false, heading: "", price:"" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div>
            <div className={' container-fluid my-4  '}>
              <div className={style.subMenuEdit + 'row col-12 col-lg-10 shadow rounded-4  p-4 mx-auto'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                  <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Edit Sub Menu</h3>

                </div>
                <hr />
                <div className='row col-12 mx-auto mt-2'>
                  <div className=''>
                    <div className="mb-4 ">
                      <label for="editHeading" className="form-label">Heading</label>
                      <input onChange={(e) => handleInput(e)} value={state?.subMenuHeading} name="subMenuHeading" type="text" className="form-control" id="editHeading" aria-describedby="emailHelp" placeholder='write heading here' />
                    </div>
                    <div className="mb-4 ">
                      <label for="editPrice" className="form-label">price</label>
                      <input onChange={(e) => handleInput(e)} value={state?.subMenuPrice} name="subMenuPrice" type="number" className="form-control" id="editPrice" placeholder='Enter Price of Item' />
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

export default SubMenuEdit