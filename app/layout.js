import Header from "./components/Header";
import Preloader from "./components/Preloader";
import "./globals.css";
import { Unbounded, Instrument_Sans } from "next/font/google";
import Script from "next/script";

export const metadata = {
  title: "IGNITAX",
  description: "Your Virtual Service Provider",
};

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "400", "900"],
});
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/plugins.css" />
      </head>
      <body className={`${unbounded.className} ${instrumentSans.className}`}>
        {/* jQuery JS */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

        {/* Bootstrap JS */}
        <Script
          src="/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />

        {/* MixItUp JS */}
        <Script src="/js/jquery.mixitup.min.js" strategy="lazyOnload" />

        {/* Swiper Carousel JS */}
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />

        {/* Magnific Popup JS */}
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />

        {/* Odometer JS */}
        <Script src="/js/odometer.min.js" strategy="lazyOnload" />
        <Script src="/js/viewport.jquery.js" strategy="lazyOnload" />

        {/* Mean menu JS */}
        <Script src="/js/jquery.meanmenu.min.js" strategy="lazyOnload" />

        {/* GSAP & Plugins */}
        <Script src="/js/gsap.js" strategy="lazyOnload" />
        <Script src="/js/gsap-scroll-smoother.js" strategy="lazyOnload" />
        <Script src="/js/gsap-scroll-to-plugin.js" strategy="lazyOnload" />
        <Script src="/js/gsap-scroll-trigger.js" strategy="lazyOnload" />
        <Script src="/js/gsap-split-text.js" strategy="lazyOnload" />

        {/* Chroma and Split-Type JS */}
        <Script src="/js/chroma.min.js" strategy="lazyOnload" />
        <Script src="/js/split-type.js" strategy="lazyOnload" />

        {/* Main JS */}
        <Script src="/js/main.js" strategy="lazyOnload" />
        {/* <Preloader /> */}
        <a href="#" id="scroll-top" className="back-to-top-btn">
          <i className="bi bi-arrow-up"></i>
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
