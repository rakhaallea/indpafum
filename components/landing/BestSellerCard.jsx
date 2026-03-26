

import Image from "next/image"

import { products } from "@/constant"
import Link from "next/link"

const BestSeller = () => {
    const bestSellers = products
        .filter((product) => product.isBestSeller === true)
        .slice(0, 4)

    return (
        <section className="bestSellers overflow-hidden" id="bestsellers">
            <div className="text-center">
                <h2 className="text-4xl md:text-6xl text-white font-prata">Best Seller</h2>
                <p className="text-white/55 font-poppins text-sm md:text-base max-w-2xl mx-auto">
                    Aroma terpilih dengan karakter paling ikonik dan paling disukai.
                </p>
            </div>

            <div className="bestSellers-body">
                {bestSellers.map((product) => (
                    <div className='w-full font-poppins bestSeller-card-body flex flex-col gap-4 group' key={product.id}>

                        {/* Image */}
                        <div className='relative w-full aspect-4/3 overflow-hidden'>
                            <Image
                                src={product.image}
                                alt={`${product.name} parfum ${product.type} ukuran ${product.variants[0].size}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className='object-cover object-center transition-transform duration-500 group-hover:scale-105'
                            />

                            {/* gradient overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
                        </div>

                        {/* Title */}
                        <h2 className='font-semibold text-lg tracking-wide'>
                            {product.name}
                        </h2>

                        {/* Description */}
                        <p className='font-light text-sm leading-6 text-white/70 line-clamp-2'>
                            {product.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {product.vibe.map((badge, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/80 backdrop-blur"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>

                        {/* Button */}
                        <Link href={product.link} target="_blank">
                            <button className="mt-auto w-fit border border-white/30 rounded-full px-4 py-2 text-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">
                                View Product
                            </button>
                        </Link>


                    </div>
                ))}
            </div>

            <div className="absolute top-20 right-0 w-140 h-140 rounded-full bg-[rgba(255,255,223,0.06)] -z-10 blur-2xl pointer-events-none"></div>
        </section>
    )
}

export default BestSeller