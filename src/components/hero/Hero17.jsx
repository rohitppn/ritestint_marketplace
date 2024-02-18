import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero17() {
  return (
    <section className="hero-home13 at-home17 overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="home17-hero-content">
              <h1 className="banner-title animate-up-1 mb25">
                Hire Experts & Get Your <br className="d-none d-xl-block" />
                Any Job Done
              </h1>
              <p className="text-white text animate-up-2">
                Work with talented people at the most affordable price to get
                the most <br className="d-none d-lg-block" />
                out of your time and cost
              </p>
              <div className="d-sm-flex align-items-center mt30 animate-up-3">
                <Link href="/job-1" className="ud-btn btn-1 me-3 bdrs120 btn-1">
                  Find Work
                </Link>
                <Link
                  href="/freelancer-1"
                  className="ud-btn btn-2 bdr1 bdrs120 btn-2"
                >
                  Find Talent
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 d-none d-xl-block">
            <div className="home17-hero-img text-center animate-up-1">
              <div className="d-flex align-items-center justify-content-center">
                <div className="mb30">
                  <Image
                    width={240}
                    height={240}
                    src="/images/about/home17-hero-1.png"
                    alt=" image "
                  />
                </div>
                <div className="mb30 ml40">
                  <Image
                    width={240}
                    height={240}
                    src="/images/about/home17-hero-2.png"
                    alt=" image "
                  />
                </div>
              </div>
              <div>
                <Image
                  width={519}
                  height={240}
                  style={{ height: "fit-content" }}
                  src="/images/about/home17-hero-3.png"
                  alt=" image "
                />
              </div>
              <div className="iconbox-small1 text-start d-flex wow fadeInRight default-box-shadow4 bounce-y">
                <span className="icon flaticon-badge"></span>
                <div className="details pl20">
                  <h6 className="mb-1 text-white">Proof of quality</h6>
                  <p className="text fz13 mb-0 text-white">
                    Lorem Ipsum Dolar Amet
                  </p>
                </div>
              </div>
              <Image
                width={339}
                height={68}
                className="img-1 bounce-x"
                src="/images/about/happy-client-2.png"
                alt=" image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
