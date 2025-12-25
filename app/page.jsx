import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AllProduct from '@/components/AllProduct';
import Whyaura from '@/components/Whyaura';
import BestSeller from '@/components/BestSeller';
import SingleProduct from '@/components/SingleProduct';
import LatestProduct from '@/components/LatestProduct';
import FAQ from '@/components/FAQ';
import Socials from '@/components/Socials';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <main className='relative overflow-hidden'>
      <Navbar />
      <Hero />
      <SingleProduct />
      <BestSeller />
      <LatestProduct />
      <AllProduct />
      <Whyaura />
      <FAQ />
      <Socials />
      <ContactUs />
      <Footer />
    </main>
  );
}
