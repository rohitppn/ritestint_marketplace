"use client";

import { useEffect, useState } from "react";
import { product1 } from "@/data/product";
import PopularServiceCard2 from "../card/PopularServiceCard2";

const categories = [
  "Development & IT",
  "Design & Creative",
  "Digital Marketing",
  "Music & Audio",
  "Video & Animation",
];

export default function PopularService3() {
  const [getCurrentCategory, setCurrentCategory] = useState("Development & IT");

  const [getPosition, setPosition] = useState({ min: 0, max: 6 });

  // dummy filter of tab
  useEffect(() => {
    if (getCurrentCategory === "Development & IT") {
      setPosition({
        min: 0,
        max: 6,
      });
    } else if (getCurrentCategory === "Design & Creative") {
      setPosition({
        min: 2,
        max: 6,
      });
    } else if (getCurrentCategory === "Digital Marketing") {
      setPosition({
        min: 0,
        max: 4,
      });
    } else if (getCurrentCategory === "Music & Audio") {
      setPosition({
        min: 3,
        max: 9,
      });
    } else if (getCurrentCategory === "Video & Animation") {
      setPosition({
        min: 2,
        max: 6,
      });
    }
  }, [getCurrentCategory]);

  // tab handler
  const tabHandler = (select) => {
    setCurrentCategory(select);
  };

  return (
    <>
      <section className="pt-0 pb90">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-xl-3">
              <div className="main-title mb30-lg">
                <h2 className="title">Popular Services</h2>
                <p className="paragraph">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
            <div className="col-xl-9">
              <div className="navpill-style2 at-home6 mb50-lg">
                <ul className="nav nav-pills mb20 justify-content-xl-end">
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
              </div>
            </div>
          </div>
          <div className="row">
            {product1.slice(getPosition.min, getPosition.max).map((item,i) => (
              <div key={ i } className="col-md-6">
                <PopularServiceCard2 data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
