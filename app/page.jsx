import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Bestseller from '@/components/Bestseller';
import Whyaura from '@/components/Whyaura';
import AuraProducts from '@/components/AuraProducts';
import SingleProduct from '@/components/SingleProduct';
import FAQ from '@/components/FAQ';
import Socials from '@/components/Socials';
import ContactUs from '@/components/ContactUs';
import Footer from '@/components/Footer';

import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <Bestseller />
      <Whyaura />
      <AuraProducts />
      <SingleProduct />
      <FAQ />
      <Socials />
      <ContactUs />
      <Footer />
    </main>
  );
}
