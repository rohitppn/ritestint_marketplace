import Image from "next/image";

export default function CtaBanner5() {
  return (
    <>
      <section className="cta-banner-about2 at-home10-2 at-home6 mx-auto position-relative pt60-lg pb60-lg">
        <div className="container">
          <div
            className="row align-items-center wow fadeInDown"
            data-wow-delay="400ms"
          >
            <div className="col-lg-7 col-xl-5 mb60-xs mb100-md">
              <div className="mb30">
                <div className="main-title">
                  <h2 className="title">
                    A whole world of freelance{" "}
                    <br className="d-none d-xl-block" /> talent at your
                    fingertips
                  </h2>
                </div>
              </div>
              <div className="why-chose-list">
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
            <div className="col-lg-5 col-xl-4 offset-xl-1">
              <div className="listbox-style1 px30 py-5 bdrs16 bgc-thm2 position-relative">
                <div className="list-style1">
                  <ul className="mb-0">
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      The best for every budget
                    </li>
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      Quality work done quickly
                    </li>
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      Protected payments, every time
                    </li>
                    <li className="text-white fw500 mb-0">
                      <i className="far fa-check dark-color bgc-white" />
                      24/7 support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          height={707}
          width={610}
          className="home6-cta-img h-auto object-fit-contain"
          src="/images/about/about-10.jpg"
          alt="about"
        />
      </section>
    </>
  );
}
