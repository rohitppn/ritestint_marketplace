"use client";
import Link from "next/link";
import FooterHeader from "./FooterHeader";
import { usePathname } from "next/navigation";
import FooterSelect2 from "./FooterSelect2";
import { about, category, support } from "@/data/footer";

export default function Footer() {
  const path = usePathname();

  return (
    <>
      <section
        className={`footer-style1 pt25 pb-0 
                ${
                  path === "/home-2"
                    ? "at-home6 home2-footer-radius"
                    : path === "/home-4"
                    ? "at-home7"
                    : path === "/home-6"
                    ? "at-home6"
                    : path === "/home-10"
                    ? "at-home10"
                    : path === "/home-11"
                    ? "at-home11"
                    : ""
                }
                 `}
      >
        <div className="container">
          <FooterHeader />
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div
                className={`link-style1 mb-4 mb-sm-5 ${
                  path === "/home-4"
                    ? "light-style at-home8"
                    : path === "/home-11"
                    ? "light-style at-home11"
                    : ""
                }`}
              >
                <h5
                  className={`mb15 ${path !== "/home-4" ? "text-white" : ""}`}
                >
                  About
                </h5>
                <div className="link-list">
                  {about.map((item,i) => (
                    <Link key={ i } href={item.path}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className={`link-style1 mb-4 mb-sm-5 ${
                  path === "/home-4"
                    ? "light-style at-home8"
                    : path === "/home-11"
                    ? "light-style at-home11"
                    : ""
                }`}
              >
                <h5
                  className={`mb15 ${path !== "/home-4" ? "text-white" : ""}`}
                >
                  Categories
                </h5>
                <ul className="ps-0">
                  {category.map((item,i) => (
                    <li key={ i }>
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div
                className={`link-style1 mb-4 mb-sm-5 ${
                  path === "/home-4"
                    ? "light-style at-home8"
                    : path === "/home-11"
                    ? "light-style at-home11"
                    : ""
                }`}
              >
                <h5
                  className={`mb15 ${path !== "/home-4" ? "text-white" : ""}`}
                >
                  Support
                </h5>
                <ul className="ps-0">
                  {support.map((item,i) => (
                    <li key={ i }>
                      <Link href={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-widget">
                <div className="footer-widget mb-4 mb-sm-5">
                  <div className="mailchimp-widget">
                    <h5 className="title text-white mb20">Subscribe</h5>
                    <div
                      className={`mailchimp-style1 ${
                        path === "/home-11" ? " at-home11" : ""
                      }`}
                    >
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                      />
                      <button type="submit">Send</button>
                    </div>
                  </div>
                </div>
                <div className="app-widget mb-4 mb-sm-5">
                  <h5 className="title text-white mb20">Apps</h5>
                  <div className="row mb-4 mb-lg-5">
                    <div className="col-lg-12">
                      <a className="app-list d-flex align-items-center mb10">
                        <i className="fab fa-apple fz17 mr15" />
                        <h6
                          className={`app-title fz15 fw400 mb-0 ${
                            path === "/home-11" ? "text-white" : ""
                          }`}
                        >
                          iOS App
                        </h6>
                      </a>
                      <a className="app-list d-flex align-items-center">
                        <i className="fab fa-google-play fz15 mr15" />
                        <h6
                          className={`app-title fz15 fw400 mb-0 ${
                            path === "/home-11" ? "text-white" : ""
                          }`}
                        >
                          Android App
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-bdrt1 py-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-center text-lg-start">
                <p
                  className={`copyright-text mb-2 mb-md-0  ${
                    path === "/home-11" ? "text-white" : "text-white-light"
                  } ff-heading`}
                >
                  © Freeio. 2023{" "}
                  <Link
                    href="https://themeforest.net/user/ib-themes/portfolio"
                    target="_blank"
                    style={{ color: "inherit" }}
                  >
                    ib-themes
                  </Link>
                  . All rights reserved.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer_bottom_right_btns text-center text-lg-end">
                <FooterSelect2 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
