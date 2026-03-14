'use client'

import Image from 'next/image'
import { products, buttonBestSellers } from '@/constant'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { useState, useMemo } from 'react';

import getPriceBySize from "@/lib/getPriceBySize"
import formatRupiah from "@/lib/formatRupiah"


function CategoryTabs({ activeTab, onChange }) {
    return (
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
                {buttonBestSellers.map((tab, index) => {
                    const isActive = activeTab === tab;
                    return (
                        <SwiperSlide key={index}>
                            <div className='btn-primary-outline'>
                                <button
                                    onClick={() => onChange
                                        (tab)}
                                    className={`w-full py-2 px-6 md:px-12 text-xl text-center bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full duration-300 cursor-pointer transition-all 
                                    ${isActive
                                            ? "btn-active"
                                            : "btn-inactive"
                                        }`}>
                                    {tab}
                                </button>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

function ProductCard({ product }) {
    const displayPrice = getPriceBySize(product, "15ml");

    return (
        <div className='shopall-body'>
            <div className='w-full h-70 overflow-hidden shadow-2xl shadow-slate-500/20'>
                <Image src={product.image}
                    className='shopall-img' alt={`img-${product.id}`} />
            </div>
            <h2 className='font-bold'>{product.name} - {product.gender}</h2>
            <div>
                <p className='font-light'>
                    {product.description}
                </p>
                <span>{product.variants[0].size} | {product.variants[1].size} | {product.variants[2].size} </span>
            </div>
            <div className='flex gap-1 flex-col'>
                <p className='text-sm'>Start from</p>
                <p className='font-semibold'>
                    {formatRupiah(displayPrice)}
                </p>
            </div>
        </div>
    );
}

const AllProduct = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredProducts = useMemo(() => {
        if (activeTab === "All") return products;
        return products.filter((item) => item.category === activeTab);
    }, [activeTab]);


    return (
        <div className='pt-20 md:pb-20 h-auto font-prata flex flex-col gap-18 px-4 relative overflow-hidden' id='shopAll' >

            <CategoryTabs activeTab={activeTab} onChange={setActiveTab} />

            {/* product bestsellers */}
            <div className='shopall' id="shopall">
                <h1 className='text-6xl'>
                    Shop All
                </h1>
                <p className='text-2xl font-light'>lorem ipsum - xxxxxxxx xxxxxxxxx xxxxxxxxxxxxx</p>
            </div>
            <div className='shopall-product'>

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
                    {filteredProducts.map((product, index) => (
                        <SwiperSlide key={index}>
                            <ProductCard key={product.id} product={product} />
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

            <div className='absolute top-40 -left-40 w-120 h-120 rounded-full bg-[rgba(255,255,223,0.05)] blur-2xl' >
            </div>

            <div className='absolute top-40 -right-40 w-120 h-120 rounded-full bg-[rgba(255,255,223,0.05)] blur-2xl'>
            </div>
        </div>
    )
}

export default AllProduct