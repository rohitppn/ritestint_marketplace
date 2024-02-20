import { stepsTwo } from "@/data/steps";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About14() {
  return (
    <section className="bgc-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7">
            <div className="home14-ctaimg-1 mb30-lg position-relative wow fadeInRight">
              <Image
                width={723}
                height={575}
                style={{ height: "fit-content" }}
                className="w-100-lg"
                src="/images/about/about-13.png"
                alt=" image "
              />
              <div className="iconbox-small1 text-start d-flex wow fadeInRight default-box-shadow4 bounce-x animate-up-1">
                <span className="icon flaticon-badge"></span>
                <div className="details pl20">
                  <h6 className="mb-1">Proof of quality</h6>
                  <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
                </div>
              </div>
              <div className="iconbox-small2 text-start d-flex wow fadeInLeft default-box-shadow4 bounce-y animate-up-2">
                <span className="icon flaticon-security"></span>
                <div className="details pl20">
                  <h6 className="mb-1">Safe and secure</h6>
                  <p className="text fz13 mb-0">Lorem Ipsum Dolar Amet</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="position-relative wow fadeInLeft">
              <h2 className="text-white mb35">
                Join World's Best Marketplace{" "}
                <br className="d-none d-lg-block" /> for Workers
              </h2>
              <p className="text text-white mb35">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <div className="list-style2 light-style">
                <ul className="mb30">
                  {stepsTwo.map((elm, i) => (
                    <li key={i}>
                      <i className="far fa-check"></i>
                      {elm.text}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/freelancer-1" className="ud-btn btn-white">
                Find Talent<i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
