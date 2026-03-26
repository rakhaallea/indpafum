

import Link from "next/link"

import { socials } from "@/constant"

const Socials = () => {
    return (
        <div className='pt-20 pb-20 relative px-6' id="socials">
            <div
                className="socials-container">

                <h2 className='text-2xl md:text-5xl font-prata'>Follow, Share & Be Seen</h2>
                <div className='flex flex-col gap-2 tracking-widest'>
                    <p className='text-sm hidden md:block md:text-xl font-medium'>Tunjukkan vibe kamu bersama INDPAFUM.</p>
                    <p className='font-light text-xs md:text-lg md:px-24'>Tunjukkan gaya Anda melalui <span className='font-bold'>INDPAFUM.</span>
                        Tag kami di reels dan stories, dan biarkan karakter Anda menginspirasi komunitas kami.
                    </p>
                </div>

                <div className='flex gap-4 justify-center items-center pb-2'>
                    {
                        socials.map((social) => (
                            <Link href={social.url} key={social.name} target="_blank">
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