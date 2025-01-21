import Admission from "@/components/common/Admission";
import HeroSection from "@/components/common/HeroSection";
import { Gallery } from "@/components/common/Gallery";
import Programs from "@/components/common/Programs";
import About from "@/components/common/About";
import Contact from '@/components/common/Contact';
import Footer from "@/components/common/Footer";
import Map from "@/components/common/Map";

export default function Home() {
  return (
    <div className="text-black">
      <HeroSection/>
      <Programs/>
      <Admission/>
      <Gallery/>
      <About/>
      <Contact/>
      <Map/>
      <Footer/>
    </div>
  );
}
