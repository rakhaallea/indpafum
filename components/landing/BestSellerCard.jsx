import Image from "next/image"

import { auraParfum, products } from "@/constant"

const BestSeller = () => {
    const bestSellers = [...products]
        .sort((a, b) => (b.rating * b.reviewCount) - (a.rating * a.reviewCount))
        .slice(0, 4);

    return (
        <div className="bestSellers" id="bestsellers">
            <div className="text-start lg:text-center">
                <h1 className="mb-8 text-3xl md:text-5xl font-prata">Best Seller</h1>
                <p className="font-poppins text-xl md:text-2xl font-light">A scent for every soul, every story</p>
            </div>

            <div className="bestSellers-body" >

                {
                    bestSellers.map((product, index) => (
                        <div className='w-full font-poppins bestSeller-card-body' key={index}>
                            <div className='w-full h-70 overflow-hidden shadow-2xl shadow-slate-500/30'>
                                <Image
                                    src={product.image}
                                    className='bestSellers-img'
                                    alt={`img-${index}`} />
                            </div>
                            <h2 className='font-bold'>{product.name}</h2>
                            <p className='font-light text-xs leading-5'>
                                {product.description}
                            </p>
                            <div>
                                {product.vibe.map((badge, index) => (
                                    <span key={index} className="inline-block bg-[#f0f0f0] text-[#333] text-xs font-medium px-2 py-1 rounded-full mr-2">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                            <button className="btn-primary-outline">
                                <div
                                    className="p-2 text-sm font-light bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full  duration-300 cursor-pointer transition-all">
                                    view product
                                </div>
                            </button>
                        </div>
                    ))
                }

            </div>

            <div className="absolute top-20 right-0 w-190 h-190 rounded-full bg-[rgba(255,255,223,0.06)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default BestSeller