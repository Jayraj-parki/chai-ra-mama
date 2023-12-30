"use client"
import { useEffect, useState } from 'react'
import style from "./myProducts.module.scss"
import Image from 'next/image';;
import PopUp from '../../../ComponentsAdmin/PopUp/PopUp';
import ImageModal from '../../../ComponentsAdmin/imageModal/ImageModal';

import { useClientDashboardContext } from '@/components/dashboard/Dashboard';
import { Tab, Tabs } from 'react-bootstrap';
import MenuItem from './MenuItem';
import { AddClientMenuCollection } from '@/services/AddClientMenuCollection';
import CollectionItem from './CollectionItem';
import { removeClientMenuFromCollection } from '@/services/removeClientMenuFromCollection';

const MyProducts = () => {
  const { clientMenu, myCollection,fetchCollection } = useClientDashboardContext()
  const [alert, setAlert] = useState({ modalActive: false, workStatus: "", message: "" })
  const [modal, setModal] = useState({ active: false, image: "" })
  
  const addProductToMyList = async (_id,quantity) => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait" })
    await AddClientMenuCollection({_id, quantity, fetchCollection,setAlert})
  }
  const removeFromList = async (_id) => {
    setAlert({ modalActive: true, workStatus: "progress", message: "Please wait" })
    await removeClientMenuFromCollection({_id, fetchCollection,setAlert})
  }
  

  return (
    <>
      <PopUp closeAlert={() => setAlert({ modalActive: false, workStatus: "", message: "" })} modalActive={alert.modalActive} workStatus={alert.workStatus} message={alert.message} />
      <div className={style.container + " container-fluid my-4 p-0 shadow rounded-4 p-4"}>

        <Tabs variant="pills" >
          <Tab data-bs-theme="light" eventKey="Available Product" title="Available Product">
          <div className={style.myProducts + ' container-fluid my-4  '}>
              <ImageModal modal={modal} setModal={setModal} />
              <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
                {
                  myCollection ?
                    <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
                      <thead className='border'>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Item Name</th>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Item image</th>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Item Price</th>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Available Quantity</th>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Quantity</th>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
                      </thead>
                      <tbody>
                        {
                          myCollection?.map((val, index) =>
                            <CollectionItem key={val?._id+""+index} val={val} removeFromList={removeFromList}/>
                          )}
                      </tbody>
                    </table>
                    : <p className='text-center   text-capitalize'>oops..! No record found</p>
                }
              </div>
            </div>
          </Tab>
          <Tab eventKey="Menu List" title="Menu List">

            <div className={style.myProducts + ' container-fluid my-4  '}>
              <ImageModal modal={modal} setModal={setModal} />
              <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
                {
                  clientMenu ?
                    <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
                      <thead className='border'>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Item Name</th>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Item image</th>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Item Price</th>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Quantity</th>
                        <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
                      </thead>
                      <tbody>
                        {
                          clientMenu?.map((val, index) =>
                            <MenuItem key={val?._id+""+index} val={val} addProductToMyList={addProductToMyList}/>
                          )}
                      </tbody>
                    </table>
                    : <p className='text-center   text-capitalize'>oops..! No record found</p>
                }
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default MyProducts