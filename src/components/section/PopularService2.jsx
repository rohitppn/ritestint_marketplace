"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import PopularServiceCard1 from "../card/PopularServiceCard1";
import { product1 } from "@/data/product";

const categories = [
  "Development & IT",
  "Design & Creative",
  "Digital Marketing",
  "Music & Audio",
  "Video & Animation",
];

export default function PopularService2() {
  const [getCurrentCategory, setCurrentCategory] = useState("Development & IT");

  const [getPosition, setPosition] = useState({ min: 0, max: 9 });

  // dummy filter of tab
  useEffect(() => {
    if (getCurrentCategory === "Development & IT") {
      setPosition({
        min: 0,
        max: 9,
      });
    } else if (getCurrentCategory === "Design & Creative") {
      setPosition({
        min: 1,
        max: 9,
      });
    } else if (getCurrentCategory === "Digital Marketing") {
      setPosition({
        min: 0,
        max: 9,
      });
    } else if (getCurrentCategory === "Music & Audio") {
      setPosition({
        min: 1,
        max: 9,
      });
    } else if (getCurrentCategory === "Video & Animation") {
      setPosition({
        min: 0,
        max: 9,
      });
    }
  }, [getCurrentCategory]);

  // tab handler
  const tabHandler = (select) => {
    setCurrentCategory(select);
  };

  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="pt200 pb-0 pb30-md">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9 mx-auto">
              <div className="main-title text-center mb30">
                <h2 className="title">Popular Services</h2>
                <p className="paragraph">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="navpill-style2">
                <ul
                  className="nav nav-pills mb60 justify-content-center"
                  id="pills-tab"
                >
                  {categories.map((item, index) => (
                    <li key={index} className="nav-item">
                      <button
                        onClick={() => tabHandler(item)}
                        className={`nav-link fw500 dark-color ${
                          getCurrentCategory === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
                {showSwiper && (
                  <Swiper
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".btn__prev__006",
                      nextEl: ".btn__next__006",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".swiper__pagination__006",
                      clickable: true,
                    }}
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
                    {product1
                      .slice(getPosition.min, getPosition.max)
                      .map((item, index) => (
                        <SwiperSlide key={index}>
                          <PopularServiceCard1 data={item} />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                )}
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <button className="swiper__btn btn__prev__006">
                      <i className="far fa-arrow-left-long" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <div className="swiper__pagination swiper__pagination__006"></div>
                  </div>
                  <div className="col-auto">
                    <button className="swiper__btn btn__next__006">
                      <i className="far fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
