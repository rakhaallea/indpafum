import Image from "next/image"
import Link from "next/link"

import imgPafum from "@/public/img/3.png"

import { socials } from "@/constant"

const Socials = () => {
    return (
        <div className='pt-20 pb-20 relative px-6' id="socials">
            <div
                className="socials-container">

                <h1 className='text-2xl md:text-5xl font-prata'>Follow, Share & Be Seen</h1>
                <div className='flex flex-col gap-2 tracking-widest'>
                    <p className='text-sm md:text-xl font-medium'>Join the Aurafume Experience - your story deserves the spotlight</p>
                    <p className='font-light text-xs md:text-lg'>We love how you wear <span className='font-bold'>Aurafume</span>.<br />
                        Tag us in your reels and stories, and we’ll repost and showcase your vibe with the <br /> <span className='font-bold'>Aurafume</span> comunity.
                    </p>
                </div>

                <div className='flex gap-4 justify-center items-center pb-2'>
                    {
                        socials.map((social) => (
                            <Link href={social.url} key={social.name}>
                                <i className={`${social.icon} text-2xl md:text-5xl hover:text-[#D7CABB] duration-150 transition-all `}></i>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="absolute top-20 left-0 w-190 h-190 rounded-full bg-[rgba(255,255,223,0.06)] -z-10 blur-2xl pointer-events-none">
            </div>
        </div>
    )
}

export default Socials