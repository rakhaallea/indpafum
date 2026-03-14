"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useMemo } from "react"

import { products } from "@/constant"
import useCountDown from "@/hooks/useCountDown"
import getPriceBySize from "@/lib/getPriceBySize"
import formatRupiah from "@/lib/formatRupiah"

function HeroProduct({ product, type, setType, timeLeft }) {
    const discountPrice = getPriceBySize(product, "30ml");
    const originalPrice = discountPrice + 30000;

    return (
        <>
            <div className="hidden md:block bg-red-300 w-400 lg:max-w-150 h-160 overflow-hidden shadow-2xl shadow-slate-500/30">
                <Image src={product.image} className="product-img" alt={product.name} />
            </div>

            <div className="product-body">
                <div className="flex flex-col gap-4 tracking-widest text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-prata">{product.name}</h1>
                    <h3 className="text-sm md:text-xl">{product.shortDescription}</h3>
                    <p className="font-light text-sm">{product.description}</p>
                </div>

                <div className="w-full h-60 overflow-hidden md:hidden">
                    <Image
                        src={product.image}
                        className="object-cover object-[50%,80%] w-full h-full scale-110 hover:scale-120 origin-bottom transition-transform duration-300"
                        alt={product.name}
                    />
                </div>

                <div className="product-body-price">
                    {/* <span className="text-xl md:text-2xl text-center md:text-start">{product.description}</span> */}
                    <div className="flex gap-8 items-center justify-center md:justify-start">
                        <span className="text-xl md:text-2xl text-gray-100">{formatRupiah(discountPrice)}</span>
                        <span className="text-xl md:text-2xl line-through text-gray-400">{formatRupiah(originalPrice)}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="product-body-countdown">
                        <p className="font-light text-sm">Limited Time Offer Ends in :</p>

                        <div className="flex gap-3">
                            <div className="box-countdown">
                                <span>{timeLeft.days}</span>
                                <span className="text-[10px] md:text-base">Days</span>
                            </div>

                            <div className="box-countdown">
                                <span>{timeLeft.hours}</span>
                                <span className="text-[10px] md:text-base">Hours</span>
                            </div>

                            <div className="box-countdown">
                                <span>{timeLeft.minutes}</span>
                                <span className="text-[10px] md:text-base">Minutes</span>
                            </div>

                            <div className="box-countdown">
                                <span>{timeLeft.seconds}</span>
                                <span className="text-[10px] md:text-base">Seconds</span>
                            </div>
                        </div>
                    </div>

                    <div className="product-body-stats">
                        <div className="flex items-center gap-2 text-xs">
                            <i className="ri-star-fill"></i>
                            <p className="font-light">4.9/5 (2.4k reviews)</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <i className="ri-time-line"></i>
                            <p className="font-light">Ships in 24h</p>
                        </div>
                    </div>

                    <Link href={"#"} className="btn-primary w-full md:w-106 py-3">
                        Shop now
                    </Link>
                </div>

                <div className="product-body-radio">
                    {["oriental", "floral", "spicy"].map((cat) => (
                        <label key={cat} className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="radio"
                                name="category"
                                value={cat}
                                className="peer sr-only"
                                checked={type === cat}
                                onChange={() => setType(cat)}
                            />
                            <span className="w-3 h-3 rounded-full border-2 border-gray-300 peer-checked:bg-gray-300"></span>
                            <p className="text-xs capitalize">{cat}</p>
                        </label>
                    ))}
                </div>
            </div>
        </>
    )
}

const SingleProduct = () => {
    const [type, setType] = useState("oriental")
    const timeLeft = useCountDown(7)

    const typeProduct = useMemo(() => {
        return products.filter(
            (p) => p.isDiscount === true && p.type === type
        )
    }, [type])

    const displayProduct = typeProduct[0]

    if (!displayProduct) return null

    return (
        <div className="product-card">
            <HeroProduct
                product={displayProduct}
                type={type}
                setType={setType}
                timeLeft={timeLeft}
            />

            <div className="absolute top-60 left-0 w-40 h-40 md:w-120 md:h-120 rounded-full bg-[rgba(255,255,223,0.1)] -z-10 blur-2xl"></div>
            <div className="absolute top-80 right-0 md:right-80 w-40 h-80 md:w-80 md:h-120 -rotate-45 rounded-full bg-[rgba(255,255,223,0.02)] -z-10 blur-2xl"></div>
        </div>
    )
}

export default SingleProduct