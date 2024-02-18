import Image from "next/image";

export default function OurCta4() {
  return (
    <>
      <section className="cta-home8 maxw1700 mx-auto pt90 pb90 pt60-md pb60-md mt110 mt0-lg bdrs24">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-xl-6 position-relative wow zoomIn d-none d-xl-block">
              <div className="cta-img-home8">
                <Image
                  height={452}
                  width={633}
                  className="w-100 h-auto"
                  src="/images/about/mobile-app.png"
                  alt="mobile-app"
                />
              </div>
            </div>
            <div className="col-lg-7 col-xl-4 offset-xl-1">
              <div className="cta-style5">
                <span className="app-tag mb25">Start today</span>
                <h2 className="cta-title mb15">Download the App</h2>
                <p className="cta-text mb60">
                  Take classes on the go with the realton app. Stream or
                  download to watch on the plane, the subway, or wherever you
                  learn best.
                </p>
                <div className="app-widget at-home6">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <a>
                        <div className="app-info mb-1 light-style d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <i className="fab fa-apple fz30 text-white" />
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
                      <a>
                        <div className="app-info mb-1 light-style d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <i className="fab fa-google-play fz24 text-white" />
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
          </div>
        </div>
      </section>
    </>
  );
}
