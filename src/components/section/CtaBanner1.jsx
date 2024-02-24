"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CtaBanner1() {
  const path = usePathname();

  return (
    <>
      <section className="p-0">
        <div
          className={`cta-banner3 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden ${
            path === "/" || path === "/about-1"
              ? "bgc-light-yellow"
              : path === "/become-seller"
              ? "bgc-thm4"
              : ""
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title">
                      RiteStint Contingent Workforce{" "}
                      <br className="d-none d-xl-block" /> Engagement Models
                    </h2>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Engagement models</h4>
                      <p className="text mb-0 fz15">
                        With RiteStint, customers can choose from an array of
                        engagement models, which can be tailor-made to suit
                        their unique business{" "}
                        <br className="d-none d-lg-block" /> requirements.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-money" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Assure consistent quality</h4>
                      <p className="text mb-0 fz15">
                        The transformation to different models can be achieved
                        over a period, based on the maturity of the
                        engagement,assure consistent quality of{" "}
                        <br className="d-none d-lg-block" /> service delivery
                        with complete adherence to regulatory compliances and
                        agreed client specific SLAs.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-security" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Forecasting workforce</h4>
                      <p className="text mb-0 fz15">
                        Our approach broadens your options for finding and
                        managing talent, forecasting workforce needs and
                        balancing headcount to meet business demand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            height={500}
            width={500}
            className="cta-banner3-img wow fadeInLeft h-100 object-fit-cover"
            src="/images/home/home3.jpg"
            alt="cta banner 3"
            data-wow-delay="300ms"
          />
        </div>
      </section>
    </>
  );
}
