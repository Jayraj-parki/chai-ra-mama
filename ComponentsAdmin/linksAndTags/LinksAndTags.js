"use client"
import { useEffect, useState } from 'react'
import style from "./linksAndTags.module.scss"
import Link from 'next/link';
import LinkIcon from '@mui/icons-material/Link';
import TagIcon from '@mui/icons-material/Tag';
import { useLinkAndTagContext } from '@/app/admin/links-and-tags/page';
import { updateLinkTagData } from '@/services/updateLinkTagData';
const LinksAndTags = () => {
  const { linkTagData, helper } = useLinkAndTagContext()
  const [facebook, setFacebook] = useState(linkTagData?.facebook)
  const [instagram, setInstagram] = useState(linkTagData?.instagram)
  const [whatsapp, setWhatsapp] = useState(linkTagData?.whatsapp)
  const [youtube, setYoutube] = useState(linkTagData?.youtube)
  const [metaTitleTag, setMetaTitleTag] = useState(linkTagData?.metaTitleTag)
  const [metaKeyword, setMetaKeyword] = useState(linkTagData?.metaKeyword)
  const [metaDesc, setMetaDesc] = useState(linkTagData?.metaDesc)
  const [siteId, setSiteId] = useState(linkTagData?._id)
  const updateData = async () => {
    await updateLinkTagData({ _id: siteId, facebook, instagram, whatsapp, youtube, metaTitleTag, metaKeyword, metaDesc })
  }
  useEffect(() => {
    setFacebook(linkTagData?.facebook)
    setInstagram(linkTagData?.instagram)
    setWhatsapp(linkTagData?.whatsapp)
    setYoutube(linkTagData?.youtube)
    setMetaTitleTag(linkTagData?.metaTitleTag)
    setMetaKeyword(linkTagData?.metaKeyword)
    setMetaDesc(linkTagData?.metaDesc)
    setSiteId(linkTagData?._id)
  }, [linkTagData])
  useEffect(() => {
    helper()
  }, [])

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
                <td className='align-middle' ><input value={facebook} onChange={(e) => setFacebook(e.target.value)} autocomplete="off" name="" type="text" className="form-control" placeholder='facebook link here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >instagram</td>
                <td className='align-middle' ><input value={instagram} onChange={(e) => setInstagram(e.target.value)} autocomplete="off" name="" type="text" className="form-control" placeholder='instagram link here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >youtube</td>
                <td className='align-middle' ><input value={youtube} onChange={(e) => setYoutube(e.target.value)} autocomplete="off" name="" type="text" className="form-control" placeholder='youtube link here' />
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >whatsapp</td>
                <td className='align-middle' ><input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} autocomplete="off" name="" type="text" className="form-control" placeholder='whatsapp link here' />
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
                <td className='align-middle' >Meta Title tag</td>
                <td className='align-middle' ><textarea value={metaTitleTag} onChange={(e) => setMetaTitleTag(e.target.value)} name="" type="text" className="form-control" placeholder='metaTag value here' ></textarea>
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >meta keywords</td>
                <td className='align-middle' ><textarea value={metaKeyword} onChange={(e) => setMetaKeyword(e.target.value)} name="" type="text" className="form-control" placeholder='metaKeyword value here'  ></textarea>
                </td>
              </tr>
              <tr className=''>
                <td className='align-middle' >meta description</td>
                <td className='align-middle' ><textarea value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)} name="" type="text" className="form-control" placeholder='metaDescription value here'  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='col-12'>
          <button onClick={updateData} type="submit" className="btn btn-primary d-flex col-auto px-4 py-2 mx-auto text-center justify-content-center text-capitalize">Save</button>
        </div>
      </div>
    </div>
  )
}

export default LinksAndTags