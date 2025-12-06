"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { singleParfum } from "@/constant"

const SingleProduct = () => {

    // Default category "oriental"
    const [type, setType] = useState("oriental")

    // Ambil data sesuai radio
    const parfum = singleParfum.find(p => p.type === type)

    return (
        <div className="pt-20 pb-20 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-14 px-4 md:px-10 overflow-hidden relative">

            {/* Image Desktop */}
            <div className="hidden md:block w-400 lg:w-1/2 h-160 overflow-hidden">
                <Image
                    src={parfum.img}
                    className="object-cover object-[50%,80%] w-full h-full scale-110 hover:scale-120 origin-bottom transition-transform duration-300 ease-out cursor-pointer"
                    alt={parfum.title}
                />
            </div>

            <div className="flex flex-col justify-center gap-10 font-poppins w-full md:w-auto">

                {/* TEXT */}
                <div className="flex flex-col gap-4 tracking-widest text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-prata">{parfum.title}</h1>
                    <h3 className="text-lg md:text-xl">{parfum.subTitle}</h3>
                    <p className="font-light text-sm">{parfum.desc}</p>
                </div>

                {/* Image Mobile */}
                <div className="w-full h-60 overflow-hidden md:hidden">
                    <Image
                        src={parfum.img}
                        className="object-cover object-[50%,80%] w-full h-full scale-110 hover:scale-120 origin-bottom transition-transform duration-300"
                        alt={parfum.title}
                    />
                </div>

                {/* Price */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <span className="text-xl md:text-2xl">{parfum.disc}</span>
                    <span className="text-xl md:text-2xl line-through text-gray-400">{parfum.price}</span>
                </div>

                {/* Countdown */}
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <p className="font-light text-sm">Limited Time Offer Ends in :</p>

                    <div className="flex gap-3">
                        {[["2", "Days"], ["23", "Hours"], ["59", "Minutes"], ["54", "Seconds"]].map(([num, label]) => (
                            <div
                                key={label}
                                className="flex flex-col items-center justify-center w-14 h-14 md:w-24 md:h-24 rounded-2xl border bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))]"
                            >
                                <span>{num}</span>
                                <span className="text-[10px] md:text-base">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 justify-center md:justify-start">
                    <div className="flex items-center gap-2 text-xs">
                        <i className="ri-star-fill"></i>
                        <p className="font-light">4.9/5 (2.4k reviews)</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <i className="ri-time-line"></i>
                        <p className="font-light">Ships in 24h</p>
                    </div>
                </div>

                {/* Button */}
                <Link
                    href={'#'}
                    className="w-full md:w-96 py-3 rounded-full border hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] bg-[linear-gradient(90deg,rgba(255,255,255,0.1),rgba(153,153,153,0))] text-center text-sm font-light"
                >
                    Shop now
                </Link>

                {/* CATEGORY RADIO */}
                <div className="flex gap-6 justify-center md:justify-start font-light">
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

            {/* Background */}
            <div className="absolute top-60 left-0 w-40 h-40 md:w-120 md:h-120 rounded-full bg-[rgba(255,255,223,0.1)] -z-10 blur-2xl"></div>
            <div className="absolute top-80 right-0 md:right-80 w-40 h-80 md:w-80 md:h-120 -rotate-45 rounded-full bg-[rgba(255,255,223,0.02)] -z-10 blur-2xl"></div>
        </div>
    )
}

export default SingleProduct
