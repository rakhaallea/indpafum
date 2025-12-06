import Image from "next/image"

import { auraParfum } from "@/constant"

const AuraProducts = () => {
    return (
        <div className="pt-10 md:pt-20 pb-20 flex flex-col gap-10 md:gap-20 px-4 overflow-hidden relative">
            <div className="text-start lg:text-center">
                <h1 className="mb-8 text-3xl md:text-5xl font-prata">Aura for Everyone</h1>
                <p className="font-poppins text-xl md:text-2xl font-light">A scent for every soul, every story</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4 md:gap-10 font-poppins">

                {
                    auraParfum.map((product, index) => (
                        <div className='w-full font-poppins flex-col flex gap-4 justify-center items-start text-start' key={index}>
                            <div className='w-full h-70 overflow-hidden'>
                                <Image src={product.img} className='object-cover object-[50%, 60%] w-full h-full 
                               scale-100 hover:scale-110 origin-bottom transition-transform duration-300 ease-out cursor-pointer' alt={`img-${index}`} />
                            </div>
                            <h2 className='font-bold'>{product.title}</h2>
                            <p className='font-light text-xs leading-5'>
                                {product.desc}
                            </p>
                            <button className="p-[.8px] rounded-full bg-[linear-gradient(90deg,#FFFFFF,#999999)]">
                                <div
                                    className="bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full py-2 px-2 text-sm font-light duration-300 cursor-pointer transition-all">
                                    {product.cta}
                                </div>
                            </button>
                        </div>
                    ))
                }

            </div>

            <div className="absolute top-20 left-0 w-160 h-160 rounded-full bg-[rgba(255,255,223,0.06)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default AuraProducts