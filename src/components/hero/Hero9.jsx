"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import HeroSearch1 from "../element/HeroSearch1";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const role = ["City, state, or zip", "Miami", "New York"];

const popular = ["Designer", "Developer", "Web", "IOS", "PHP", "Senior"];

const herobg = [
  "/images/home/home-3.jpg",
  "/images/home/home-2.jpg",
  "/images/home/home-1.jpg",
];

export default function Hero9() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // role handler
  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/employee-1");
  };
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="hero-home10 p-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-banner-wrapper home9-hero-content">
                <div className="navi_pagi_vertical_right dots_nav_light banner-style-one slider-1-grid position-relative">
                  {showSwiper && (
                    <Swiper
                      slidesPerView={1}
                      navigation={{
                        prevEl: ".btn__prev__015",
                        nextEl: ".btn__next__015",
                      }}
                      modules={[Navigation, Pagination]}
                      className="mySwiper"
                      loop={true}
                      pagination={{
                        el: ".swiper__pagination__015",
                        clickable: true,
                      }}
                    >
                      {herobg.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div
                            className="slide slide-one"
                            style={{
                              backgroundImage: `url(${item})`,
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <div className="ui-verticle-1">
                    <div className="row gap-2">
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__prev__015">
                          <i className="far fa-arrow-left-long" />
                        </button>
                      </div>
                      <div className="col-auto">
                        <div
                          className="swiper__pagination swiper__pagination-2 swiper__pagination__015 d-flex gap-3"
                          style={{
                            paddingTop: "10px",
                          }}
                        ></div>
                      </div>
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__next__015">
                          <i className="far fa-arrow-right-long" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-banner-content at-home9">
          <div className="container">
            <div className="row">
              <div className="col-xl-7">
                <h3 className="banner-title">
                  Freelance Services For <br className="d-none d-lg-block" />
                  Your Business
                </h3>
                <p className="banner-text text-white ff-heading mb30">
                  Millions of people use freeio.com to turn their ideas into
                  reality.
                </p>
                <div className="advance-search-tab bgc-white bdrs60 p10 bdrs4-sm banner-btn position-relative zi9">
                  <div className="row">
                    <div className="col-md-5 col-lg-6 col-xl-6">
                      <div className="advance-search-field mb10-sm">
                        <HeroSearch1 />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-3">
                      <div className="bselect-style1 bdrl1 bdrn-sm">
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
                          <div className="dropdown-menu">
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
                    <div className="col-md-3 col-lg-2 col-xl-3">
                      <div className="text-center text-xl-start">
                        <button
                          onClick={searchHandler}
                          className="ud-btn btn-dark bdrs60 bdrs4-sm w-100"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="banner-text text-white ff-heading mt30 mb15">
                  Popular Searches
                </p>
                <div className="home9-tags d-md-flex align-items-center banner-btn">
                  {popular.map((item, index) => (
                    <a className="bdrs60 mb-2 mb-md-0" key={index}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
