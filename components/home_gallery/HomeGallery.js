"use client"
import style from "./homeGallery.module.scss"
import Image from 'next/image'
const HomeGallery = ({props}) => {
    
    return (
        <div className={style.gallery + ' container-fluid m-0 my-4 my-xl-5 p-0'}>
            <h1 className={style.heading + " text-center mb-5 text-justify"}><span className={style.text_blue}>Our</span> <span className={style.text_orange}>Gallery</span></h1>
            <div className='row col-11 col-xl-11 col-xxl-12   mx-auto d-flex justify-content-center'>
                {
                    props?.map((val) => {
                        return (
                            <div key={val?._id} className=' col-sm-10 col-md-6 col-lg-5 col-xl-4 col-xxl-3 m-xxl-1 '>
                                <Image className='py-2' src={val?.galleryImage} width={400} height={300} objectFit='cover' alt='gallery image' />
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default HomeGallery