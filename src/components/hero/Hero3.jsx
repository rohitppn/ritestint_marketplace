"use client";
import Image from "next/image";
import { useState } from "react";
import HeroSearch1 from "../element/HeroSearch1";
import { useRouter } from "next/navigation";

const role = [
  "Choose Category",
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
];

const partners = [
  "/images/partners/1.png",
  "/images/partners/2.png",
  "/images/partners/3.png",
  "/images/partners/4.png",
];

export default function Hero3() {
  const [getSelectedRole, setSelectedRole] = useState(null);

  // choose a category
  const roleHandler = (select) => {
    setSelectedRole(select);
  };

  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/job-1");
  };

  return (
    <>
      <section className="home3-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="home3-hero-content pe-xl-5 position-relative zi1">
                <h2 className="title text-thm2 animate-up-1">
                  Hire Experts &amp; Get Your
                  <br className="d-none d-lg-block" />
                  Any Job Done
                </h2>
                <p className="ff-heading mb30 mt20 animate-up-2">
                  Work with talented people at the most affordable price to get
                  the most out of your time and cost
                </p>
                <div className="advance-search-tab at-home3 default-box-shadow1 bgc-white bgct-sm bdrn-sm p10 p0-md bdrs4 position-relative zi9 animate-up-3">
                  <div className="row">
                    <div className="col-md-5 col-lg-6 col-xl-6">
                      <div className="advance-search-field mb10-sm">
                        <HeroSearch1 />
                      </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-3 d-none d-md-block">
                      <div className="bselect-style1 bdrl1 bdrn-sm">
                        <div
                          className="dropdown bootstrap-select"
                          style={{ width: "100%" }}
                        >
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
                    <div className="col-md-3 col-lg-2 col-xl-3">
                      <div className="text-center text-xl-end">
                        <button
                          onClick={searchHandler}
                          className="ud-btn btn-home3 w-100-sm"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text fz15 me-2 mb-0 mt30 animate-up-4">
                  Trusted by
                </p>
                <div className="home3-hero-partner mt20 animate-up-4">
                  {partners.map((item, index) => (
                    <li
                      key={index}
                      className="d-inline-block me-3 me-sm-5 mb-3 mb-md-0"
                    >
                      <Image
                        height={26}
                        width={84}
                        src={item}
                        className="h-100 w-100 object-fit-contain"
                        alt="image"
                      />
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-5 d-none d-xl-block">
              <div className="position-relative">
                <div className="home3-hero-img">
                  <div className="d-flex align-items-center">
                    <Image
                      height={600}
                      width={350}
                      src="/images/about/home3-hero-img-1.jpg"
                      alt="image"
                      className="animate-up-1"
                    />
                    <div className="wrapper ml10">
                      <Image
                        height={300}
                        width={300}
                        src="/images/about/home3-hero-img-2.jpg"
                        alt="image"
                        className="animate-up-2 mb10 object-fit-contain"
                      />
                      <Image
                        height={338}
                        width={300}
                        src="/images/about/home3-hero-img-3.jpg"
                        alt="image"
                        className="animate-up-3 object-fit-contain"
                      />
                    </div>
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
