import Navbar from '@/components/Navbar';
import Hero from '@/components/landing/HeroSection';
import AllProduct from '@/components/landing/CategoryProductTabs';
import Whyaura from '@/components/landing/Whyaura';
import BestSeller from '@/components/landing/BestSellerCard';
import HeroProduct from '@/components/landing/HeroProduct';
import LatestProduct from '@/components/landing/LatestProduct';
import FAQ from '@/components/landing/FAQ';
import Socials from '@/components/Socials';
import ContactUs from '@/components/landing/ContactUs';
import Footer from '@/components/Footer';

// import gsap from "gsap"
// import { ScrollTrigger, SplitText } from "gsap/all"

// gsap.registerPlugin(ScrollTrigger, SplitText)

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      {/* <HeroProduct /> */}
      <BestSeller />
      <AllProduct />
      <LatestProduct />
      {/* <Whyaura /> */}
      <FAQ />
      <Socials />
      <ContactUs />
      <Footer />
    </main>
  );
}
