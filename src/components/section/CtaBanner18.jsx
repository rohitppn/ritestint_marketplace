import { featuresTwo, frelancersFeatures } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function CtaBanner18() {
  return (
    <section className="cta-banner-about2 at-home17 maxw1700 mx-auto position-relative pt60-lg pb60-lg">
      <div className="container">
        <div
          className="row align-items-center wow fadeInDown"
          data-wow-delay="400ms"
        >
          <div className="col-lg-7 col-xl-5 offset-xl-1 wow fadeInRight mb60-xs mb100-md">
            <div className="mb30">
              <div className="main-title">
                <h2 className="title">
                  A whole world of freelance{" "}
                  <br className="d-none d-xl-block" /> talent at your fingertips
                </h2>
              </div>
            </div>
            <div className="why-chose-list">
              {frelancersFeatures.map((elm, i) => (
                <div key={i} className="list-one d-flex align-items-start mb30">
                  <span
                    className={`list-icon flex-shrink-0 ${elm.iconClass}`}
                  ></span>
                  <div className="list-content flex-grow-1 ml20">
                    <h4 className="mb-1">{elm.title}</h4>
                    <p className="text mb-0 fz15">{elm.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 col-xl-4 wow fadeInLeft">
            <div className="listbox-style1 px30 py-5 bdrs16 bgc-dark position-relative">
              <div className="list-style1">
                <ul className="mb-0">
                  {featuresTwo.map((elm, i) => (
                    <li key={i} className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white"></i>
                      {elm}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        width={610}
        height={710}
        style={{ height: "fit-content" }}
        className="home10-cta-img  bdrs24"
        src="/images/about/about-19.jpg"
        alt=" image "
      />
    </section>
  );
}
