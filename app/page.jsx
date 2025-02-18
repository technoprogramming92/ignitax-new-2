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

export default function Home() {
  return (
    <div className="" id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <GallerySlide />
        <About />
        <Work />
        <Service />
        <Portfolio />
        <Team />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
