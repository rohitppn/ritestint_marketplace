"use client";
import Image from "next/image";
import HeroSearch1 from "../element/HeroSearch1";
import { useState } from "react";
import { useRouter } from "next/navigation";

const role = ["City, state, or zip", "Miami", "New York"];

export default function Hero14() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // role handler
  const roleHandler = (select) => {
    setSelectedRole(select);
  };
  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/project-1");
  };
  return (
    <section className="hero-home14 pt60 pb60 overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7">
            <div className="home14-hero-content">
              <h1 className="title animate-up-1 mb25">
                Find the right <span>freelance</span>{" "}
                <br className="d-none d-xl-block" />
                <span>service,</span> right away.
              </h1>
              <p className="text animate-up-2">
                Work with talented people at the most affordable price to get
                the most <br className="d-none d-lg-block" />
                out of your time and cost
              </p>
              <div className="advance-search-tab bgc-white bdrs60 p10 bdrs4-sm bdr1 position-relative zi9 mt30 animate-up-3">
                <div className="row">
                  <div className="col-md-5 col-lg-6 col-xl-6">
                    <div className="advance-search-field mb10-sm bdrr1 bdrn-sm">
                      <HeroSearch1 />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-3">
                    <div className="bselect-style1">
                      <div className="dropdown bootstrap-select">
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-bs-toggle="dropdown"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                {getSelectedRole !== null
                                  ? getSelectedRole
                                  : "City, state, or zip"}
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
                          <div className="inner show">
                            <ul className="dropdown-menu inner show">
                              {role.map((item, index) => (
                                <li
                                  onClick={() => roleHandler(item)}
                                  key={index}
                                  className="selected active"
                                >
                                  <a
                                    className={`dropdown-item selected ${
                                      getSelectedRole === item ? "active" : ""
                                    }`}
                                  >
                                    <span className="text">{item}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2">
                    <div className="text-center text-xl-start">
                      <button
                        className="ud-btn btn-dark bdrs60 bdrs4-sm w-100 px-0"
                        type="button"
                        onClick={searchHandler}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 d-none d-xl-block">
            <div className="home13-hero-img position-relative">
              <div className="position-relative">
                <div className="d-flex align-items-center justify-content-end">
                  <div>
                    <Image
                      width={78}
                      height={78}
                      className="img-1 spin-right"
                      src="/images/about/element-13.png"
                      alt=" image "
                    />
                    <Image
                      width={240}
                      height={438}
                      className="mb10 wow fadeInLeft"
                      src="/images/about/about-14.png"
                      alt=" image "
                    />
                    <div
                      style={{
                        background: "#f7f7f7",
                        borderRadius: "30px 0 0 30px",
                      }}
                      className="funfact_one at-home14-hero-1 mb20-sm py-5 pl35 wow fadeInRight"
                    >
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex justify-content-start">
                          <li>
                            <div className="timer">58</div>
                          </li>
                          <li>
                            <span>M</span>
                          </li>
                          <li>
                            <span>+</span>
                          </li>
                        </ul>
                        <p className="text mb-0">Active Freelancer</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml10">
                    <div className="funfact_one at-home14-hero-2 mb20 py-5 pl35 wow fadeInLeft">
                      <span className="icon flaticon-rocket"></span>
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex justify-content-start">
                          <li>
                            <span>+</span>
                          </li>
                          <li>
                            <div className="timer">12</div>
                          </li>
                          <li>
                            <span>M</span>
                          </li>
                        </ul>
                        <p className="text mb-0">Project Completed</p>
                      </div>
                    </div>
                    <Image
                      width={240}
                      height={368}
                      style={{ height: "fit-content" }}
                      className="wow fadeInRight"
                      src="/images/about/about-15.png"
                      alt=" image "
                    />
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
