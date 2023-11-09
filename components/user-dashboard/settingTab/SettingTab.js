"use client"
import { useState } from "react";
import style from "./settingTab.module.scss"
import { changeLocalUserPassword } from "@/services/localUser/changeLocalUserPassword";
import { useAuth } from "@/app/layout";
const SettingTab = () => {
    const {userCred}=useAuth()
    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmNewPassword, setConfirmNewPassword] = useState()
    const ChangePasswordHandler = async () => {
        await changeLocalUserPassword({ currentPassword,newPassword,confirmNewPassword,userCred})
        setCurrentPassword("")
        setNewPassword("")
        setConfirmNewPassword("")
    }
    return (
        <div className={style.setting + ' container-fluid my-4  shadow rounded-4 p-4'}>
            <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
                <div className='col-auto  d-flex flex-row justify-content-start '>
                    <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Site Details</h3>
                </div>
            </div>
            <hr />
            <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
                <div className='col-md-12 col-lg-8 col-xxl-6'>
                    <table className=" table table-borderless text-capitalize ">
                        <tbody>
                            <tr className=''>
                                <td className='align-middle' >Current Password</td>
                                <td className='align-middle' ><input autocomplete="off" value={currentPassword} onChange={(e) => setCurrentPassword(e.target?.value)} name="currentPassword" type="password" className="form-control shadow-none " placeholder='Write current password' />
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='align-middle' >New Password</td>
                                <td className='align-middle' ><input autocomplete="off" value={newPassword} onChange={(e) => setNewPassword(e.target?.value)} name="newPassword" type="password" className="form-control shadow-none " placeholder='Write new password' />
                                </td>
                            </tr>
                            <tr className=''>
                                <td className='align-middle' >Confirm new Password</td>
                                <td className='align-middle' ><input autocomplete="off" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target?.value)} name="confirmNewPassword" type="password" className="form-control shadow-none " placeholder='confirm new password' />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className='col-12'>
                    <button onClick={ChangePasswordHandler} type="submit" className="btn btn-primary d-flex col-auto px-4 py-2 mx-auto text-center justify-content-center text-capitalize">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default SettingTab;
