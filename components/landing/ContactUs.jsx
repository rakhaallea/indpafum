

import { openingHours } from "@/constant"

const ContactUs = () => {
    return (
        <section className="contactus overflow-hidden" id="contactus">
            <h2 className="mb-14 text-center text-3xl lg:text-5xl">Contact US</h2>

            <div className="body">
                <div className="left">
                    <div>
                        <h2 className="text-xl lg:text-3xl">Email Us</h2>
                        <p className="text-sm lg:text-base underline">indooparfum.001@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-xl lg:text-3xl">Call Us</h2>
                        <p className="text-sm lg:text-base">0812-5116-7168</p>
                    </div>
                    <div className="text-sm lg:text-base w-5/6">
                        <h2 className="text-xl lg:text-3xl">Visit Our Store</h2>
                        <p className="text-xs md:text-sm mb-2"> <i className="ri-arrow-right-long-fill ri-xs"></i> Gg. Tiram 13 Rahmat, Telawang, Kec. Banjarmasin Bar, Kota Banjarmasin, Kalimantan Selatan 70114</p>
                        <p className="text-xs md:text-sm"> <i className="ri-arrow-right-long-fill ri-xs"></i> Kelayan Dalam, Kec. Banjarmasin Sel, Kota Banjarmasin, Kalimantan Selatan 70242</p>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.539034986878!2d114.5832008144333!3d-3.330889638882879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de421732d3f6eb5%3A0x232688daf21bc8d9!2sINDPAFUM!5e0!3m2!1sid!2sid!4v1774101235146!5m2!1sid!2sid"
                        frameBorder="0"
                        width="100%"
                        height={500}
                        allowFullScreen
                        title="Maps"
                    ></iframe>

                </div>
            </div>

            <div className="absolute top-20 -left-40 w-80 h-110 lg:w-140 lg:h-140 rotate-90 rounded-full bg-[rgba(255,255,223,0.08)] -z-10 blur-2xl pointer-events-none">
            </div>
        </section>
    )
}

export default ContactUs