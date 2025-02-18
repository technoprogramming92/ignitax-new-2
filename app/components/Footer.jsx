import React from "react";

export default function Footer() {
  return (
    <footer className="footer-two-area bg_dp_black ">
      <div className="container container-semi-large">
        <div className="row gy-5 justify-content-between section-padding-top section-padding-bottom overflow-hidden">
          <div className="col-lg-4">
            <div className="footer-widgets-two">
              <div className="footer-two-company-info text-center text-lg-start">
                <h2 className="text_light_white bounce-text">Axole Agency</h2>
                <a
                  className="d-block address-link mt-3 mb-4 text_light_white"
                  href="https://themeforest.wprealizer.com/cdn-cgi/l/email-protection#3071485f5c557054555d5f1e535f5d"
                >
                  <span
                    className="__cf_email__"
                    data-cfemail="26675e494a436642434b490845494b"
                  >
                    [email&#160;protected]
                  </span>
                </a>
                <img src="/images/footer-two-logo.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widgets-two">
              <ul className="custom-ul footer-two-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="career.html">Careers</a>
                </li>
                <li>
                  <a href="portfolio-grid.html">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widgets-two">
              <div className="footer-two-address-wrap d-flex flex-column">
                <div className="address-info-box text-center text-lg-start">
                  <h2 className="text_light_white footer-address-title">
                    Location
                  </h2>
                  <p className="text_light_white">
                    New York — 785 18h Street, Office 778 Berlin, De 81226
                  </p>
                </div>
                <div className="address-info-box text-center text-lg-start">
                  <h2 className="text_light_white footer-address-title">
                    Follow Us
                  </h2>
                  <ul className="custom-ul address-info-social d-flex justify-content-center justify-content-lg-start flex-wrap gap-3">
                    <li>
                      <a href="#">FB</a>
                    </li>
                    <li>
                      <a href="#">LN</a>
                    </li>
                    <li>
                      <a href="#">IN</a>
                    </li>
                    <li>
                      <a href="#">BE</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pe-0 ps-0">
        <div className="col-lg-12">
          <div className="swiper footer-two-touch">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <h2 className="text_light_white footer-two-touch-text d-flex align-items-center">
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.4393 61.0897L10.018 51.6685L45.6523 16.034L46.6766 15.0097L45.228 15.0097L1.54986 15.0097L17.377 0.600005L54.3101 0.600011L69.3199 0.600014L69.3199 15.6097L69.3199 52.6211L54.9101 68.4496L54.9101 27.0687L54.9101 25.6202L53.8858 26.6444L19.4393 61.0897Z"
                      stroke="#FFFCF4"
                      strokeWidth="1.2"
                    />
                  </svg>
                  GET IN TOUCH
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-semi-large">
        <div className="row">
          <div className="col-lg-12">
            <div className=" pt-3 pb-3 d-flex flex-wrap justify-content-center">
              <p className="text_light_white">
                © 2024 All Rights Reserved By Axole
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
