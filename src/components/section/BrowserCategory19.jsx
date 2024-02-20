"use client";
import { browserCategory } from "@/data/project";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";

import BrowserCategoryCard1 from "../card/BrowserCategoryCard1";
import { useEffect, useState } from "react";

export default function BrowserCategory19() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <>
      <section className="pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDelay: "300ms",
              animationName: "fadeInUp",
            }}
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
              <div className="text-start text-lg-end mb-4 mb-lg-0">
                <Link className="ud-btn2" href="/service-single">
                  All Categories
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="row d-none d-lg-flex wow fadeInUp"
            style={{
              visibility: "visible",
              animationName: "fadeInUp",
            }}
          >
            {browserCategory.slice(0, 8).map((elm, i) => (
              <div className="col-sm-6 col-xl-3" key={i}>
                <div className="iconbox-style1 at-home19 bdrs12 bdr1 overflow-hidden">
                  <div className="icon">
                    <span className={elm.icon}></span>
                  </div>
                  <div className="details mt20">
                    <p className="text mb5">{elm.skill} skills</p>
                    <h5 className="title"><Link href="/service-1">{elm.title}</Link></h5>
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
                      prevEl: ".unique-11-pre",
                      nextEl: ".unique-11-next",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".unique-11-pagi",
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
                        <BrowserCategoryCard1 data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <div className="row">
                <div className="col-auto">
                  <button className="swiper__btn btn__prev____007 unique-11-pre">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                <div className="col-auto">
                  <div className="swiper__pagination swiper__pagination____007 unique-11-pagi"></div>
                </div>
                <div className="col-auto">
                  <button className="swiper__btn btn__next____007 unique-11-next">
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
