import imgModel from '@/public/img/model.png';
import imgPafum from '@/public/img/4.png';


import Image from 'next/image'

const Whyaura = () => {
    return (
        <div className='relative h-auto pt-30 flex flex-col md:flex-row justify-between px-4 lg:px-20 gap-12　overflow-hidden'>

            <div className='pt-30 md:pt-20 lg:pt-30 pb-30 flex flex-col gap-12 justify-center items-start tracking-widest order-2 md:order-1'>
                <h1 className='text-4xl lg:text-5xl font-prata'>Why You Need Aura</h1>
                <div>
                    <h3 className='font-poppins text-xl lg:text-2xl font-semibold mb-2'>Because Your presence deserves a signatture</h3>
                    <p className='font-pt-mono text-sm lg:text-2xl'>Your scent us the silent introduction you carry into every room - a trace of emotion, confidence, and memory. At Auralume, we believe every soul has a scent, a story, an aura. Wearing the right fragrance isn’t just about smelling good - it’s about feeling seen, felt, and remembered.
                    </p>
                </div>

                <p className='font-poppins text-base lg:text-2xl font-light pr-10 lg:pr-40'>Whether you’re bold and magnetic or calm and poetic, your aura deserves to be expressed.</p>

                <button className="p-[.8px] rounded-full bg-[linear-gradient(90deg,#FFFFFF,#999999)] font-prata">
                    <div
                        className="bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full py-2 px-8 text-xl duration-300 cursor-pointer transition-all">
                        Find your aura
                    </div>
                </button>
            </div>

            <div className='relative order-1 md:order-2'>
                <div className='mx-auto w-69 h-120 lg:w-99 lg:h-145 rounded-full overflow-hidden'>
                    <Image src={imgModel} className='w-full h-full object-cover object-[50%_-90%] scale-110' alt="img-model" />
                </div>
                <div className='absolute -bottom-24 left-0 md:bottom-24 md:-left-14 lg:bottom-40 2xl:bottom-14 lg:-left-20 w-32 h-60 lg:w-52 lg:h-70 rounded-full overflow-hidden z-99'>
                    <Image src={imgPafum} className='w-full h-full object-cover object-[50%_30%]' alt="img-model" />
                </div>
            </div>

            <div className="absolute top-60 right-20 w-190 h-190 rounded-full bg-[rgba(255,255,223,0.06)] blur-2xl pointer-events-none">
            </div>


        </div>
    )
}

export default Whyaura