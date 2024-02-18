import Image from "next/image";

export default function CtaBanner7() {
  return (
    <>
      <section className="cta-banner-about2 at-home8 mx-auto maxw1700 position-relative pt60-md pb60-md p-0">
        <Image
          height={609}
          width={675}
          className="home8-cta-img h-auto"
          src="/images/about/about-5.jpg"
          alt="about"
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7 wow fadeInLeft">
              <div className="mb30">
                <div className="main-title">
                  <h2 className="title">
                    A whole world of freelance{" "}
                    <br className="d-none d-xl-block" /> talent at your
                    fingertips
                  </h2>
                </div>
              </div>
              <div className="why-chose-list pr60 pr0-lg">
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-badge" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">Proof of quality</h4>
                    <p className="text mb-0 fz15">
                      Check any pro’s work samples, client reviews, and identity{" "}
                      <br className="d-none d-lg-block" /> verification.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-money" />
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">No cost until you hire</h4>
                    <p className="text mb-0 fz15">
                      Interview potential fits for your job, negotiate rates,
                      and only pay <br className="d-none d-lg-block" /> for work
                      you approve.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start">
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
          </div>
        </div>
      </section>
    </>
  );
}
