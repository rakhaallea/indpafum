"use client"

import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { navLinks } from "@/constant"
import { useState } from "react"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const [activeLink, setActiveLink] = useState("#home")

    useGSAP(() => {
        gsap.fromTo(
            "nav",
            {
                backgroundColor: "rgba(37, 39, 38, 0)",
                backdropFilter: "blur(0px)",
            },
            {
                backgroundColor: "rgba(37, 39, 38, 0.8)",
                backdropFilter: "blur(10px)",
                ease: "none",
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: "top top",
                    end: "+=120",
                    scrub: true,
                },
            }
        )
    })

    return (
        <nav className='fixed top-0 left-0 z-50 w-full px-4 md:px-8 py-6 md:py-8 font-josefin-sans'>
            <div className='flex justify-between md:justify-end items-center'>
                <h1 className='lg:w-full md:mr-auto text-center font-bold tracking-widest text-xl'>
                    INDPAFUM
                </h1>

                <div className='flex-center gap-4 md:gap-8'>
                    <Link
                        href={"https://maps.app.goo.gl/XGzdrwRhuHCN5Ed36"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="ri-map-pin-line ri-xl"></i>
                    </Link>

                    <button onClick={() => setIsActive(!isActive)}>
                        <i className="ri-menu-line ri-xl lg:hidden"></i>
                    </button>
                </div>
            </div>

            <ul
                className={`absolute top-24 right-4 lg:static z-40 flex-col gap-4 lg:flex-row lg:flex justify-between items-center w-1/2 mx-auto py-6 tracking-widest capitalize bg-[#252726] lg:bg-transparent lg:translate-y-0 transition-all duration-300 ease-in-out ${!isActive
                    ? "opacity-0 pointer-events-none translate-x-40 lg:opacity-100 lg:pointer-events-auto lg:translate-x-0"
                    : "opacity-100 translate-x-0"
                    }`}
            >
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`px-6 py-2 lg:px-0 lg:py-0 transition-all
        ${activeLink === nav.id
                                ? "text-[#9B7E5B] font-semibold"
                                : "hover:bg-[#9B7E5B] lg:hover:bg-transparent lg:hover:text-[#9B7E5B]"
                            }`}
                    >
                        <Link
                            href={nav.id}
                            onClick={() => {
                                setIsActive(false)
                                setActiveLink(nav.id)
                            }}
                        >
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar