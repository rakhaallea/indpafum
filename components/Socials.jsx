import Image from "next/image"
import Link from "next/link"

import imgPafum from "@/public/img/3.png"

import { socials } from "@/constant"

const Socials = () => {
    return (
        <div className='pt-20 pb-20 relative overflow-hidden px-6' id="blog">
            <div
                className="md:w-[90%] mx-auto pt-12 rounded-2xl border-[.8px] bg-[linear-gradient(90deg,rgba(255,255,255,0.3),rgba(153,153,153,0.02))] text-center text-sm font-light font-poppins px-4 flex flex-col gap-6">

                <h1 className='text-2xl md:text-5xl font-prata'>Follow, Share & Be Seen</h1>
                <div className='flex flex-col gap-2 tracking-widest'>
                    <p className='text-sm md:text-xl font-medium'>Join the Aurafume Experience - your story deserves the spotlight</p>
                    <p className='font-light text-xs md:text-lg'>We love how you wear <span className='font-bold'>Aurafume</span>.<br />
                        Tag us in your reels and stories, and we’ll repost and showcase your vibe with the <br /> <span className='font-bold'>Aurafume</span> comunity.
                    </p>
                </div>

                <div className='flex gap-4 justify-center items-center pb-2'>
                    {
                        socials.map((social, index) => (
                            <Link href={social.url} key={social.name}>
                                <i className={`${social.icon} text-2xl md:text-5xl ${index === 3 ? "hidden" : null} `}></i>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className='pt-20 font-poppins tracking-wider'>
                <h1 className='text-4xl font-prata text-center mb-4'>Latest from Aurafume</h1>
                <p className='text-center'>Discover the stories behind our scents and the art of parfumery</p>

                <div className='pt-10 flex flex-col md:flex-row justify-center items-center gap-10'>

                    <div className="w-full md:w-150">
                        <div className="w-full md:w-[85%] h-70 overflow-hidden">
                            <Image
                                src={imgPafum}
                                alt="img-1"
                                className="w-full h-full object-cover object-[50%_10%] scale-110 origin-[50%_10%] hover:scale-120  transition-transform duration-300 ease-out cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-4 pt-8">
                            <p className="font-light">Oktober 15, 2025</p>
                            <h2 className="font-prata text-2xl">The Art of Layering Fragrances</h2>
                            <p className="font-light">Discover the secrets of combining different scents to create your unique signature frafrance that evolves throughout the day.</p>
                            <button className="w-fit p-[.8px] rounded-full bg-[linear-gradient(90deg,#FFFFFF,#999999)] font-prata text-lg">
                                <div
                                    className="bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full py-2 px-6 text-sm font-light duration-300 cursor-pointer transition-all">
                                    Learn more
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-150">
                        <div className="w-full md:w-[85%] h-70 overflow-hidden">
                            <Image
                                src={imgPafum}
                                alt="img-1"
                                className="w-full h-full object-cover object-[50%_10%] scale-110 origin-[50%_10%] hover:scale-120  transition-transform duration-300 ease-out cursor-pointer"
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-4 pt-8">
                            <p className="font-light">Oktober 15, 2025</p>
                            <h2 className="font-prata text-2xl">The Art of Layering Fragrances</h2>
                            <p className="font-light">Discover the secrets of combining different scents to create your unique signature frafrance that evolves throughout the day.</p>
                            <button className="w-fit p-[.8px] rounded-full bg-[linear-gradient(90deg,#FFFFFF,#999999)] font-prata text-lg">
                                <div
                                    className="bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full py-2 px-6 text-sm font-light duration-300 cursor-pointer transition-all">
                                    Learn more
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="absolute top-20 left-0 w-190 h-190 rounded-full bg-[rgba(255,255,223,0.06)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default Socials