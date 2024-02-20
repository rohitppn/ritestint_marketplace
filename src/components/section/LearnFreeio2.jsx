"use client";
import CountUp from "react-countup";
import LearnFreeIoCard2 from "../card/LearnFreeIoCard2";

export default function LearnFreeio2() {
  return (
    <>
      <section className="hover-bgc-color pb90 pb30-md overflow-hidden">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">People Love To Learn With Freeio</h2>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {Array(3)
              .fill(3)
              .map((_, i) => (
                <div key={i} className="col-sm-6 col-lg-4">
                  <LearnFreeIoCard2 />
                </div>
              ))}
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="funfact_one mb30">
                <div className="details">
                  <ul className="ps-0 d-flex mb-0">
                    <li>
                      <div className="timer">
                        <CountUp
                          decimals={1}
                          end={4.9}
                          duration={2.75}
                          enableScrollSpy
                        />
                      </div>
                    </li>
                    <li>
                      <span>/</span>
                    </li>
                    <li>
                      <div className="timer">
                        <CountUp end={5} duration={5} enableScrollSpy />
                      </div>
                    </li>
                  </ul>
                  <p className="text mb-0">
                    Clients rate professionals on Freeio
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="funfact_one mb30">
                <div className="details">
                  <ul className="ps-0 d-flex mb-0">
                    <li>
                      <div className="timer">
                        <CountUp end={99} duration={2.75} enableScrollSpy />
                      </div>
                    </li>
                    <li>
                      <span>%</span>
                    </li>
                  </ul>
                  <p className="text mb-0">
                    95% of customers are satisfied <br /> through to see their
                    freelancers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="funfact_one mb30">
                <div className="details">
                  <h2>Award winner</h2>
                  <p className="text mb-0">Home ownership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
