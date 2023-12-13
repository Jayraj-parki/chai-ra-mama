"use client"
import { useRef, useState } from 'react'
import style from "./localSignIn.module.scss"
import { useRouter } from "next/navigation"
import { useAuth } from '@/app/layout';
import { userSignIn } from '@/services/localUser/userSignIn';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
const LocalSignIn = () => {
    
    const [role,setRole]=useState();
    const {isUserLogin } = useAuth()
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const router = useRouter();
    const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
   
    const handleLogin = async () => {
        const email = emailRef.current.value.trim()
        const password = passwordRef.current.value.trim()
        setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
        const token = await userSignIn({ email, password,setAlert ,role})
        if (token) {
            router.push("/dashboard") 
           isUserLogin()
        }
        emailRef.current.value = null
        passwordRef.current.value = null
    }

    return (
        <>
        <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            
            <div className={style.signIn + ' container-fluid m-0 my-5 p-0 py-5'}>
                <h1 className={style.heading + " col-sm-4 p-2 mx-auto border-bottom text-center mb-2 text-justify"}><span className={style.text_blue}>Sign</span> <span className={style.text_orange}>In</span></h1>
                <div className={style.container + ' row col-11 col-sm-12 col-xl-10 p-3 flex-wrap mx-auto d-flex justify-content-between align-content-center'}>
                    <div className="row col-12 shadow rounded-3 col-sm-10 col-md-6 col-lg-5 py-3 py-md-5 mx-auto  mt-md-0 p-0 d-flex justify-content-center">
                        <div className={style.form + " row col-12 mx-auto"}>
                            <div className="col-12 mb-4">
                                <input  autocomplete="off"   ref={emailRef} type="email" required className=" border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Email" />
                            </div>
                            <div className="col-12 mb-4">
                                <input  autocomplete="off"   ref={passwordRef} type="password" required className=" border-top-0 border-end-0 border-start-0 border-bottom-1 outline-none form-control shadow-none" placeholder="Password" />
                            </div>
                            <div className="col-12 mb-4">
                                <select className="form-select shadow-none" value={role} onChange={(e) => setRole(e.target?.value)}>
                                    <option value="Select role" disabled selected>Select Role</option>
                                    <option value="user"  >User</option>
                                    <option value="client"  >Store Incharge</option>
                                </select>
                            </div>
                            <div className={style.submitBtn + " col-12  "}>
                                <button onClick={handleLogin} type="submit" className="row col-12 mx-auto d-flex justify-content-center text-light  rounded  border-0 outline-none">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LocalSignIn