import Image from "next/image"

import { auraParfum } from "@/constant"

const BestSeller = () => {
    return (
        <div className="bestSellers" id="bestsellers">
            <div className="text-start lg:text-center">
                <h1 className="mb-8 text-3xl md:text-5xl font-prata">Best Seller</h1>
                <p className="font-poppins text-xl md:text-2xl font-light">A scent for every soul, every story</p>
            </div>

            <div className="bestSellers-body" >

                {
                    auraParfum.map((product, index) => (
                        <div className='w-full font-poppins bestSeller-card-body' key={index}>
                            <div className='w-full h-70 overflow-hidden shadow-2xl shadow-slate-500/30'>
                                <Image
                                    src={product.img}
                                    className='bestSellers-img'
                                    alt={`img-${index}`} />
                            </div>
                            <h2 className='font-bold'>{product.title}</h2>
                            <p className='font-light text-xs leading-5'>
                                {product.desc}
                            </p>
                            <button className="btn-primary-outline">
                                <div
                                    className="p-2 text-sm font-light bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full  duration-300 cursor-pointer transition-all">
                                    {product.cta}
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