"use client";
import Image from "next/image";
import HeroSearch1 from "../element/HeroSearch1";
import { useState } from "react";
import { useRouter } from "next/navigation";

const role = ["City, state, or zip", "Miami", "New York"];

const popular = ["Designer", "Developer", "Web", "IOS", "PHP", "Senior"];

export default function Hero8() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // role handler
  const roleHandler = (select) => {
    setSelectedRole(select);
  };
  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/project-1");
  };

  return (
    <>
      <section className="hero-home8 p-0 space-maintain-1">
        <div className="home8-hero-img d-none d-xl-block">
          <Image
            height={770}
            width={750}
            src="/images/about/home8-hero-1.jpg"
            alt="home-8"
            className="animate-up-1 h-auto"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h1 className="animate-up-1 text-white">
                Freelance Services For <br className="d-none d-lg-block" />
                Your Business
              </h1>
              <p className="animate-up-2 text-white ff-heading mb30">
                Millions of people use freeio.com to turn their ideas into
                reality.
              </p>
              <div className="advance-search-tab bgc-white bdrs4 p10 position-relative zi1 animate-up-3">
                <div className="row">
                  <div className="col-md-5 col-lg-6 col-xl-6">
                    <div className="advance-search-field mb10-sm">
                      <HeroSearch1 />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-3">
                    <div className="bselect-style1 bdrl1 bdrn-sm">
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
                                  : "City, state, or zip"}
                              </div>
                            </div>{" "}
                          </div>
                        </button>
                        <div className="dropdown-menu ">
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
                  <div className="col-md-3 col-lg-2 col-xl-3">
                    <div className="text-center text-xl-start">
                      <button
                        onClick={searchHandler}
                        className="ud-btn btn-thm bdrs4 bdrs4-sm w-100"
                        type="button"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="animate-up-2 text-white ff-heading mt30 mb15">
                Popular Searches
              </p>
              <div className="home9-tags d-md-flex align-items-center animate-up-4">
                {popular.map((item, index) => (
                  <a className="bdrs60 mb-2 mb-md-0" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
