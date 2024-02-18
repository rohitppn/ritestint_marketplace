"use client";
import React, { useState } from "react";
import HeroSearch1 from "../element/HeroSearch1";
import { useRouter } from "next/navigation";
import Image from "next/image";

const role = [
  "Select Role",
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
];

const popular = ["Designer", "Developer", "Web", "IOS", "PHP", "Senior"];
export default function Hero16() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // role handler
  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  const router = useRouter();
  // search handler
  const searchHandler = () => {
    router.push("/freelancer-1");
  };
  return (
    <section className="hero-home16">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-7">
            <div className="home14-hero-content wow fadeInRight">
              <h1 className="title animate-up-1 mb25">
                Freelance Services For <br className="d-none d-xl-block" />
                Your Business
              </h1>
              <p className="text animate-up-2">
                Work with talented people at the most affordable price to get
                the most <br className="d-none d-lg-block" />
                out of your time and cost
              </p>
              <div className="advance-search-tab bgc-white bdr1-dark p10 bdrs4-sm bdrs12 position-relative zi1 animate-up-3 mt30">
                <div className="row">
                  <div className="col-md-5 col-lg-6 col-xl-6">
                    <div className="advance-search-field mb10-sm bdrr1 bdrn-sm">
                      <HeroSearch1 />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-4 d-none d-md-block">
                    <div className="bselect-style1">
                      <div className="dropdown bootstrap-select">
                        <button
                          type="button"
                          className="btn dropdown-toggle btn-light"
                          data-bs-toggle="dropdown"
                        >
                          <div className="filter-option">
                            <div className="filter-option-inner">
                              <div className="filter-option-inner-inner">
                                {getSelectedRole !== null
                                  ? getSelectedRole
                                  : "Choose Category"}
                              </div>
                            </div>
                          </div>
                        </button>
                        <div className="dropdown-menu">
                          <div className="inner show">
                            <ul className="dropdown-menu inner show">
                              {role.map((item, index) => (
                                <li
                                  onClick={() => roleHandler(item)}
                                  key={index}
                                  className="selected active"
                                >
                                  <a
                                    className={`dropdown-item selected ${
                                      getSelectedRole === item ? "active" : ""
                                    }`}
                                  >
                                    <span className="text">{item}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2">
                    <div className="text-center text-xl-start">
                      <button
                        className="ud-btn btn-thm w-100 bdrs12 px-0"
                        onClick={searchHandler}
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text fz15 me-2 mt30 animate-up-4">
                Popular Searches
              </p>
              <div className="home9-tags at-home16 d-md-flex align-items-center animate-up-4">
                {popular.map((elm, i) => (
                  <a key={i} className="bdrs60 mb-2 mb-md-0" href="#">
                    {elm}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        width={861}
        height={819}
        style={{ height: "fit-content" }}
        className="home16-hero-fltimg d-none d-xl-block wow fadeInLeft"
        src="/images/about/home16-hero-img-1.png"
        alt=" image "
      />
    </section>
  );
}
