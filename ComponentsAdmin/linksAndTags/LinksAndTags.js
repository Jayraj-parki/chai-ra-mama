"use client"
import { useState } from 'react'
import style from "./linksAndTags.module.scss"
import Link from 'next/link';
import LinkIcon from '@mui/icons-material/Link';
import TagIcon from '@mui/icons-material/Tag';
const LinksAndTags = () => {
 
  return (

    <div className={style.linksAndTags + ' container-fluid my-4  shadow rounded-4 p-4'}>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start '}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <LinkIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Social Links</h3>
        </div>
        <Link href="./home" className='col-auto btn btn-dark text-light  text-decoration-none m-2 ms-auto text-capitalize'> Go back</Link>
      </div>
      <hr />
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <div className='col-md-12 col-lg-8 col-xxl-6'>
          <table className=" table table-borderless text-capitalize ">
            <tbody>
              <tr className=''>
                <td className='align-middle' >Facebook</td>
                <td className='align-middle' ><input  autocomplete="off"   name="" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >instagram</td>
                <td className='align-middle' ><input  autocomplete="off"   name="" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >youtube</td>
                <td className='align-middle' ><input  autocomplete="off"   name="" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >whatsapp</td>
                <td className='align-middle' ><input  autocomplete="off"   name="" type="text" className="form-control" placeholder='write something here' />
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div className={style.header + ' row col-12 mx-auto d-flex justify-content-start mt-5'}>
        <div className='col-auto  d-flex flex-row justify-content-start '>
          <TagIcon className={style.icon + ' col-auto my-auto p-0 '} />
          <h3 className={style.heading + ' fw-bold col-auto my-auto mx-2 text-capitalize'}>Seo Tags</h3>
        </div>
      </div>
      <hr />
      <div className={style.tableContainer + ' row col-12 mx-auto mt-5'}>
        <div className='col-md-12 col-lg-8 '>
          <table className=" table table-borderless text-capitalize ">
            <tbody>
              <tr className=''>
                <td className='align-middle' >Meta tag</td>
                <td className='align-middle' ><textarea name="" type="text" className="form-control" placeholder='write something here' ></textarea>
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >meta keywords</td>
                <td className='align-middle' ><textarea name="" type="text" className="form-control" placeholder='write something here'  ></textarea>
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >meta description</td>
                <td className='align-middle' ><textarea name="" type="text" className="form-control" placeholder='write something here'  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-12'>
          <button type="submit" className="btn btn-primary d-flex col-auto px-4 py-2 mx-auto text-center justify-content-center text-capitalize">Save</button>
        </div>
      </div>
    </div>
  )
}

export default LinksAndTags