"use client"

import Image from 'next/image'
import { products, buttonBestSellers } from '@/constant'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import { useState, useMemo } from 'react'
import formatRupiah from "@/lib/formatRupiah"

function CategoryTabs({ activeTab, onChange }) {
    return (
        <div className='flex justify-center items-center'>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 14,
                    },
                    1080: {
                        slidesPerView: 5,
                        spaceBetween: 18,
                    }
                }}
                freeMode={true}
                modules={[FreeMode]}
                className='max-w-[95%]'
            >
                {buttonBestSellers.map((tab, index) => {
                    const isActive = activeTab === tab

                    return (
                        <SwiperSlide key={index}>
                            <button
                                onClick={() => onChange(tab)}
                                className={`w-full py-3 px-6 rounded-full border transition-all duration-300 text-base md:text-lg
                                ${isActive
                                        ? 'border-white/50 bg-white/10 text-white'
                                        : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

function ProductCard({ item }) {
    return (
        <div className='group h-full bg-white/0.03 backdrop-blur-sm overflow-hidden  transition-all duration-300 hover:border-white/20 hover:bg-white/0.05'>
            <div className='relative w-full aspect-4/3 overflow-hidden'>
                <Image
                    src={item.image}
                    alt={`${item.name} parfum ${item.type} ukuran ${item.size}`}
                    fill
                    className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
                />
            </div>

            <div className='p-4 md:py-5 md:px-0 flex flex-col gap-4 min-h-320px'>
                <div className='flex flex-wrap gap-2'>
                    <span className='rounded-full border border-white/10 bg-white/0.04 px-2.5 py-1 text-[11px] md:text-xs text-white/75'>
                        {item.category}
                    </span>
                    <span className='rounded-full border border-white/10 bg-white/0.04 px-2.5 py-1 text-[11px] md:text-xs text-white/75 capitalize'>
                        {item.type}
                    </span>
                    <span className='rounded-full border border-white/10 bg-white/0.04 px-2.5 py-1 text-[11px] md:text-xs text-white/75'>
                        {item.size}
                    </span>
                </div>

                <div className='space-y-1 font-poppins'>
                    <h3 className='text-lg md:text-xl font-semibold leading-tight text-white line-clamp-1'>
                        {item.name}
                    </h3>
                    <p className='text-sm text-white/55 line-clamp-1'>
                        {item.gender}
                    </p>
                </div>

                <p className='text-sm md:text-15px leading-6 text-white/75 line-clamp-2 min-h-48px'>
                    {item.shortDescription}
                </p>

                <div className='flex flex-wrap gap-2 min-h-32px'>
                    {item.heroTag?.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className='rounded-full border border-white/10 bg-white/0.04 px-2.5 py-1 text-[11px] md:text-xs text-white/75'
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className='mt-auto flex items-center justify-between gap-3 pt-2 font-poppins'>
                    <div className='text-right space-y-1'>
                        <p className='text-lg md:text-xl font-semibold text-white'>
                            {formatRupiah(item.price)}
                        </p>
                    </div>
                    <div className='space-y-1'>
                        <a href={`#`} className='w-full py-2 px-6 rounded-full border transition-all duration-300 text-sm md:text-md hover:border-white/50 bg-white/10 hover:text-white border-white/20 text-white/70'>
                            view product
                        </a>
                    </div>


                </div>
            </div>
        </div>
    )
}

const AllProduct = () => {
    const [activeTab, setActiveTab] = useState("All")

    const flattenedProducts = useMemo(() => {
        const baseProducts =
            activeTab === "All"
                ? products
                : products.filter((item) => item.category === activeTab)

        return baseProducts.flatMap((product) =>
            product.variants.map((variant) => ({
                id: `${product.id}-${variant.size}`,
                productId: product.id,
                slug: `${product.slug}-${variant.size}`,
                name: product.name,
                category: product.category,
                type: product.type,
                gender: product.gender,
                shortDescription: product.shortDescription,
                description: product.description,
                vibe: product.vibe,
                bestFor: product.bestFor,
                rating: product.rating,
                reviewCount: product.reviewCount,
                isDiscount: product.isDiscount,
                heroTag: product.heroTag,
                size: variant.size,
                price: variant.price,
                image: variant.image || product.image,
            }))
        )
    }, [activeTab])

    return (
        <section
            className='pt-20 pb-20 font-prata flex flex-col gap-12 px-4 relative overflow-hidden'
            id='shopAll'
        >
            <div className='shopall text-center flex flex-col gap-3'>
                <h2 className='text-4xl md:text-6xl text-white font-prata'>
                    Shop All
                </h2>
                <p className='text-white/55 font-poppins text-sm md:text-base max-w-2xl mx-auto'>
                    Koleksi lengkap dengan karakter aroma yang dirancang untuk setiap momen dan kepribadian.
                </p>
            </div>

            <CategoryTabs activeTab={activeTab} onChange={setActiveTab} />

            <div className='shopall-product'>
                <Swiper
                    breakpoints={{
                        340: {
                            slidesPerView: 1.15,
                            spaceBetween: 16,
                        },
                        700: {
                            slidesPerView: 2.2,
                            spaceBetween: 18,
                        },
                        1080: {
                            slidesPerView: 3.2,
                            spaceBetween: 20,
                        },
                        1400: {
                            slidesPerView: 4,
                            spaceBetween: 22,
                        }
                    }}
                    freeMode={true}
                    modules={[FreeMode]}
                    className='w-full'
                >
                    {flattenedProducts.map((item) => (
                        <SwiperSlide key={item.id} className='h-auto'>
                            <ProductCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className='absolute top-40 -left-40 w-120 h-120 rounded-full bg-[rgba(255,255,223,0.05)] blur-2xl'></div>
            <div className='absolute top-40 -right-40 w-120 h-120 rounded-full bg-[rgba(255,255,223,0.05)] blur-2xl'></div>
        </section>
    )
}

export default AllProduct