"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import Link from "next/link";

const herobg = [
  {
    id: 1,
    bg: "/images/home/home-3.jpg",
    headline: (
      <>
        With talented freelancer <br className="d-none d-lg-block" />
        and more works.
      </>
    ),
    brief:
      "Millions of people use freeio.com to turn their ideas into reality.",
  },
  {
    id: 2,
    bg: "/images/home/home-2.jpg",
    headline: (
      <>
        Freelance Services For <br className="d-none d-lg-block" />
        Your Business.
      </>
    ),
    brief:
      "Millions of people use freeio.com to turn their ideas into reality.",
  },
  {
    id: 2,
    bg: "/images/home/home-1.jpg",
    headline: (
      <>
        With talented freelancers <br className="d-none d-lg-block" />
        ando more work.
      </>
    ),
    brief:
      "Millions of people use freeio.com to turn their ideas into reality.",
  },
];

export default function Hero10() {
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
              <div className="main-banner-wrapper home10-hero-content">
                <div className="navi_pagi_bottom_center dots_nav_light banner-style-one slider-1-grid owl-theme owl-carousel owl-loaded owl-drag">
                  {showSwiper && (
                    <Swiper
                      slidesPerView={1}
                      navigation={{
                        prevEl: ".btn__prev__017",
                        nextEl: ".btn__next__017",
                      }}
                      modules={[Navigation, Pagination]}
                      className="mySwiper"
                      loop={true}
                      pagination={{
                        el: ".swiper__pagination__017",
                        clickable: true,
                      }}
                    >
                      {herobg.map((item, index) => (
                        <SwiperSlide key={index}>
                          <div
                            className="slide slide-one"
                            style={{
                              backgroundImage: `url(${item.bg})`,
                            }}
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-xl-7 mx-auto text-center">
                                  <h3 className="banner-title">
                                    {item.headline}
                                  </h3>
                                  <p className="banner-text text-white ff-heading mb30">
                                    {item.brief}
                                  </p>
                                  <div className="d-sm-flex justify-content-center banner-btn">
                                    <Link
                                      href="/project-1"
                                      className="ud-btn btn-white me-0 me-sm-3"
                                    >
                                      Find Work
                                    </Link>
                                    <Link
                                      href="/freelancer-1"
                                      className="ud-btn btn-dark"
                                    >
                                      Find Talent
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <div className="ui-hero-10">
                    <div className="row gap-2">
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__prev__017">
                          <i className="far fa-arrow-left-long" />
                        </button>
                      </div>
                      <div className="col-auto">
                        <div className="swiper__pagination swiper__pagination-2 swiper__pagination__017"></div>
                      </div>
                      <div className="col-auto">
                        <button className="swiper__btn swiper__btn-2 btn__next__017">
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
      </section>
    </>
  );
}
