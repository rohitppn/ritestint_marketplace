"use client";
import HeighestRetedCard1 from "../card/HighestRatedCard1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { freelancer1, hightedRated1 } from "@/data/product";
import Link from "next/link";
import { browserCategory } from "@/data/project";
import { useEffect, useState } from "react";

export default function BrowserCategory20() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="pb190 pb130-md mx-auto maxw1700 bgc-thm4 bdrs24">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Browse talent by category</h2>
                <p className="paragraph">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-lg-end mb-3">
                <Link href="/freelancer-1" className="ud-btn2">
                  All Categories <i className="fal fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row position-relative">
            <div className="col-lg-12">
              <div className="ui-hightest-rated ">
                {showSwiper && (
                  <Swiper
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".unique-13-pre",
                      nextEl: ".unique-13-next",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
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
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {browserCategory.map((elm, index) => (
                      <SwiperSlide key={index}>
                        <div className="item">
                          <div className="iconbox-style1 bdrs12 default-box-shadow1">
                            <div className="icon">
                              <span className={elm.icon}></span>
                            </div>
                            <div className="details mt20">
                              <p className="text mb5">{elm.skill} skills</p>
                              <h4 className="title"><Link href="/service-1">{elm.title}</Link></h4>
                              <p className="mb-0">{elm.brif}</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
            <button
              type="button"
              style={{ left: "5px", top: "100%", transform: "scale(0.8)" }}
              className="prev-btn pre-slide3 unique-13-pre"
            >
              <i className="far fa-chevron-left" />
            </button>
            <button
              style={{ left: "70px", top: "100%", transform: "scale(0.8)" }}
              type="button"
              className="next-btn next-slide3 unique-13-next"
            >
              <i className="far fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
