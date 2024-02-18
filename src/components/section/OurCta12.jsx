import Image from "next/image";
import React from "react";

export default function OurCta12() {
  return (
    <section className="cta-home4 at-home12 pt90 pt60-md pb90 pb60-md">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-xl-5">
            <div className="cta-style5 wow fadeInRight">
              <span className="app-tag mb25">Start today</span>
              <h2 className="cta-title mb15">Download the App</h2>
              <p className="cta-text mb60">
                Take classes on the go with the realton app. Stream or download
                to watch on the plane, the subway, or wherever you learn best.
              </p>
              <div className="app-widget at-home12">
                <div className="row d-flex align-items-center">
                  <div className="col-auto">
                    <a href="#">
                      <div className="app-info mb-1 light-style d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <i className="fab fa-apple fz30 text-white"></i>
                        </div>
                        <div className="flex-grow-1">
                          <p className="app-text fz12 mb0">Download on the</p>
                          <h6 className="app-title mb-0 text-white fz15">
                            Apple Store
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="#">
                      <div className="app-info mb-1 light-style d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <i className="fab fa-google-play fz24 text-white"></i>
                        </div>
                        <div className="flex-grow-1">
                          <p className="app-text fz12 mb0">Get in on</p>
                          <h6 className="app-title mb-0 text-white fz15">
                            Google Play
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-6 offset-xl-1 position-relative wow zoomIn d-none d-lg-block">
            <div className="cta-img-home8 at-home12">
              <Image
                width={486}
                height={452}
                className="w-100"
                src="/images/about/mobile-app-2.png"
                alt=" image "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
