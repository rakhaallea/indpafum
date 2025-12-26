'use client'

import { listFaq } from '@/constant'
import Image from 'next/image'
import banner from '@/public/img/banner.jpg'
import imgPafum from '@/public/img/3.png'
import { useState } from 'react'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='pt-60 md:pt-20 pb-20 relative' id='faq'>
            <h1 className='text-6xl font-port-lligat-slab mb-12 text-center'>FAQs</h1>

            <div className='faq-body'>

                {listFaq.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        {/* TITLE */}
                        <p
                            className='text-slate-100 text-xl cursor-pointer'
                            onClick={() => handleToggle(index)}
                        >
                            {item.title}
                        </p>

                        {/* DESCRIPTION */}
                        <p
                            className={`font-light text-base transition-all duration-300 overflow-hidden ${activeIndex === index
                                ? 'opacity-100 max-h-60'
                                : 'opacity-0 max-h-0'
                                }`}
                        >
                            {item.desc}
                        </p>
                    </div>
                ))}

            </div>

            {/* Banner parfumes */}
            <div className='mt-20 w-full h-120 flex justify-center items-center relative'>
                <div className='w-full h-50 overflow-hidden'>
                    <Image
                        src={banner}
                        alt='banner'
                        className='w-full h-full object-cover object-[50%_50%] scale-120'
                    />
                </div>

                <div className="banner-faq">
                    <h1 className='text-4xl font-prata text-center'>Aura for Everyone</h1>
                    <div className="text-yellow-300 text-center">
                        {[...Array(5)].map((_, i) => (
                            <i key={i} className="ri-star-fill"></i>
                        ))}
                    </div>

                    <p className='text-center text-[#4C4C4C] font-light'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry’s standart dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className='faq-card'>
                        <h3>Reachel</h3>
                        <div className='flex gap-2 bg-[#F0DBBD]'>
                            <div className='w-16 h-16 overflow-hidden'>
                                <Image src={imgPafum} className='w-full h-full object-cover' alt='img-1'></Image>
                            </div>
                            <div className='flex flex-col justify-center items-start pr-6'>
                                <p className='font-light text-[#4F7974]'>Parfume</p>
                                <p className='font-bold text-[#4F7974]'>Rp.100.000,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-60 left-0 w-120 h-120 -rotate-45 rounded-full bg-[rgba(255,255,223,0.07)] -z-10 blur-2xl pointer-events-none">
            </div>

            <div className="absolute top-60 -right-40 w-120 h-120 -rotate-45 rounded-full bg-[rgba(255,255,223,0.07)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default FAQ
