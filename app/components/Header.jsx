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
                      <li>
                        <a href="index.html">Home</a>{" "}
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="has-child-menu">
                        <a href="javascript:void(0)">Services</a>
                        <ul>
                          <li>
                            <a href="blog-classic.html">Marketing</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Web Development</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Software Development</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Designing</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Fun Corner</a>
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
