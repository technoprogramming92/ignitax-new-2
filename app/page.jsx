import Hero from "./components/Hero";
import GallerySlide from "./components/GallerySlide";
import About from "./components/About";
import Work from "./components/Work";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import Partners from "./components/Partners";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";

export default function Home() {
  return (
    <div className="" id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <Marquee />
        <GallerySlide />
        <Partners />
        <About />

        <Service />
        <Portfolio />
        <Projects />

        <SocialMedia />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
