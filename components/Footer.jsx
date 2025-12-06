import Link from "next/link"

import { socials, listShop, listServices, listDelivery } from "@/constant"

const Footer = () => {
    return (
        <div className="pt-10 pb-30 md:pt-20 font-prata px-4 md:px-0 relative overflow-hidden">
            <div className="w-full md:w-1/2 mx-auto text-center  flex flex-col gap-8">
                <h2 className="text-3xl">Subscribe To Our Newsletter</h2>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <input type="text" className="bg-white text-slate-700 ring-0 w-full py-2 md:py-4 px-4 rounded-2xl" placeholder="Enter your email" />
                    <button
                        href={'#'}
                        className="py-2 md:py-px px-6 rounded-xl border-[.8px] bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] text-center text-sm md:text-lg font-light cursor-pointer">
                        Subscribe
                    </button>
                </div>
                <div className='flex gap-4 justify-center items-center pb-2'>
                    {
                        socials.map((social) => (
                            <Link href={social.url} key={social.name}>
                                <i className={`${social.icon} text-2xl md:text-5xl hover:text-[#D7CABB] duration-150 transition-all`}></i>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-0 md:px-20 lg:px-40 gap-10 md:gap-20">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl">INDPAFUME</h1>
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <span className="flex gap-2 items-center">
                        <i className="ri-map-pin-line"></i>
                        <p className="text-sm">Jl Teluk Tiram xxxxxx</p>
                    </span>
                </div>

                <div className="flex flex-col gap-4 ">
                    <h1 className="text-2xl">Shop</h1>
                    <ul className="text-sm flex flex-col gap-2">
                        {
                            listShop.map((shop) => (
                                <li key={shop.name} className="hover:text-[#D7CABB] duration-150 transition-all"><Link href={shop.url}>{shop.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl">Customer Services</h1>
                    <ul className="text-sm flex flex-col gap-2">
                        {
                            listServices.map((services) => (
                                <li key={services.name} className="hover:text-[#D7CABB] duration-150 transition-all"><Link href={services.url}>{services.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl">Delivery</h1>
                    <ul className="text-sm flex flex-col gap-2">
                        {
                            listDelivery.map((delivery) => (
                                <li key={delivery.name} className="hover:text-[#D7CABB] duration-150 transition-all"><Link href={delivery.url}>{delivery.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="absolute top-60 -right-40 w-180 h-180 rounded-full bg-[rgba(255,255,223,0.06)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default Footer