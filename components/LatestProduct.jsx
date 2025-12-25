import Image from "next/image"

import imgPafum from "@/public/img/3.png"

import { latestUpdates } from "@/constant"

const LatestProduct = () => {
    return (
        <div className='pt-20 pb-20 relative px-6' id="perfumes">

            <div className='pt-20 font-poppins tracking-wider'>
                <h1 className='text-4xl font-prata text-center mb-4'>Latest from INDPAFUM</h1>
                <p className='text-center'>Discover the stories behind our scents and the art of parfumery</p>

                <div className='latestProduct-body'>
                    {
                        latestUpdates.map((card, index) => (
                            <div className="w-full md:w-150" key={index}>
                                <div className="w-full md:w-[85%] h-70 overflow-hidden ">
                                    <Image
                                        src={card.img}
                                        alt="img-1"
                                        className="w-full h-full latestProduct-img"
                                    />
                                </div>
                                <div className="flex flex-col justify-center gap-4 pt-8">
                                    <p className="font-light">{card.date}</p>
                                    <h2 className="font-prata text-2xl">{card.title}</h2>
                                    <p className="font-light">{card.desc}</p>
                                    <button className="w-fit btn-primary-outline font-prata text-lg">
                                        <div
                                            className="py-2 px-6 text-sm font-light bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full  duration-300 cursor-pointer transition-all">
                                            Learn more
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))}
                </div>

            </div>

            <div className="absolute top-20 left-0 w-190 h-190 rounded-full bg-[rgba(255,255,223,0.06)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default LatestProduct