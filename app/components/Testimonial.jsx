import React from "react";

export default function Testimonial() {
  return (
    <section className="testimonial-area-two bg_color_gray section-padding-top section-padding-bottom">
      <div className="container container-semi-large">
        <div className="row justify-content-between gy-4">
          <div className="col-lg-7 order-1 order-lg-0">
            <div className="section-title-two">
              <span className="d-inline-block position-relative">
                TESTIMONIALS
              </span>
              <h2 className="h2 char-animation">Discover Customer’s Reviews</h2>
            </div>
            <div className="swiper testimonial-two-slide mt-3 mt-lg-4 mt-xxl-5">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-two-info">
                    <p>
                      "Axole has been instrumental in boosting our online
                      visibility and driving customer engagement. Their tailored
                      strategies and exceptional execution have delivered
                      outstanding results for our business. We highly recommend
                      their services."
                    </p>
                    <ul className="testimonial-two-meta custom-ul d-flex align-items-center">
                      <li>
                        <h3 className="h3">Kevin Thompson</h3>
                      </li>
                      <li>Managing Director of Swift</li>
                    </ul>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-two-info">
                    <p>
                      "Axole has been instrumental in boosting our online
                      visibility and driving customer engagement. Their tailored
                      strategies and exceptional execution have delivered
                      outstanding results for our business. We highly recommend
                      their services."
                    </p>
                    <ul className="testimonial-two-meta custom-ul d-flex align-items-center">
                      <li>
                        <h3 className="h3">Kevin Thompson</h3>
                      </li>
                      <li>Managing Director of Swift</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="slider-button-wrap-arrow arrow-two d-flex align-items-center">
                <div className="testimonial-two-button-prev slide-btn black-button slide-btn-prev">
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1L1 8L8 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="testimonial-two-button-next slide-btn black-button slide-btn-next ms-3">
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.999999 1L8 8L1 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-two-img-wrap overflow-hidden">
              <img
                data-speed=".8"
                className="w-100 h-100 ft_object"
                src="/images/testimonial/tm-2-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
