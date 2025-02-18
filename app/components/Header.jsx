import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <div className="menu-area menu-area-two">
          <div className="container container-semi-large">
            <div className="row align-items-center position-relative">
              <div className="col-lg-3 hamburger-menu position-relative">
                <div className="menu-logo-wrap">
                  <a href="index.html">
                    <img src="images/logo.svg" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-9 d-none d-lg-block">
                <div className="nav-wrap d-flex justify-content-between align-items-center">
                  <nav className="mainmenu text-right">
                    <ul className="home-menu">
                      <li className="has-child-menu has-child-menu-mega-menu">
                        <a href="javascript:void(0)">Demo</a>
                        <div className="sub-nav">
                          <div className="container container-semi-large">
                            <div className="row gy-4">
                              <div className="col-lg-3">
                                <div className="nav-item text-center position-relative">
                                  <div className="nav-item-img overflow-hidden position-relative">
                                    <img
                                      className="w-100"
                                      src="images/menu-mega-1.png"
                                      alt=""
                                    />
                                  </div>
                                  <h6 className="mt-3">
                                    Digital Agency Modern
                                  </h6>
                                  <a
                                    className="position-absolute h-100 w-100 start-0 top-0 z-index-one"
                                    href="index.html"
                                  ></a>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="nav-item text-center position-relative">
                                  <div className="nav-item-img overflow-hidden position-relative">
                                    <img
                                      className="w-100"
                                      src="images/menu-mega-2.png"
                                      alt=""
                                    />
                                  </div>
                                  <h6 className="mt-3">
                                    Digital Agency Classic
                                  </h6>
                                  <a
                                    className="position-absolute h-100 w-100 start-0 top-0 z-index-one"
                                    href="index-2.html"
                                  ></a>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="nav-item text-center position-relative">
                                  <div className="nav-item-img overflow-hidden position-relative">
                                    <img
                                      className="w-100"
                                      src="images/menu-mega-3.png"
                                      alt=""
                                    />
                                  </div>
                                  <h6 className="mt-3">Design Studio</h6>
                                  <a
                                    className="position-absolute h-100 w-100 start-0 top-0 z-index-one"
                                    href="index-3.html"
                                  ></a>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="nav-item text-center position-relative">
                                  <div className="nav-item-img overflow-hidden position-relative">
                                    <img
                                      className="w-100"
                                      src="images/menu-mega-4.png"
                                      alt=""
                                    />
                                  </div>
                                  <h6 className="mt-3">Corporate</h6>
                                  <a
                                    className="position-absolute h-100 w-100 start-0 top-0 z-index-one"
                                    href="index-4.html"
                                  ></a>
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="nav-item text-center position-relative">
                                  <div className="nav-item-img overflow-hidden position-relative">
                                    <img
                                      className="w-100"
                                      src="images/menu-mega-5.png"
                                      alt=""
                                    />
                                  </div>
                                  <h6 className="mt-3">Personal Portfolio</h6>
                                  <a
                                    className="position-absolute h-100 w-100 start-0 top-0 z-index-one"
                                    href="index-5.html"
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <a href="index.html">Agency Modern</a>
                          </li>
                          <li>
                            <a href="index-2.html">Agency Classic</a>
                          </li>
                          <li>
                            <a href="index-3.html">Design Studio</a>
                          </li>
                          <li>
                            <a href="index-4.html">Corporate</a>
                          </li>
                          <li>
                            <a href="index-5.html">Personal Portfolio</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="has-child-menu">
                        <a href="javascript:void(0)">Blog</a>
                        <ul>
                          <li>
                            <a href="blog-classic.html">Blog Classic</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Blog Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu">
                        <a href="javascript:void(0)">Pages</a>
                        <ul>
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="portfolio-grid.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                    <div className="menu-btn-wrap flex-shrink-0 d-lg-none pb-5 pt-3 ps-4">
                      <a
                        className="common-design-btn only-border border-white"
                        href="contact.html"
                      >
                        <span className="btn-flip">
                          <span data-text="Let's Connect">Let's Connect</span>
                        </span>
                      </a>
                    </div>
                  </nav>
                  <div className="menu-btn-wrap flex-shrink-0 d-none d-lg-block">
                    <a
                      className="common-design-btn only-border"
                      href="contact.html"
                    >
                      <span className="btn-flip">
                        <span data-text="Let's Connect">Let's Connect</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
