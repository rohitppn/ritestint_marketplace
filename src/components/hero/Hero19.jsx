"use client";

import { useRouter } from "next/navigation";
import React from "react";
import HeroSearch1 from "../element/HeroSearch1";
import Image from "next/image";
const popular = ["Designer", "Developer", "Web", "IOS", "PHP", "Senior"];

export default function Hero19() {
  const router = useRouter();
  const searchHandler = () => {
    router.push("/project-1");
  };
  return (
    <section className="hero-home19">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-xl-6">
            <div className="home14-hero-content wow fadeInRight">
              <h1 className="title animate-up-1 mb25">
                Find the perfect <br className="d-none d-xl-block" />
                Freelance for you
              </h1>
              <p className="text animate-up-2">
                Work with talented people at the most affordable price to get
                the most <br className="d-none d-lg-block" />
                out of your time and cost
              </p>
              <div className="advance-search-tab bdr1 bgc-white bdrs12 p10 position-relative zi2 animate-up-3 mr30 mr0-lg">
                <div className="row">
                  <div className="col-md-9 col-lg-8 col-xl-9">
                    <div className="advance-search-field mb10-sm">
                      <HeroSearch1 />
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-4 col-xl-3">
                    <div className="text-center">
                      <button
                        className="ud-btn btn-dark bdrs12 w-100"
                        type="button"
                        onClick={() => searchHandler}
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
              <div className="home9-tags at-home18 d-md-flex align-items-center animate-up-4">
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
        width={950}
        height={868}
        style={{ height: "fit-content" }}
        className="home16-hero-fltimg at-home19 d-none d-xl-block wow fadeInLeft"
        src="/images/about/home19-hero-img-1.png"
        alt=" image "
      />
    </section>
  );
}
