"use client"
import style from "./siteSetting.module.scss"
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LinkIcon from '@mui/icons-material/Link';
import TagIcon from '@mui/icons-material/Tag';
import UploadIcon from '@mui/icons-material/Upload';
import LockResetIcon from '@mui/icons-material/LockReset';
import LoginIcon from '@mui/icons-material/Login';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Link from 'next/link';
import HistoryIcon from '@mui/icons-material/History';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useAuth } from "@/app/layout";
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
const SiteSetting = () => {
    const { isAdminAuthorized } = useAuth()
    return (
        <>
            <div className={style.siteSetting + ' container-fluid my-5  shadow rounded-4 p-4'}>
                <div className={style.header + ' row col-12 mx-auto'}>
                    <SettingsSuggestIcon className={style.icon + ' col-auto my-auto p-0 '} />
                    <h3 className={style.heading + ' fw-bold col-auto my-auto'}>Site Setting</h3>
                </div>
                <hr />
                <div className='row col-12 mx-auto  px-2 px-lg-3'>
                    <Link href="./change-password" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                        <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                            <div className={style.iconContainer5 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><LockResetIcon className={style.icon} /></div>
                            <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Change Password</p></div>
                        </div>
                    </Link>
                    <Link href="./pagewise-tags" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                        <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                            <div className={style.iconContainer3 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><TagIcon className={style.icon} /></div>
                            <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Pagewise SEO Tags</p></div>
                        </div>
                    </Link>
                    <Link href="./site-details" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                        <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                            <div className={style.iconContainer1 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><SettingsApplicationsIcon className={style.icon} /></div>
                            <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Site Details</p></div>
                        </div>
                    </Link>
                    <Link href="./request-history" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                        <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                            <div className={style.iconContainer9 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><HistoryIcon className={style.icon} /></div>
                            <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Staff Request History</p></div>
                        </div>
                    </Link>


                    <Link href="./links-and-tags" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                        <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                            <div className={style.iconContainer2 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><LinkIcon className={style.icon} /></div>
                            <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Social Links & SEO Tags</p></div>
                        </div>
                    </Link>

                </div>
            </div>
            {isAdminAuthorized &&
                <div className={style.siteSetting + ' container-fluid my-5  shadow rounded-4 p-4'}>
                    <div className={style.header + ' row col-12 mx-auto'}>
                        <SettingsSuggestIcon className={style.icon + ' col-auto my-auto p-0 '} />
                        <h3 className={style.heading + ' fw-bold col-auto my-auto'}>User Tracking</h3>
                    </div>
                    <hr />
                    <div className='row col-12 mx-auto  px-2 px-lg-3'>
                        {isAdminAuthorized &&
                            <>
                                <Link href="./client-approval" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                                        <div className={style.iconContainer10 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><DoneAllIcon className={style.icon} /></div>
                                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'>Client Approval request</p></div>
                                    </div>
                                </Link>
                                <Link href="./site-logs" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                                        <div className={style.iconContainer6 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><LoginIcon className={style.icon} /></div>
                                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'> Site Logs</p></div>
                                    </div>
                                </Link>
                                <Link href="./approve-account" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                                        <div className={style.iconContainer7 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><HowToRegIcon className={style.icon} /></div>
                                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'>Approve Staff account</p></div>
                                    </div>
                                </Link>
                                <Link href="./approved-users" className={style.item + '  col-12 col-md-6 col-lg-4 col-xl-3 my-2 d-flex p-0 '}>
                                    <div className='row col-12 d-flex   p-0 flex-row justify-content-start'>
                                        <div className={style.iconContainer8 + " " + style.iconContainer + ' col-2  d-flex justify-content-center align-items-center'}><VerifiedUserIcon className={style.icon} /></div>
                                        <div className='col-8 d-flex flex-wrap justify-content-start align-items-center '><p className='h5  my-auto text-wrap text-capitalize'>Verified staff account</p></div>
                                    </div>
                                </Link>

                            </>}



                    </div>
                </div>
            }
        </>
    )
}

export default SiteSetting