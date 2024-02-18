"use client";
import { browserCategory } from "@/data/project";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import BrowserCategoryCard2 from "../card/BrowserCategoryCard2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function BrowserCategory2() {
  const path = usePathname();
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <>
      <section className={`pt0 ${path === "/home-9" ? "pb90" : "pb-0"}`}>
        <div className="container">
          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Browse talent by category</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4">
                <Link className="ud-btn btn-light-thm bdrs90" href="/service-1">
                  All Category
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="300ms">
              <div className="col-lg-12">
                <div className="position-relative">
                  {showSwiper && (
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={30}
                      freeMode={true}
                      loop={true}
                      className="mySwiper"
                      navigation={{
                        prevEl: ".prev-btn",
                        nextEl: ".next-btn",
                      }}
                      modules={[Navigation]}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
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
                      }}
                    >
                      {browserCategory.map((item,i) => (
                        <SwiperSlide key={ i }>
                          <BrowserCategoryCard2 data={item} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                  <button type="button" className="prev-btn">
                    <i className="far fa-chevron-left" />
                  </button>
                  <button type="button" className="next-btn">
                    <i className="far fa-chevron-right" />
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
