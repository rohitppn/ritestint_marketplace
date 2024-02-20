import { stepsThree } from "@/data/steps";
import Image from "next/image";
import React from "react";

export default function NeedSomething5() {
  return (
    <section className="our-features pb90 pb30-md pt0-lg">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title">
              <h2>Need something done?</h2>
              <p className="text">
                Most viewed and all-time top-selling services
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {stepsThree.map((elm, i) => (
            <div key={i} className="col-sm-6 col-lg-3">
              <div className="iconbox-style1 bdr1 text-center">
                <div className="thumb">
                  <Image
                    width={270}
                    height={181}
                    className="w-100"
                    style={{ height: "fit-content" }}
                    src={elm.imgSrc}
                    alt=" image "
                  />
                </div>
                <div className="details">
                  <h4 className="title mt10 mb-3">{elm.title}</h4>
                  <p className="text">{elm.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
