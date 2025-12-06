import Image from "next/image"

import imgMap from "@/public/img/google-map.png"

import { openingHours } from "@/constant"

const ContactUs = () => {
    return (
        <div className="pt-20 pb-20 font-prata relative overflow-hidden">
            <h1 className="mb-14 text-center text-3xl lg:text-5xl">Contact US</h1>

            <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center px-4 lg:px-24">
                <div className="flex flex-col gap-6 lg:gap-10 order-2 md:order-1">
                    <div>
                        <h2 className="text-xl lg:text-3xl">Email Us</h2>
                        <p className="text-sm lg:text-base underline">indpafume@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-xl lg:text-3xl">Call Us</h2>
                        <p className="text-sm lg:text-base">+62 81799xxxxxxx</p>
                    </div>
                    <div className="text-sm lg:text-base">
                        <h2 className="text-xl lg:text-3xl">Email Us</h2>
                        <p> <i className="ri-arrow-right-long-fill ri-xs"></i> Jl. Teluk Tiram xxxxxx</p>
                        <p> <i className="ri-arrow-right-long-fill ri-xs"></i> Jl. Kelayan xxxxxx</p>
                    </div>
                    <div>
                        <h2 className="text-xl lg:text-3xl">Business Hours</h2>
                        <div className="flex gap-4 text-sm lg:text-base">
                            <ul>
                                {
                                    openingHours.map((open, index) => (
                                        <li key={index}>{open.day}</li>
                                    ))
                                }
                            </ul>
                            <ul>
                                {
                                    openingHours.map((open, index) => (
                                        <li key={index}>{open.time}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-100 lg:w-180 order-1 md:order-2 mb-8 md:mb-0">
                    <Image src={imgMap} className="w-full h-full object-cover" alt="google Map" />
                </div>
            </div>

            <div className="absolute top-20 -left-40 w-80 h-110 lg:w-120 lg:h-220 rotate-90 rounded-full bg-[rgba(255,255,223,0.08)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default ContactUs