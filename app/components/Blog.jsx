import React from "react";

export default function Blog() {
  return (
    <section className="blog-area-two bg_color_gray section-padding-bottom">
      <div className="container container-semi-large">
        <div className="row align-items-end gy-4 section-border-black pb-4 pb-lg-5">
          <div className="col-lg-8">
            <div className="section-title-two">
              <span className="d-inline-block position-relative">
                BLOGS & NEWS
              </span>
              <h2 className="h2 char-animation">Our latest stories</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a
              className="common-design-btn only-border btn-bounce btn-trigger"
              href="blog-classic.html"
            >
              <span className="btn-flip">
                <span data-text="See All News">See All News</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="container custom-container custom-container-semi-large">
        <div className="row row-top-margin">
          <div className="col-lg-12 pe-lg-0">
            <div className="swiper blog-two-slide">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog-two-box">
                    <div className="blog-two-img position-relative overflow-hidden">
                      <img
                        className="w-100 h-100 ft_object position-absolute top-0 start-0"
                        src="/images/blog/blog-2-1.png"
                        alt=""
                      />
                    </div>
                    <div className="blog-two-info mt-3">
                      <span className="meta text_black d-inline-block">
                        24 June, 2024
                      </span>
                      <h3 className="h3 blog-two-title mt-2">
                        <a href="blog-single.html">
                          Superior space eco friendly digital solution
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog-two-box">
                    <div className="blog-two-img position-relative overflow-hidden">
                      <img
                        className="w-100 h-100 ft_object position-absolute top-0 start-0"
                        src="/images/blog/blog-2-2.png"
                        alt=""
                      />
                    </div>
                    <div className="blog-two-info mt-3">
                      <span className="meta text_black d-inline-block">
                        24 June, 2024
                      </span>
                      <h3 className="h3 blog-two-title mt-2">
                        <a href="blog-single.html">
                          Unveiling the influence of branding through Axole
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
