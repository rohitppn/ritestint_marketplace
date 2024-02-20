"use client";
import Image from "next/image";
import CountUp from "react-countup";
import HeroSearch1 from "../element/HeroSearch1";
import { useRouter } from "next/navigation";

export default function Hero5() {
  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/freelancer-2");
  };

  return (
    <>
      <section className="hero-home5 pb-0 pt90">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="pr30 pr0-lg mb30-md position-relative">
                <h1 className="animate-up-1 mb25 text-thm2">
                  More than 10K expert
                  <br className="d-none d-xl-block" />
                  freelancers are waiting for you
                </h1>
                <div className="advance-search-tab at-home6 bgc-white bdrs4 p10 position-relative zi2 animate-up-3 mr30 mr0-lg">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 col-xl-9">
                      <div className="advance-search-field mb10-sm">
                        <HeroSearch1 />
                      </div>
                    </div>
                    <div className="col-md-3 col-lg-4 col-xl-3">
                      <div className="text-center">
                        <button
                          onClick={searchHandler}
                          className="ud-btn btn-thm2 bdrs4 w-100"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-sm-between mt30 animate-up-4">
                  <div className="funfact_one at-home5-hero me-2 me-sm-0">
                    <div className="details">
                      <ul className="ps-0 mb-0 d-flex">
                        <li>
                          <div className="timer">
                            <CountUp end={834} duration={2.75} />
                          </div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text mb-0">Total Freelancer</p>
                    </div>
                  </div>
                  <div className="funfact_one at-home5-hero me-2 me-sm-0">
                    <div className="details">
                      <ul className="ps-0 mb-0 d-flex">
                        <li>
                          <div className="timer">
                            <CountUp end={732} duration={2.75} />
                          </div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text mb-0">Positive Review</p>
                    </div>
                  </div>
                  <div className="funfact_one at-home5-hero me-2 me-sm-0">
                    <div className="details">
                      <ul className="ps-0 mb-0 d-flex">
                        <li>
                          <div className="timer">
                            <CountUp end={90} duration={2.75} />
                          </div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text mb-0">Order recieved</p>
                    </div>
                  </div>
                  <div className="funfact_one at-home5-hero">
                    <div className="details">
                      <ul className="ps-0 mb-0 d-flex">
                        <li>
                          <div className="timer">
                            <CountUp end={236} duration={2.75} />
                          </div>
                        </li>
                        <li>
                          <span>M</span>
                        </li>
                      </ul>
                      <p className="text mb-0">Projects Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="home5-hero-content position-relative text-center">
                <div className="iconbox-small1 d-none d-xl-block wow fadeInRight default-box-shadow4 bounce-x animate-up-1 animated">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6 className="mb-1">4.9/5</h6>
                    <p className="text fz13 mb-0">Clients rate professionals</p>
                  </div>
                </div>
                <div className="iconbox-small2 d-none d-xl-block wow fadeInLeft default-box-shadow4 bounce-y animate-up-2 animated">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6 className="mb-1">+12M</h6>
                    <p className="text fz13 mb-0">Project Completed</p>
                  </div>
                </div>
                <Image
                  height={68}
                  width={362}
                  src="/images/about/happy-client.png"
                  alt="element"
                  className="bounce-y img-1 default-box-shadow4 object-fit-contain"
                />
                <Image
                  height={603}
                  width={595}
                  src="/images/about/home5-hero-element-1.png"
                  alt="element"
                  className="animate-up-1 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
