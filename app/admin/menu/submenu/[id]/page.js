"use client"
import { useAuth } from '@/app/layout';
import PopUp from '@/ComponentsAdmin/PopUp/PopUp';
import SubMenu from '@/ComponentsAdmin/subMenu/SubMenu';
import { getDataService } from '@/services/getDataService';
import { createContext, useContext, useEffect, useState } from 'react';
const subMenuContext = createContext()
export const useSubMenuContext = () => {
  return useContext(subMenuContext)
}
const page = ({ params }) => {
  const { adminCred } = useAuth()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [subMenuData, setData] = useState()
  const helper = async () => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Loading....." })
    await getDataService(setData, `sub-menu?_id=${params?.id}`)
    setAlert({ modalActive: false, workStatus: "", message: "" })
  }
  useEffect(() => {
    if (adminCred) helper()
  }, [])
  return (
    <>
      {
        adminCred &&
        <subMenuContext.Provider value={{ pId: params?.id, subMenuData, helper }}>
          <div className='container-fluid p-lg-4  m-0'>
            <PopUp closeAlert={()=>setAlert({modalActive: false,workStatus: "", message: ""})}  modalActive={alert.modalActive}  workStatus={alert.workStatus} message={alert.message} />
            <SubMenu />
          </div>
        </subMenuContext.Provider>
      }
    </>
  )
}

export default page