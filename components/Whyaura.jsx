import imgModel from '@/public/img/model.png';
import imgPafum from '@/public/img/4.png';


import Image from 'next/image'

const Whyaura = () => {
    return (
        <div className='whyaura'>

            <div className='whyaura-text-content'>
                <h1 className='text-4xl lg:text-5xl font-prata'>Why You Need Aura</h1>
                <div>
                    <h3 className='font-poppins text-xl lg:text-2xl font-semibold mb-2'>Because Your presence deserves a signatture</h3>
                    <p className='font-pt-mono text-sm lg:text-2xl'>Your scent us the silent introduction you carry into every room - a trace of emotion, confidence, and memory. At Auralume, we believe every soul has a scent, a story, an aura. Wearing the right fragrance isn’t just about smelling good - it’s about feeling seen, felt, and remembered.
                    </p>
                </div>

                <p className='font-poppins text-base lg:text-2xl font-light pr-10 lg:pr-40'>Whether you’re bold and magnetic or calm and poetic, your aura deserves to be expressed.</p>

                <button className="btn-primary-outline font-prata">
                    <div
                        className="py-2 px-8 text-xl bg-background hover:bg-[linear-gradient(90deg,rgba(255,255,255,0.2),rgba(153,153,153,0.1))] rounded-full  duration-300 cursor-pointer transition-all">
                        Find your aura
                    </div>
                </button>
            </div>

            <div className='whyaura-img-content'>
                <div className='primary'>
                    <Image src={imgModel} className='w-full h-full object-cover object-[50%_-90%] scale-110' alt="img-model" />
                </div>
                <div className='secondary'>
                    <Image src={imgPafum} className='w-full h-full object-cover object-[50%_30%]' alt="img-model" />
                </div>
            </div>

            <div className="absolute top-60 right-20 w-190 h-190 rounded-full bg-[rgba(255,255,223,0.06)] blur-2xl pointer-events-none">
            </div>

        </div>
    )
}

export default Whyaura