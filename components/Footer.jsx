import Link from "next/link";
import Image from "next/image";

import logo from "@/public/img/logo.png"

import { listShop, listServices, listDelivery } from "@/constant"

const Footer = () => {
    return (
        <div className="footer">
            <div className="subscribe">
                <h2 className="text-3xl">Subscribe To Our Newsletter</h2>
                <div className="flex flex-col md:px-20 lg:px-0 lg:flex-row gap-4 md:gap-6">
                    <input type="text" className="bg-white text-slate-700 ring-0 w-full py-2 md:py-4 px-4 rounded-2xl" placeholder="Enter your email" />
                    <button
                        href={'#'}
                        className="py-2 md:py-2 px-6 rounded-xl border-[.8px] btn-primary md:text-lg font-prata font-medium">
                        Subscribe
                    </button>
                </div>
                {/* <div className='flex gap-4 justify-center items-center pb-2'>
                    {
                        socials.map((social) => (
                            <Link href={social.url} key={social.name}>
                                <i className={`${social.icon} text-2xl md:text-5xl hover:text-[#D7CABB] duration-150 transition-all`}></i>
                            </Link>
                        ))
                    }
                </div> */}
            </div>

            <div className="navlinks">
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl">INDPAFUME</h1>
                    <p className="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <span className="flex gap-2 items-center">
                        <i className="ri-map-pin-line"></i>
                        <Link href={'https://maps.app.goo.gl/XGzdrwRhuHCN5Ed36'} target="_blank" className="text-sm">INDPAFUM STORE TIRAM</Link>
                    </span>
                    <span className="flex gap-2 items-center">
                        <i className="ri-map-pin-line"></i>
                        <Link href={'https://maps.app.goo.gl/wArjxwCipjo12PaL6'} target="_blank" className="text-sm">INDPAFUM STORE KELAYAN
                        </Link>
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
                            listServices.map((services, index) => (
                                <li key={services.name} className="hover:text-[#D7CABB] duration-150 transition-all"><Link href={services.url} target={`${index === 0 ? '_blank' : ''}`}>{services.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl">Help</h1>
                    <ul className="text-sm flex flex-col gap-2">
                        {
                            listDelivery.map((delivery) => (
                                <li key={delivery.name} className="hover:text-[#D7CABB] duration-150 transition-all"><Link href={delivery.url} target="_blank">{delivery.name}</Link></li>
                            ))
                        }
                    </ul>
                </div>


            </div>

            <div className="flex justify-center items-center mt-20">
                <Image
                    src={logo}
                    width={250}
                    height={50}
                    className="w-auto h-auto"
                    alt="logo Indpafume" />
            </div>

            <div className="absolute top-60 -right-40 w-180 h-180 rounded-full bg-[rgba(255,255,223,0.06)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default Footer