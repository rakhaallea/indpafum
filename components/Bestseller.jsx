'use client'

import Image from 'next/image'
import { bestSellers, buttonBestSellers } from '@/constant'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules'

import { useState } from 'react';

const Bestseller = () => {
    const [isActive, setIsActive] = useState("All");

    const filteredData =
        isActive === "All"
            ? bestSellers
            : bestSellers.filter(item => item.category === isActive);

    return (
        <div className='pt-20 pb-20 h-auto font-prata flex flex-col gap-18 px-4 relative overflow-hidden' >

            {/* button bestseller */}
            <div className='flex justify-center items-center gap-8'>
                <Swiper
                    breakpoints={{
                        340: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        700: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        1080: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        }
                    }}

                    freeMode={true}
                    modules={[FreeMode]}
                    className='max-w-[90%] lg:max-w-[95%]'
                >

                    {/* Button items */}
                    {buttonBestSellers.map((btn, index) => (
                        <SwiperSlide key={index}>
                            <div className='p-[.8px] rounded-full bg-[linear-gradient(90deg,#FFFFFF,#999999)]'>
                                <button
                                    onClick={() => setIsActive(btn)}
                                    className={`w-full bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full text-center py-2 px-6 md:px-12 text-xl duration-300 cursor-pointer transition-all 
                                    ${isActive === btn
                                            ? "bg-[linear-gradient(90deg,rgba(255,255,255,0.3),rgba(153,153,153,0.2))]"
                                            : "bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))]"
                                        }`}>
                                    {btn}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            {/* product bestsellers */}
            <div className='flex items-center flex-col gap-6 tracking-widest' id="bestsellers">
                <h1 className='text-6xl'>
                    Best Seller
                </h1>
                <p className='text-2xl font-light'>lorem ipsum - xxxxxxxx xxxxxxxxx xxxxxxxxxxxxx</p>
            </div>
            <div className='flex justify-center items-center'>

                <Swiper
                    breakpoints={{
                        340: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                        700: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        1080: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        }
                    }}

                    freeMode={true}
                    modules={[FreeMode]}
                    className='w-full'
                >

                    {/* Product items */}
                    {filteredData.map((product, index) => (
                        <SwiperSlide>
                            <div className='w-full font-poppins flex-col flex gap-4 justify-center items-center text-center' key={index}>
                                <div className='w-full h-70 overflow-hidden'>
                                    <Image src={product.img}
                                        className='object-cover object-[50%_60%] w-full h-full scale-140 hover:scale-130 origin-bottom transition-transform duration-300 ease-out cursor-pointer' alt={`img-${index}`} />
                                </div>
                                <h2 className='font-bold'>{product.title}</h2>
                                <div>
                                    <p className='font-light'>
                                        {product.desc}
                                    </p>
                                    <span>{product.size}</span>
                                </div>
                                <p className='font-semibold'>{product.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

            <div className='absolute top-40 -left-40 w-120 h-120 rounded-full bg-[rgba(255,255,223,0.05)] blur-2xl' >
            </ div>

            <div className='absolute top-40 -right-40 w-120 h-120 rounded-full bg-[rgba(255,255,223,0.05)] blur-2xl'>
            </div>
        </div >
    )
}

export default Bestseller