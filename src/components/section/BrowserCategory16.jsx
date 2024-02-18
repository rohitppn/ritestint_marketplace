"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { Navigation } from "swiper";
import { browserCategory } from "@/data/project";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BrowserCategory16() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <section className="pb80">
      <div className="container">
        <div className="row align-items-center wow fadeInUp">
          <div className="col-lg-9">
            <div className="main-title">
              <h2 className="title">Browse talent by category</h2>
              <p className="paragraph">
                Most viewed and all-time top-selling services
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <Link className="ud-btn btn-light-thm bdrs12" href="/service-1">
                All Category<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative">
              {showSwiper && (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  // loop={true}
                  className="mySwiper"
                  navigation={{
                    prevEl: ".unique-6-pre",
                    nextEl: ".unique-6-next",
                  }}
                  style={{ overflow: "visible" }}
                  modules={[Navigation]}
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
                    1500: {
                      slidesPerView: 4,
                    },
                    1800: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {browserCategory.map((elm,i) => (
                    <SwiperSlide key={i}>
                      <div className="item">
                        <div className="feature-style1 mb30 bdrs16">
                          <div className="feature-img bdrs16 overflow-hidden">
                            <Image
                              style={{ objectFit: "cover" }}
                              width={260}
                              height={301}
                              className="w-100"
                              src={elm.img}
                              alt=" image "
                            />
                          </div>
                          <div className="feature-content">
                            <div className="top-area">
                              <h6 className="title mb-1">{elm.skill} skills</h6>
                              <h5 className="text"><Link href="/service-1">{elm.title}</Link></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <button type="button" className="prev-btn unique-6-pre">
                <i className="far fa-arrow-left-long" />
              </button>
              <button type="button" className="next-btn unique-6-next">
                <i className="far fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
