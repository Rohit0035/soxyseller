import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/style/style.css";
import logotwo from "../../../assets/img/logo/logotwo.png";

const Footer = () => {
  return (
    <footer>
      {/* <div className="footer_section1 footer-top black-bg pt-20 pb-30 main-widget">
        <div className="container">
          <div className="row justify-content-between">
            <h1>ehafeebwebwebrbwer</h1>
          </div>
        </div>
      </div> */}

      <div className="footer_section2">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="footer-widget">
                <div className="footer_logo pb-3">
                <a href="/analyticsDashboard">
                   <img src={logotwo} alt="" className="st-logo" width={150} />
                </a>
                </div>
                <div className="fw-text ">
                  <div className="footer-contact-list mt-20">
                    <ul>
                      <li>
                        <span>Phone: </span> 4445454548888
                      </li>
                      <li>
                        <span>Email: </span> Demo@fmo.com
                      </li>
                      <li>
                        <span>Address: 123 demo city , Demo Square </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="fw-title mb-25 text-center">
                  <h5>Commuinity</h5>
                </div>
                <div className="fw-links">
                  <ul className="quick">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/group_tuition">Company</Link>
                    </li>
                    <li>
                      <Link to="/online_tuition">Manufacture</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-3 text-left"></div>
            <div className="col-lg-3 col-md-3 text-left">
              <div className="footer-widget">
                <div className="fw-title mb-25">
                  <h5>Legal</h5>
                </div>
                <div className="fw-links">
                  <ul className="quick">
                    <li>
                      <Link to="/pages/landingPage/termOfUse">
                        Terms Of Use
                      </Link>
                    </li>
                    <li>
                      <Link to="/pages/landingPage/pricacyPolicy">
                        Privacy & policy
                      </Link>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>

                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 text-left">
              <div className="footer-widget" style={{ textAling: "left" }}>
                <div className="fw-title mb-25 ">
                  <h5>Help & Support</h5>
                </div>
                <div className="fw-links" style={{ textAling: "left" }}>
                  <ul className="quick">
                    <li>
                      <Link to="/become_teacher">Support</Link>
                    </li>
                    <li>
                      <Link to="/become_teacher">Help Center</Link>
                    </li>
                    <li>
                      <Link to="/pages/landingPage/faqPage">Faq</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
              <div className="footer-widget ">
                <div className="fw-title mb-25">
                  <h1>Subscribe Now</h1>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-100 footer_copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text">
                  Copyright © 2020 Soxycoin Ecommerce . All Rights Reserved.
                </div>
              </div>
              <div className="col-md-3">
                {/* <div className="copyright-text top_bar">
                                    Top Bar <img src={footericon1} alt="" />
                                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
