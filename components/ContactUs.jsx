import Image from "next/image"

import imgMap from "@/public/img/google-map.png"

import { openingHours } from "@/constant"

const ContactUs = () => {
    return (
        <div className="contactus" id="contactus">
            <h1 className="mb-14 text-center text-3xl lg:text-5xl">Contact US</h1>

            <div className="body">
                <div className="left">
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
                <div className="right">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248.94102504437666!2d114.5957578!3d-3.3362411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de421004250d3d1%3A0x6bb3c2c98bb9ee05!2sINDPAFUM%20STORE%20KELAYAN!5e0!3m2!1sid!2sid!4v1766648322910!5m2!1sid!2sid"
                        frameBorder="0"
                        width="100%"
                        height={500}
                        allowFullScreen
                        title="Maps"
                    ></iframe>

                </div>
            </div>

            <div className="absolute top-20 -left-40 w-80 h-110 lg:w-120 lg:h-220 rotate-90 rounded-full bg-[rgba(255,255,223,0.08)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default ContactUs