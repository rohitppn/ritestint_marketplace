import Image from "next/image";

export default function OurCta3() {
  return (
    <>
      <section className="cta-home7 bgc-thm2 pt90 pb90 pt60-md pb60-md">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-xl-4">
              <div className="cta-style5">
                <span className="app-tag mb25">Start today</span>
                <h2 className="cta-title text-white mb15">Download the App</h2>
                <p className="cta-text text-white mb60">
                  Take classes on the go with the realton app. Stream or
                  download to watch on the plane, the subway, or wherever you
                  learn best.
                </p>
                <div className="app-widget">
                  <div className="row d-flex align-items-center">
                    <div className="col-auto">
                      <a>
                        <div className="app-info mb-1 d-flex align-items-center bdrs8">
                          <div className="flex-shrink-0 pr20">
                            <i className="fab fa-apple fz30 text-white" />
                          </div>
                          <div className="flex-grow-1 pl20">
                            <p className="app-text text-white fz12 mb0">
                              Download on the
                            </p>
                            <h6 className="app-title mb-0 text-white fz15">
                              Apple Store
                            </h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-auto">
                      <a>
                        <div className="app-info mb-1 d-flex align-items-center bdrs8">
                          <div className="flex-shrink-0 pr20">
                            <i className="fab fa-google-play fz24 text-white" />
                          </div>
                          <div className="flex-grow-1 pl20">
                            <p className="app-text text-white fz12 mb0">
                              Get in on
                            </p>
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
            <div className="col-lg-6 position-relative wow zoomIn d-none d-lg-block">
              <div className="cta-img-home8 at-home7">
                <Image
                  height={452}
                  width={633}
                  className="w-100 h-auto"
                  src="/images/about/mobile-app.png"
                  alt="mobile-app"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
