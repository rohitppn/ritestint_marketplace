"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CtaBanner4() {
  const path = usePathname();

  return (
    <>
      <section className="cta-banner-about2 mx-auto maxw1700 position-relative mx20-lg pt60-lg pb60-lg">
        <Image
          height={701}
          width={717}
          className="cta-about2-img d-none d-xl-block h-100 object-fit-contain"
          src={
            path === "/about-2"
              ? "/images/about/about-7.jpg"
              : path === "/home-3" && "/images/about/about-9.jpg"
          }
          alt="about"
        />
        <div className="container">
          <div className="row">
            <div className="col-md-11 wow fadeInUp" data-wow-delay="200ms">
              <div className="main-title">
                <h2 className="title text-capitalize">Need something done?</h2>
                <p className="text">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInDown" data-wow-delay="400ms">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
                <span className="icon fz40 flaticon-cv" />
                <h4 className="iconbox-title mt20">Post a job</h4>
                <p className="text mb-0">
                  It’s free and easy to post a job.
                  <br className="d-none d-md-block" /> Simply fill in a title,
                  description.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
                <span className="icon fz40 flaticon-web-design" />
                <h4 className="iconbox-title mt20">Choose freelancers</h4>
                <p className="text mb-0">
                  It’s free and easy to post a job.
                  <br className="d-none d-md-block" /> Simply fill in a title,
                  description.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
                <span className="icon fz40 flaticon-secure" />
                <h4 className="iconbox-title mt20">Pay safely</h4>
                <p className="text mb-0">
                  It’s free and easy to post a job.
                  <br className="d-none d-md-block" /> Simply fill in a title,
                  description.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
