import hero1 from '@/public/img/1.png'
import hero2 from '@/public/img/2.png'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="relative w-full max-h-dvh flex flex-col lg:flex-row overflow-hidden md:gap-0 lg:gap-60" id='home'>

            {/* Gambar */}
            <div className="flex-1 overflow-hidden">
                <Image src={hero1} alt="hero-1" className="md:w-1/2 lg:w-full h-full object-cover object-bottom lg:object-[40%_50%]" />
            </div>
            <div className="flex-1 overflow-hidden">
                <Image src={hero2} alt="hero-2" className="md:w-1/2 lg:w-full h-full object-cover object-bottom lg:object-[50%_150%] place-self-end scale-140" />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="
            flex flex-col gap-6 md:gap-7
            w-full max-w-[500px] lg:h-full
            text-center font-josefin-sans
            bg-linear-to-br from-[#9B7E5B] from-55% to-[#D7CABB]
            px-6 md:px-12 lg:px-16
            pt-12 pb-6 md:pt-16 lg:pt-20
            lg:[clip-path:polygon(0%_0%,100%_0%,80%_100%,20%_100%)]">

                    <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-widest">
                        Temukan Aura Terbaik Anda
                    </h1>

                    <p className="text-xs md:text-base font-light lg:px-3 tracking-widest capitalize">
                        Setiap aroma Indpafum diracik dari esensi langka dan premium, diciptakan untuk menjadi lebih dari sekadar wewangian—tetapi sebuah identitas. Kenakan keyakinan Anda dan biarkan keunikan diri Anda bersinar. Ini adalah parfum yang tidak hanya tercium, tetapi terasa
                    </p>

                    <Link href="#" className="uppercase text-sm md:text-base font-semibold tracking-wider">
                        Shop Now <i className="ri-arrow-right-line"></i>
                    </Link>

                    <div>
                        <h3 className="font-bold text-lg tracking-wider">100k+</h3>
                        <p className="px-10 md:px-14">
                            Delighted client drawn to the signature aura it exudes
                        </p>
                    </div>

                    <Link href="#bestsellers" className="flex flex-col gap-1 items-center mt-4">
                        <p className="text-sm">Scroll Down</p>
                        <i className="ri-arrow-down-s-line ri-xl"></i>
                    </Link>
                </div>
            </div>

        </div>

    )
}

export default Hero