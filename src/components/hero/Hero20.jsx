"use client";
import Image from "next/image";
import HeroSearch1 from "../element/HeroSearch1";
import { useState } from "react";
import { useRouter } from "next/navigation";

const role = ["City, state, or zip", "Miami", "New York"];

const popular = ["Designer", "Developer", "Web", "IOS", "PHP", "Senior"];

export default function Hero20() {
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
    <section className="hero-home13 at-home20 overflow-hidden">
      <div className="home20-hero-imgs-left d-none d-lg-block">
        <Image
          width={94}
          height={94}
          src="/images/about/home20-hero-1.png"
          alt=" image "
          className="img-1 bounce-y"
        />
        <Image
          width={66}
          height={66}
          src="/images/about/home20-hero-2.png"
          alt=" image "
          className="img-2 bounce-y"
        />
        <Image
          width={68}
          height={67}
          src="/images/about/home20-hero-3.png"
          alt=" image "
          className="img-3 bounce-y"
        />
        <Image
          width={93}
          height={94}
          src="/images/about/home20-hero-4.png"
          alt=" image "
          className="img-4 bounce-y"
        />
      </div>
      <div className="home20-hero-imgs-right d-none d-lg-block">
        <Image
          width={65}
          height={66}
          src="/images/about/home20-hero-5.png"
          alt=" image "
          className="img-1 bounce-y"
        />
        <Image
          width={69}
          height={68}
          src="/images/about/home20-hero-6.png"
          alt=" image "
          className="img-2 bounce-y"
        />
        <Image
          width={94}
          height={94}
          src="/images/about/home20-hero-7.png"
          alt=" image "
          className="img-3 bounce-y"
        />
        <Image
          width={94}
          height={94}
          src="/images/about/home20-hero-8.png"
          alt=" image "
          className="img-4 bounce-y"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-7">
            <div className="home20-hero-content text-center">
              <h1 className="animate-up-1 mb25 title">
                Join us & Explore <br className="d-none d-xl-block" />
                Thousands of Freelancer
              </h1>
              <p className="text mb30 animate-up-2">
                Work with talented people at the most affordable price to get
                the most <br className="d-none d-lg-block" />
                out of your time and cost
              </p>
              <div className="advance-search-tab bgc-white bdr1-dark bdrs60 p10 bdrs4-sm banner-btn position-relative zi9 animate-up-3">
                <div className="row">
                  <div className="col-md-5 col-lg-6 col-xl-6">
                    <div className="advance-search-field mb10-sm bdrr1 bdrn-sm">
                      <HeroSearch1 />
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 col-xl-3">
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
                        className="ud-btn btn-thm default-box-shadow2 bdrs60 bdrs4-sm w-100"
                        type="button"
                        onClick={searchHandler}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-block d-md-flex justify-content-center mt30 text-center animate-up-4">
                <p className="hero-text fz15 me-2 mb-0">Popular Searches</p>

                {popular.map((elm,i)=><a key={i} className="text" style={{marginRight:'5px'}} >
                          {`${elm}${(i != (popular.length -1)) ? ',':' '}`}
                        </a>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
