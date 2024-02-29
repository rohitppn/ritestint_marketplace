"use client";
import HeighestRetedCard1 from "../card/HighestRatedCard1";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { freelancer1, hightedRated1 } from "@/data/product";
import Link from "next/link";
import HeighestRetedCard2 from "../card/HighestRatedCard2";
import { useEffect, useState } from "react";

export default function HighestRated14() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="pt90 pt60-md pb130 pb60-md">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Highest Rated Freelancers</h2>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-lg-end mb-3">
                <Link className="ud-btn2" href="/freelancer-1">
                  All Freelancers
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row position-relative">
            <div className="col-lg-12 ">
              <div className="ui-hightest-rated">
                {showSwiper && (
                  <Swiper
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".unique-3-pre",
                      nextEl: ".unique-3-next",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".unique-3-pagi",
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
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {freelancer1.map((item, index) => (
                      <SwiperSlide key={index}>
                        <HeighestRetedCard1
                          btnClass={"ud-btn btn-white2 bdrs90"}
                          data={item}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
            <button type="button" className="prev-btn pre-slide3 unique-3-pre">
              <i className="far fa-chevron-left" />
            </button>
            <button
              type="button"
              className="next-btn next-slide3 unique-3-next"
            >
              <i className="far fa-chevron-right" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
