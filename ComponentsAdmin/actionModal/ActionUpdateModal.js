import React, { useEffect, useState } from 'react'
import style from "./actionModal.module.scss"
import { updateForceActionData } from '@/services/updateForceActionData'
import PopUp from '../PopUp/PopUp'
import { useStaffRequestContext } from '../adminPages/StaffReqquestPage'
const ActionUpdateModal = ({ actionModal, setActionModal }) => {
    const { helper } = useStaffRequestContext()
    const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
    const [clientKey, setClientKey] = useState()
    const [adminLock, setAdminLock] = useState()
    const [_id, setId] = useState("")
    const clearForm = () => {
        setClientKey("")
        setAdminLock("")
    }
    const handleRequest = async (req = "") => {
        setAlert({ modalActive: true, workStatus: "progress", message: "Please wait..." })
        await updateForceActionData({ _id, clientKey, adminLock, request: req, end_url: "force-approval/update", clearForm, setActionModal, helper ,setAlert})
    }
    useEffect(() => {
        clearForm()
        setClientKey(actionModal?.clientKey)
        setId(actionModal?._id)
    }, [actionModal])
    return (
        <>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <div className={style.modal + ` modal fade ${actionModal?.active && "show d-block"} `} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={() => setActionModal({ active: false, _id: "", clientKey: "" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className={style.form + " modal-body d-flex justify-content-center align-items-center"}>
                            <div className='row col-12 mx-auto mt-2'>
                                <div className=''>
                                    <div className="mb-4">
                                        <label for="editHeading" className="form-label">Client Refrence No.</label>
                                        <input  autoComplete="off"  disabled value={clientKey} type="text" className="form-control" placeholder='write something here' />
                                    </div>
                                    <div className="mb-4">
                                        <label for="editHeading" className="form-label">Admin Refrence No.</label>
                                        <input autocomplete="off" value={adminLock} onChange={(e) => setAdminLock(e.target.value)} type="text" className="form-control" placeholder='Admin Refrence Number' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => handleRequest("reject")} type="button" className="btn btn-danger" data-bs-dismiss="modal">Reject</button>
                            <button onClick={() => handleRequest("approve")} type="button" className="btn btn-success" data-bs-dismiss="modal">Approve</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActionUpdateModal