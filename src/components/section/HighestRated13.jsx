"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

import { teamData } from "@/data/testimonials";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HighestRated13() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <section className="bgc-thm4 pb90 pb30-md">
      <div className="container">
        <div className="row align-items-center wow fadeInUp">
          <div className="col-lg-9">
            <div className="main-title">
              <h2 className="title">Highest Rated Freelancers</h2>
              <p className="paragraph">
                Most viewed and all-time top-selling services
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-lg-end mb-2">
              <Link href="/freelancer-1" className="ud-btn2">
                All Freelancers <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative">
              {showSwiper && (
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation={{
                    prevEl: ".pre-slide3",
                    nextEl: ".next-slide3",
                  }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                    },
                    992: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                    },
                  }}
                >
                  {teamData.map((elm, i) => (
                    <SwiperSlide key={i}>
                      <div className="item">
                        <div className="feature-style1 at-home13 mb30 bdrs12">
                          <div className="feature-img bdrs12 overflow-hidden">
                            <Image
                              style={{ height: "fit-content" }}
                              width={260}
                              height={300}
                              className="w-100"
                              src={elm.imageSrc}
                              alt=" image "
                            />
                          </div>
                          <div className="feature-content">
                            <div className="top-area">
                              <h5 className="title mb-1">{elm.name}</h5>
                              <h6 className="text fz14">{elm.role}</h6>
                            </div>
                            <div className="review">
                              <span className="text-white fz15 fw500">
                                <i className="fas fa-star mr15"></i>
                                {elm.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <button type="button" className="prev-btn pre-slide3">
                <i className="far fa-chevron-left" />
              </button>
              <button type="button" className="next-btn next-slide3">
                <i className="far fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
