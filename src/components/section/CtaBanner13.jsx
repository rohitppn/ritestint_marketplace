import Image from "next/image";
import React from "react";

export default function CtaBanner13() {
  const data = [
    {
      id: 1,
      iconClass: "flaticon-badge",
      title: "Proof of quality",
      description:
        "Check any pro’s work samples, client reviews, and identity verification.",
    },
    {
      id: 2,
      iconClass: "flaticon-money",
      title: "No cost until you hire",
      description:
        "Interview potential fits for your job, negotiate rates, and only pay for work you approve.",
    },
    {
      id: 3,
      iconClass: "flaticon-security",
      title: "Safe and secure",
      description:
        "Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.",
    },
  ];
  return (
    <section className="p-0">
      <div className="cta-banner3 bgc-dark pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 wow fadeInRight" data-wow-delay="300ms">
              <div className="mb30">
                <div className="main-title">
                  <h2 className="title text-white">
                    A whole world of freelance{" "}
                    <br className="d-none d-xl-block" /> talent at your
                    fingertips
                  </h2>
                </div>
              </div>
              <div className="why-chose-list pr60 pr0-lg">
                {data.map((elm, i) => (
                  <div
                    key={i}
                    className="list-one d-flex align-items-start mb30"
                  >
                    <span
                      className={`list-icon flex-shrink-0 ${elm.iconClass} text-white`}
                    ></span>
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1 text-white">{elm.title}</h4>
                      <p className="text mb-0 fz15 text-white">
                        {elm.description.split(" ").slice(0, 9).join(" ")}{" "}
                        <br className="d-none d-lg-block" />{" "}
                        {elm.description.split(" ").slice(9).join(" ")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xl-5 wow fadeInLeft">
              <div className="home13-ctaimg-1">
                <div className="d-flex align-items-center">
                  <div>
                    <Image
                      width={240}
                      height={240}
                      className="mb35"
                      src="/images/about/home13-cta-1.png"
                      alt=" image "
                    />
                    <Image
                      width={240}
                      height={240}
                      src="/images/about/home13-cta-2.png"
                      alt=" image "
                    />
                  </div>
                  <div>
                    <Image
                      width={240}
                      height={240}
                      className="mb35"
                      src="/images/about/home13-cta-3.png"
                      alt=" image "
                    />
                    <Image
                      width={240}
                      height={240}
                      src="/images/about/home13-cta-4.png"
                      alt=" image "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
