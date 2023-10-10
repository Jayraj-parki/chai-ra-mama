"use client"
import { useState } from 'react'
import style from "./franchiseFaq.module.scss"
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Link from 'next/link';
import FranchiseFaqEdit from '../franchiseFaqEdit/FranchiseFaqEdit';
import FranchiseFaqAdd from '../franchiseFaqAdd/FranchiseFaqAdd';
const FranchiseFaq = () => {
  const [editData, setEditData] = useState({
    active: false,
    question: "",
    answer: ""
  })
  const [addData, setAddData] = useState(false)
  return (

    <div className={style.franchiseFaq + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <QuestionAnswerIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Franchise Questions</h3>
        </div>
        <button onClick={()=>setAddData(true)}  className='col-auto  ms-auto btn btn-success text-decoration-none m-2 text-capitalize'> Add Franchise Question</button>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 text-capitalize'> Go back</Link>
      </div>
      <hr />

      {/* Edit data modal */}
      <FranchiseFaqEdit editData={editData} setEditData={setEditData} question={editData?.question} answer={editData?.answer}/>
      {/* Add data modal  */}
      <FranchiseFaqAdd addData={addData} setAddData={setAddData}/>

      {/* Data Table */}
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <table className="col-12 table table-bordered table-hover  text-center text-capitalize ">
          <thead className='border'>
            <th className='text-capitalize p-2 pb-4 border text-center' >Sr no</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Questions</th>
            <th className='text-capitalize p-2 pb-4 border text-center' >Actions</th>
          </thead>
          <tbody>
            <tr className=''>
              <td className='align-middle' >1</td>
              <td className='align-middle' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</td>
              <td className='text-center align-middle'>
                <button onClick={() => setEditData({ active: true, question: "qquestion",answer:"answer" })}  className='btn btn-primary text-decoration-none mx-2 text-capitalize'>Edit</button>
                <button className='btn btn-danger text-decoration-none m-2 text-capitalize'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FranchiseFaq