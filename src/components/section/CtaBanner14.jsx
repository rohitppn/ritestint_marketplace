import { steps } from "@/data/steps";
import React from "react";

export default function CtaBanner14() {
  return (
    <section className="our-features pb90 pb30-md">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title text-center">
              <h2>Need something done?</h2>
              <p className="text">
                Most viewed and all-time top-selling services
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {steps.map((elm, i) => (
            <div key={i} className="col-sm-6 col-lg-3">
              <div
                className={`iconbox-style1 at-home14-v2 ${
                  i + 1 != steps.length ? "after_style" : ""
                } p-0 text-center`}
              >
                <div className="icon before-none">
                  <span className={elm.iconClass}></span>
                </div>
                <div className="details">
                  <h4 className="title mt10 mb-3">{elm.title}</h4>
                  <p className="text">
                    {elm.description.split(" ").slice(0, 10).join(" ")}
                    <br className="d-none d-xxl-block" />
                    {elm.description.split(" ").slice(10).join(" ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
