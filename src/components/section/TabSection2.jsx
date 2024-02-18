"use client";
import { useState } from "react";

const categories = [
  "All Categories",
  "Graphics Design",
  "Digital Marketing",
  "Writing Translation",
  "Video Animation",
  "Music Audio",
  "Programming Tech",
  "Business",
  "Lifestyle",
  "Trending",
];

export default function TabSection2() {
  const [getCurrentTab, setCurrentTab] = useState("All Categories");

  return (
    <>
      <section className="categories_list_section overflow-hidden border-0">
        <div className="container bgc-thm3">
          <div className="row">
            <div className="col-lg-12">
              <div className="listings_category_nav_list_menu at-home4">
                <ul className="mb0 d-flex justify-content-center mx-auto ps-0">
                  {categories.map((item, index) => (
                    <li key={index}>
                      <a
                        onClick={() => setCurrentTab(item)}
                        className={getCurrentTab == item ? "active" : ""}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
