"use client";
import { browserCategory } from "@/data/project";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Link from "next/link";
import BrowserCategoryCard4 from "../card/BrowserCategoryCard4";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BrowserCategory4() {
  const path = usePathname();
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className={`${path === "/home-10" ? "pt0" : "pb40-md "} `}>
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
                <Link className="ud-btn2" href="/service-1">
                  All Categories
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="category-slider-home10 navi_pagi_bottom_center slider-7-grid  wow fadeInUp">
                {showSwiper && (
                  <Swiper
                    slidesPerView={7}
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".btn__prev__010",
                      nextEl: ".btn__next__010",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    // loop={true}
                    pagination={{
                      el: ".swiper__pagination__010",
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      540: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 4,
                      },
                      1200: {
                        slidesPerView: 5,
                      },
                      1500: {
                        slidesPerView: 6,
                      },
                      1800: {
                        slidesPerView: 7,
                      },
                    }}
                  >
                    {browserCategory.slice(0, 9).map((item, index) => (
                      <SwiperSlide key={index}>
                        <BrowserCategoryCard4 data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                <div className="item"></div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <button className="swiper__btn btn__prev__010">
                <i className="far fa-arrow-left-long" />
              </button>
            </div>
            <div className="col-auto">
              <div className="swiper__pagination swiper__pagination__010"></div>
            </div>
            <div className="col-auto">
              <button className="swiper__btn btn__next__010">
                <i className="far fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
