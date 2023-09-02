import React from 'react'
import style from "./homeTestimonial.module.scss"
import Image from 'next/image'
const HomeTestimonial = () => {
    return (
        <div className={style.testimonial + ' container-fluid m-0 my-0 p-0 py-5'}>
            <h1 className={style.heading + " text-center my-5 text-justify"}><span className={style.text_blue}>Testimonials</span></h1>
            <div className='row col-10 mx-auto d-flex justify-content-center'>
                <div className={style.cardContainer+' col-4 m-1 d-flex justify-content-center flex-column '}>
                    <div className='row col-12 mx-auto p-0 d-flex justify-content-center'>
                        <Image className='py-2 ' src={"/assets/images/g1.png"} width={50} height={50} objectFit='cover' alt='gallery image' />
                    </div>
                    <div className="row col-12 mx-auto p-0 d-flex justify-content-center">
                        <div className="px-3 row-col-12 mx-auto">
                            <h3 className="col-12  text-center">Card title</h3>
                            <p className="col-12 text-center">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                    <div className={style.circleOne}></div>
                    <div className={style.circleTwo}></div>
                    <div className={style.circleThree}></div>
                </div>
            </div>
            <div className='row col-10 mx-auto d-flex justify-content-between'>
                <div className={style.cardContainer+' col-4 m-1 d-flex justify-content-center flex-column '}>
                    <div className='row col-12 mx-auto p-0 d-flex justify-content-center'>
                        <Image className='py-2 ' src={"/assets/images/g1.png"} width={50} height={50} objectFit='cover' alt='gallery image' />
                    </div>
                    <div className="row col-12 mx-auto p-0 d-flex justify-content-center">
                        <div className="px-3 row-col-12 mx-auto">
                            <h3 className="col-12  text-center">Card title</h3>
                            <p className="col-12 text-center">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                    <div className={style.circleOne}></div>
                    <div className={style.circleTwo}></div>
                    <div className={style.circleThree}></div>
                </div>
                <div className={style.cardContainer+' col-4 m-1 d-flex justify-content-center flex-column '}>
                    <div className='row col-12 mx-auto p-0 d-flex justify-content-center'>
                        <Image className='py-2 ' src={"/assets/images/g1.png"} width={50} height={50} objectFit='cover' alt='gallery image' />
                    </div>
                    <div className="row col-12 mx-auto p-0 d-flex justify-content-center">
                        <div className="px-3 row-col-12 mx-auto">
                            <h3 className="col-12  text-center">Card title</h3>
                            <p className="col-12 text-center">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                    <div className={style.circleOne}></div>
                    <div className={style.circleTwo}></div>
                    <div className={style.circleThree}></div>
                </div>
            </div>
            <div className='row col-10 mx-auto d-flex justify-content-center'>
                <div className={style.cardContainer+' col-4 m-1 d-flex justify-content-center flex-column '}>
                    <div className='row col-12 mx-auto p-0 d-flex justify-content-center'>
                        <Image className='py-2 ' src={"/assets/images/g1.png"} width={50} height={50} objectFit='cover' alt='gallery image' />
                    </div>
                    <div className="row col-12 mx-auto p-0 d-flex justify-content-center">
                        <div className="px-3 row-col-12 mx-auto">
                            <h3 className="col-12  text-center">Card title</h3>
                            <p className="col-12 text-center">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                        </div>
                    </div>
                    <div className={style.circleOne}></div>
                    <div className={style.circleTwo}></div>
                    <div className={style.circleThree}></div>
                </div>
            </div>
        </div >
    )
}

export default HomeTestimonial