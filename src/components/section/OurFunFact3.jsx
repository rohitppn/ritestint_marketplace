"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function OurFunFact3() {
  const path = usePathname();

  return (
    <>
      <section
        className={`hover-bgc-color pb90 pb30-md overflow-hidden ml0-lg ${
          path === "/home-5" ? "ml30 cta-home5-style " : ""
        }`}
      >
        <Image
          height={226}
          width={198}
          className="left-top-img wow zoomIn d-none d-lg-block object-fit-contain"
          src="/images/vector-img/left-top.png"
          alt="object"
        />
        <Image
          height={181}
          width={255}
          className="right-bottom-img wow zoomIn d-none d-lg-block object-fit-contain"
          src="/images/vector-img/right-bottom.png"
          alt="object"
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
                <Link
                  href="/contact"
                  className={`ud-btn ${
                    path === "/home-9" ? "btn-dark bdrs60" : "btn-thm2 ud-btn"
                  }`}
                >
                  Get Started <i className="fal fa-arrow-right-long" />
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
                    height={462}
                    width={487}
                    className="w-100-lg object-fit-contain"
                    src="/images/about/element-6.png"
                    alt="object"
                  />
                </div>
                <div className="col-sm-6">
                  <div className="funfact-style1 at-home5 bdrs16 text-center ms-md-auto">
                    <ul className="ps-0 mb-0 d-flex justify-content-center">
                      <li>
                        <div className="timer title mb15">4</div>
                      </li>
                      <li>
                        <span>.9/5</span>
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
                        <div className="timer title mb15">96</div>
                      </li>
                      <li>
                        <span>%</span>
                      </li>
                    </ul>
                    <p className="fz15 dark-color">
                      95% of customers are satisfied through to see their <br />
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
    </>
  );
}
