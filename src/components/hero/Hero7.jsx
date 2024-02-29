"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import HeroSearch1 from "../element/HeroSearch1";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const partners = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
];

const heros = [
  "/images/about/home7-hero-1.jpg",
  "/images/about/home7-hero-1.jpg",
  "/images/about/home7-hero-1.jpg",
];

export default function Hero7() {
  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/freelancer-1");
  };
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <>
      <section className="hero-home7 pb-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-7 col-xl-6">
              <div className="position-relative">
                <Image
                  height={118}
                  width={118}
                  src="/images/about/element-7.png"
                  alt="elemenet"
                  className="floating-img-1 spin-right d-none d-xl-block object-fit-contain"
                />
                <Image
                  height={30}
                  width={115}
                  src="/images/about/element-8.png"
                  alt="element"
                  className="floating-img-2 bounce-y d-none d-xl-block object-fit-contain"
                />
              </div>
              <div className="pr50 pr0-md mb30-md position-relative">
                <h1 className="animate-up-1 mb25">
                  Hire the best freelancers for{" "}
                  <br className="d-none d-lg-block" />
                  any job, online.
                </h1>
                <p className="animate-up-2 ff-heading mb30">
                  Millions of people use freeio.com to turn their ideas into
                  reality.
                </p>
                <div className="advance-search-tab at-home7 bgc-white bdrs4 p10 position-relative zi2 animate-up-3">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 col-xl-9">
                      <div className="advance-search-field mb10-sm">
                        <HeroSearch1 />
                      </div>
                    </div>
                    <div className="col-md-3 col-lg-4 col-xl-3">
                      <div className="text-center">
                        <button
                          onClick={searchHandler}
                          className="ud-btn btn-dark bdrs4 w-100"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home3-hero-partner mt40 animate-up-4">
                  {partners.map((item, index) => (
                    <li
                      key={index}
                      className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0"
                    >
                      <Image
                        height={26}
                        width={84}
                        src={item}
                        className="h-100 w-100 object-fit-contain"
                        alt="image"
                      />
                    </li>
                  ))}
                </div>
                <Image
                  height={97}
                  width={112}
                  src="/images/about/element-9.png"
                  alt="element"
                  className="floating-img-3 spin-right d-none d-xl-block object-fit-contain"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home10-hero-content">
                <div className="home7-hero-slider owl-carousel owl-loaded">
                  <div className="item">
                    <div className="home7-hero-slide">
                      {showSwiper && (
                        <Swiper
                          modules={[Pagination]}
                          className="mySwiper animate-up-1"
                          loop={true}
                          slidesPerView={1}
                          pagination={{
                            el: ".swiper__pagination__001__single",
                            clickable: true,
                          }}
                        >
                          {heros.map((item, index) => (
                            <SwiperSlide key={index}>
                              <div className="thumb">
                                <Image
                                  height={570}
                                  width={567}
                                  src={item}
                                  alt="home7-hero-1"
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                  }}
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      )}
                      <div
                        className="row justifyc-content-center"
                        style={{
                          position: "absolute",
                          bottom: "28px",
                          left: "50%",
                          zIndex: 9999,
                          transform: "translateX(-50%)",
                        }}
                      >
                        <div className="col-auto d-flex gap-1">
                          <div className="swiper__pagination-2 swiper__pagination__001__single"></div>
                        </div>
                      </div>

                      <div className="details" style={{ zIndex: "999" }}>
                        <p className="mb-1 text-white">Jenny Wilson</p>
                        <h6 className="text-white">UI / UX Designer</h6>
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
