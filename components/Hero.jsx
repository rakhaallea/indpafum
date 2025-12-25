"use client"

import Image from 'next/image'

import { heroBanner as heroData } from '@/constant'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const Hero = () => {

    return (
        <div className='pt-20 md:pt-35 lg:pt-45'>
            <div className="w-full" id='home'>

                <div className=''>
                    <Swiper
                        breakpoints={{
                            slidesPerView: 1,
                            spaceBetween: 15,
                        }}

                        freeMode={true}
                        pagination={{ clickable: true }}
                        modules={[FreeMode, Pagination]}
                        className='w-full'
                    >

                        {/* Button items */}
                        {heroData.map((img, index) => (
                            <SwiperSlide key={index} >
                                <div className='mb-12 h-[300px] md:h-[500px] lg:h-[700px]'>
                                    <Image src={img} alt="hero image" className='w-full h-full object-cover' />
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

            </div>
        </div>

    )
}

export default Hero