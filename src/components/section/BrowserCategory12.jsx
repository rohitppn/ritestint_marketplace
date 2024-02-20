"use client";

import { browserCategory, browserCategory2 } from "@/data/project";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import BrowserCategoryCard1 from "../card/BrowserCategoryCard1";
import Link from "next/link";

export default function BrowserCategory12() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <section className="pb40-md pb90">
      <div className="container">
        <div
          className="row align-items-center wow fadeInUp"
          data-wow-delay="300ms"
        >
          <div className="col-lg-9">
            <div className="main-title2">
              <h2 className="title">Browse talent by category</h2>
              <p className="paragraph">
                Get some Inspirations from 1800+ skills
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="text-start text-lg-end mb-4 mb-lg-2">
              <Link className="ud-btn2" href="/service-single">
                All Categories<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row d-none d-lg-flex wow fadeInUp">
          {browserCategory2.map((item,i) => (
            <div key={ i } className={item.classNames}>
              <div className="iconbox-style1 at-home12-v2">
                <div className="icon">
                  <span className={item.iconClass}></span>
                </div>
                <div className="details mt20">
                  <p className="text mb5">{item.skills} skills</p>
                  <h4 className="title"><Link href="/service-1">{item.title}</Link></h4>
                  <p className="mb-0">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row d-block d-lg-none">
          <div className="col-lg-12">
            <div className="ui-browser wow fadeInUp">
              {showSwiper && (
                <Swiper
                  slidesPerView={1}
                  navigation={{
                    prevEl: ".btn__prev__001",
                    nextEl: ".btn__next__001",
                  }}
                  spaceBetween={30}
                  modules={[Navigation, Pagination]}
                  className="mySwiper"
                  loop={true}
                  pagination={{
                    el: ".swiper__pagination__001",
                    clickable: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    540: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {browserCategory.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="item">
                        <div className="iconbox-style1 bdr1">
                          <div className="icon">
                            <span className={item.icon}></span>
                          </div>
                          <div className="details mt20">
                            <p className="text mb5">{item.skill} skills</p>
                            <h4 className="title"><Link href="/service-1">{item.title}</Link></h4>
                            <p className="mb-0">{item.brif}</p>
                          </div>
                        </div>
                      </div>
                      {/* <BrowserCategoryCard1 data={item} /> */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div className="row">
              <div className="col-auto">
                <button className="swiper__btn btn__prev__001">
                  <i className="far fa-arrow-left-long" />
                </button>
              </div>
              <div className="col-auto">
                <div className="swiper__pagination swiper__pagination__001"></div>
              </div>
              <div className="col-auto">
                <button className="swiper__btn btn__next__001">
                  <i className="far fa-arrow-right-long" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
