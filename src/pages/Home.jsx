import AboutStudio from "../components/AboutStudio";
import CTA from "../components/CTA";
import FeaturedWork from "../components/FeaturedWork";
import Hero from "../components/Hero";
import InstagramGallery from "../components/InstagramGallery";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutStudio />
      <Services />
      <Testimonials />
      <InstagramGallery />
      <CTA />
    </>
  );
}
