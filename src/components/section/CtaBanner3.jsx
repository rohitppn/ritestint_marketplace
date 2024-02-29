import Image from "next/image";

export default function CtaBanner3() {
  return (
    <>
      <section className="p-0">
        <div className="cta-banner mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-md-6 col-xl-5 pl30-md pl15-xs wow fadeInRight"
                data-wow-delay="500ms"
              >
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title">
                      A whole world of freelance
                      <br className="d-none d-lg-block" />
                      talent at your fingertips
                    </h2>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Proof of quality</h4>
                      <p className="text mb-0 fz15">
                        Check any pro’s work samples, client reviews, and
                        identity
                        <br className="d-none d-lg-block" />
                        verification.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-money" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">No cost until you hire</h4>
                      <p className="text mb-0 fz15">
                        Interview potential fits for your job, negotiate rates,
                        and only pay
                        <br className="d-none d-lg-block" />
                        for work you approve.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-security" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Safe and secure</h4>
                      <p className="text mb-0 fz15">
                        Focus on your work knowing we help protect your data and
                        privacy. We’re here with 24/7 support if you need it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-6 offset-xl-1 wow fadeInLeft"
                data-wow-delay="500ms"
              >
                <div className="about-img">
                  <Image
                    height={705}
                    width={691}
                    className="w100 h-100"
                    src="/images/about/about-6.jpg"
                    alt="about 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
