'use client'

import { listFaq } from '@/constant'
import { useState } from 'react'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className='pt-20 pb-20 relative overflow-hidden'>
            <h1 className='text-6xl font-port-lligat-slab mb-12 text-center'>FAQs</h1>

            <div className='w-full px-4 md:px-0 md:w-1/2 mx-auto flex flex-col gap-4 font-poppins tracking-wider'>

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

            {/* Banner bagian bawah tetap sama */}
        </div>
    )
}

export default FAQ
