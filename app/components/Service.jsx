import React from "react";

export default function Service() {
  return (
    <section className="service-area-two section-padding-top bg_color_gray">
      <div className="container container-semi-large">
        <div className="row align-items-end gy-4">
          <div className="col-lg-8">
            <div className="section-title-two">
              <span className="d-inline-block position-relative">
                OUR SERVICES
              </span>
              <h2 className="h2 char-animation">Our unique services</h2>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <a
              className="common-design-btn only-border btn-trigger btn-bounce"
              href="service.html"
            >
              <span className="btn-flip">
                <span data-text="See All Services">See All Services</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="work-process-count service-two-wrapper row-top-margin">
        <div
          className="service-two-box-wrap"
          style={{ borderTop: "1px solid #ddd" }}
        >
          <div className="container container-semi-large">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-two-box">
                  <div className="service-two-info-wrap d-flex flex-column flex-xl-row justify-content-xl-between">
                    <h2 className="reveal_anim-2">
                      <a
                        className="text-black no-underline"
                        href="service.html"
                      >
                        Brand Design
                      </a>
                    </h2>
                    <p>
                      We believe that, exceptional design is the main
                      cornerstone of effective new digital experiences.
                    </p>
                  </div>
                  <ul className="custom-ul d-flex flex-wrap service-showcases">
                    <li>BRAND IDENTITY DESIGN</li>
                    <li>UI/UX DESIGN</li>
                    <li>PRODUCT DESIGN</li>

                    <li>GRAPHICS / POST DESIGN</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-two-box-wrap bg-[#65DA7C]">
          <div className="container container-semi-large">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-two-box">
                  <div className="service-two-info-wrap d-flex flex-column flex-xl-row justify-content-xl-between">
                    <h2 className="reveal_anim-2">
                      <a
                        className="text-black no-underline text-8xl"
                        href="service.html"
                      >
                        Web/App Development
                      </a>
                    </h2>
                    <p>
                      We believe that, exceptional design is the main
                      cornerstone of effective new digital experiences.
                    </p>
                  </div>
                  <ul className="custom-ul d-flex flex-wrap service-showcases">
                    <li>WEB DEVELOPMENT</li>
                    <li>APP DEVELOPMENT</li>
                    <li>SOFTWARE DEVELOPMENT</li>
                    <li>E COMMERCE</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-two-box-wrap bg-[#E6EBD4]">
          <div className="container container-semi-large">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-two-box">
                  <div className="service-two-info-wrap d-flex flex-column flex-xl-row justify-content-xl-between">
                    <h2 className="reveal_anim-2">
                      <a
                        className="text-black no-underline text-8xl"
                        href="service.html"
                      >
                        Marketing
                      </a>
                    </h2>
                    <p>
                      We believe that, exceptional design is the main
                      cornerstone of effective new digital experiences.
                    </p>
                  </div>
                  <ul className="custom-ul d-flex flex-wrap service-showcases">
                    <li>SEO EXPERT</li>
                    <li>SOCIAL MEDIA MARKETING</li>
                    <li>PPC</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
