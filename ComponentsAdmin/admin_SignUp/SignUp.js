"use client"
import { useEffect, useRef, useState } from 'react'
import style from "./signUp.module.scss"
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/layout';
import { adminSignUp } from '@/services/adminSignUp';
import PopUp from '../PopUp/PopUp';
const SignUp = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const { adminCred } = useAuth()
    const router = useRouter()
    const [alert,setAlert]=useState({modalActive:false,workStatus:"",message:""})
    
    const handleSignup = async (e) => {
        e.preventDefault()
        const firstName = firstNameRef.current.value.trim()
        const lastName = lastNameRef.current.value.trim()
        const email = emailRef.current.value.trim()
        const password = passwordRef.current.value.trim()
        const confirmPassword = confirmPasswordRef.current.value.trim()
        const response=await adminSignUp({ firstName, lastName, email, password, confirmPassword,setAlert })
        firstNameRef.current.value = null
        lastNameRef.current.value = null
        emailRef.current.value = null
        passwordRef.current.value = null
        confirmPasswordRef.current.value = null
        if (response) router.push("/auth/signin")
        setTimeout(()=>{
            setAlert({modalActive:false,workStatus:"",message:""})
        },2000)

    }

    useEffect(() => {
        if (adminCred) {
            router.push("/admin/home")
        }
    }, [adminCred])
    return (
        <>
            <div className={style.signUp + ' container-fluid m-0 my-5 p-0 py-5'}>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message}/>
               
                <h1 className={style.heading + " col-sm-4 p-2 mx-auto border-bottom text-center mb-2 text-justify"}><span className={style.text_blue}>Sign</span> <span className={style.text_orange}>Up</span></h1>

                <div className={style.container + ' row col-11 col-sm-12 col-xl-10 p-3 flex-wrap mx-auto d-flex justify-content-between align-content-center'}>
                    <div className="row col-12 shadow rounded-3 col-sm-10 col-md-6 py-3 mx-auto  mt-md-0 p-0 d-flex justify-content-center">
                        <form className={style.form + " form row col-12 py-3 mx-auto needs-validation"}>
                            <div className="col-6 mb-4">
                                <input   autoComplete="off"    type="text" ref={firstNameRef} required className="  border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="First name" />
                            </div>
                            <div className="col-6 mb-4">
                                <input   autoComplete="off"    type="text" ref={lastNameRef} required className=" border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Last name" />
                            </div>
                            <div className="col-12 mb-4">
                                <input   autoComplete="off"    type="email" ref={emailRef} required={"true"} className=" border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Email" />
                            </div>
                            <div className="col-12 mb-4">
                                <input   autoComplete="off"    type="password" ref={passwordRef} required className=" border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Password" />
                            </div>
                            <div className="col-12 mb-4">
                                <input   autoComplete="off"    type="password" ref={confirmPasswordRef} required className=" border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Confirm Password" />
                            </div>
                            <div className={style.submitBtn + " col-12  "}>
                                <button onClick={handleSignup} type="button" className="row col-12 mx-auto d-flex justify-content-center text-light  rounded  border-0 outline-none">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp