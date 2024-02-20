"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

export default function LearnFreeio16() {
  return (
    <section className="hover-bgc-color pb90 pb30-md overflow-hidden  cta-home5-style">
      <Image
        width={198}
        height={226}
        style={{ height: "fit-content" }}
        className="left-top-img wow zoomIn d-none d-lg-block"
        src="/images/vector-img/left-top.png"
        alt=" image "
      />
      <Image
        width={255}
        height={181}
        style={{ height: "fit-content" }}
        className="right-bottom-img wow zoomIn d-none d-lg-block"
        src="/images/vector-img/right-bottom.png"
        alt=" image "
      />
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 col-xl-4 wow fadeInRight"
            data-wow-delay="100ms"
          >
            <div className="cta-style6 mb30-sm">
              <h2 className="cta-title mb25">
                Find the talent needed to <br className="d-none d-lg-block" />
                get your business growing.
              </h2>
              <p className="text-thm2 fz15 mb25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                <br className="d-none d-md-block" /> do eiusmod tempor
                incididunt.
              </p>
              <Link href="/contact" className="ud-btn btn-thm2">
                Get Started <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div
            className="col-md-6 col-xl-6 offset-xl-2 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="row align-items-center position-relative">
              <div className="home9-floating-img position-absolute">
                <Image
                  width={487}
                  height={462}
                  style={{ height: "fit-content" }}
                  className="w-100-lg"
                  src="/images/about/element-6.png"
                  alt=" image "
                />
              </div>
              <div className="col-sm-6">
                <div className="funfact-style1 at-home5 bdrs16 text-center ms-md-auto">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer title mb15">
                        <CountUp
                          decimals={1}
                          end={4.9}
                          duration={2.75}
                          enableScrollSpy
                        />
                      </div>
                    </li>
                    <li>
                      <span>
                        /
                        <CountUp end={5} duration={5} enableScrollSpy />
                      </span>
                    </li>
                  </ul>
                  <p className="fz15 dark-color">
                    Clients rate <br />
                    professionals on Freeio
                  </p>
                </div>
                <div className="funfact-style1 at-home5 bdrs16 text-center ms-md-auto">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer title mb15">
                        <CountUp end={99} duration={2.75} enableScrollSpy />
                      </div>
                    </li>
                    <li>
                      <span>%</span>
                    </li>
                  </ul>
                  <p className="fz15 dark-color">
                    99% of customers are satisfied through to see their <br />
                    freelancers
                  </p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="funfact-style1 at-home5 bdrs16 text-center">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="title mb15">Award</div>
                    </li>
                  </ul>
                  <p className="fz15 dark-color">
                    G2’s 2021 Best <br />
                    Software Awards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
