"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, Pagination } from "swiper";
import { product1 } from "@/data/product";
import BestServiceCard1 from "../card/BestServiceCard1";
import { useEffect, useState } from "react";

export default function BestService2() {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);
  return (
    <>
      <div className="row mb10 position-relative">
        <div className="col-lg-9">
          <div className="main-title mb35">
            <h2>Best Services</h2>
            <p className="text">
              Most viewed and all-time top-selling services
            </p>
          </div>
        </div>
        <div className="col-lg-12">
          {showSwiper && (
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              freeMode={true}
              loop={true}
              className="mySwiper"
              navigation={{
                prevEl: ".btn__prev__019",
                nextEl: ".btn__next__019",
              }}
              pagination={{
                el: ".swiper__pagination__019",
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                576: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                992: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
                1200: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                },
              }}
            >
              {product1.slice(0, 10).map((item,i) => (
                <SwiperSlide key={ i }>
                  <BestServiceCard1 data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="row ui-best-slider mt20">
            <div className="col-auto">
              <button className="swiper__btn btn__prev__019">
                <i className="far fa-arrow-left-long" />
              </button>
            </div>
            <div className="col-auto">
              <div className="swiper__pagination swiper__pagination__019"></div>
            </div>
            <div className="col-auto">
              <button className="swiper__btn btn__next__019">
                <i className="far fa-arrow-right-long" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
