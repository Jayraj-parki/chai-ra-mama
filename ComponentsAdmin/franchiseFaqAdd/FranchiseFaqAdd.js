
import style from "./franchiseFaqAdd.module.scss"
const FranchiseFaqAdd = ({ id }) => {
  return (

    <div className={' container-fluid my-4  '}>
      <div className={style.franchiseFaqAdd + 'row col-12 col-lg-8 shadow rounded-4  col-xl-6 p-4 mx-auto'}>
        <div className={style.header + ' row col-12 mx-auto'}>
          <h3 className={style.heading + ' fw-bold col-auto my-auto text-capitalize'}>Add Franchise Question</h3>
        </div>
        <hr />
        <div className='row col-12 mx-auto mt-2'>
          <div className=''>
            <div className="mb-4 ">
              <label for="editName" className="form-label">Question</label>
              <input type="text" className="form-control" id="editName" aria-describedby="emailHelp" placeholder='write heading here' />
            </div>
            
            <div className="mb-4">
              <label for="editContent" className="form-label">Answer</label>
              <textarea type="text" className="form-control" id="editContent" placeholder='write content description here'></textarea>
            </div>
            <button type="submit" className="btn btn-primary d-flex col-auto px-4 ms-auto text-center justify-content-center text-capitalize">Submit</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default FranchiseFaqAdd