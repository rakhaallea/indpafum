"use client"

import Link from "next/link"
import gsap from "gsap"

import { navLinks } from "@/constant"
import { useState } from "react"
import { useGSAP } from "@gsap/react"

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top -50",
                end: "top -100",
                scrub: true,
            }
        }).fromTo('nav',
            { backgroundColor: 'rgba(37, 39, 38, 1)' },
            { backgroundColor: 'rgba(37, 39, 38, .8)', backdropFilter: 'blur(10px)' }
        );
    });

    return (
        <nav className='fixed z-100 w-full px-4 md:px-8 mx-auto py-10 font-josefin-sans'>
            <div className='flex justify-between md:justify-end items-center'>
                <h1
                    className='lg:w-full lg:pl-28 md:mr-auto text-center font-bold tracking-widest text-xl'>INDPAFUM</h1>
                <div className='flex-center gap-2 md:gap-8'>
                    <Link href={"#"}>
                        <i className="ri-map-pin-line ri-xl"></i>
                    </Link>
                    <Link href={"#"}>
                        <i className="ri-shopping-cart-line ri-xl"></i>
                    </Link>
                    <button onClick={() => setIsActive(!isActive)}>
                        <i className="ri-menu-line ri-xl lg:hidden"></i>
                    </button>
                </div>
            </div>
            <ul className={`absolute top-28 right-4 lg:static z-99 flex-col gap-4 lg:flex-row lg:flex justify-between items-center w-1/2 mx-auto py-6 tracking-widest capitalize bg-[#252726] lg:bg-transparent lg:translate-y-0 transition-all duration-300 lg:transition-none ease-in-out ${!isActive ? "opacity-10 lg:opacity-100 translate-x-250 lg:translate-x-0" : "opacity-100 translate-0"}`}>
                {navLinks.map((nav) => (
                    <li key={nav.id} className="px-6 py-2 lg:px-0 lg:py-0 hover:bg-[#9B7E5B] lg:hover:bg-transparent lg:hover:text-[#9B7E5B]"><Link href={nav.id}>{nav.title}</Link></li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar