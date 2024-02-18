"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import { learnFreeio1 } from "@/data/project";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Testimonials19() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="bgc-dark pb90 pb30-md overflow-hidden">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9 mx-auto">
              <div className="main-title text-center">
                <h2 className="title text-white">
                  People Love To Learn With Freeio
                </h2>
                <p className="paragraph text-white">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="navi_pagi_bottom_center">
                {showSwiper && (
                  <Swiper
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".unique-12-pre",
                      nextEl: ".unique-12-next",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".unique-12-pagi",
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {learnFreeio1.map((elm, index) => (
                      <SwiperSlide key={index}>
                        <div className="item">
                          <div className="testimonial-style1 at-home19 default-box-shadow1 position-relative mb60 bdrs12">
                            <div className="testimonial-content">
                              <h4 className="title text-thm">{elm.title}</h4>
                              <span className="icon fas fa-quote-left"></span>
                              <h4 className="t_content text-white">
                                {elm.description}
                              </h4>
                            </div>
                            <div className="thumb d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <Image
                                  width={60}
                                  height={60}
                                  className="wa"
                                  src={elm.avatar}
                                  alt=" image "
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="mb-0 text-white">{elm.name}</h6>
                                <p className="fz14 mb-0 text-white">
                                  {elm.skill}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <button className="swiper__btn swiper__btn-2 btn__prev__013 unique-12-pre">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                <div className="col-auto">
                  <div className="swiper__pagination swiper__pagination-2 swiper__pagination__013 unique-12-pagi"></div>
                </div>
                <div className="col-auto">
                  <button className="swiper__btn swiper__btn-2 btn__next__013 unique-12-next">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
