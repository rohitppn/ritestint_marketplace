"use client";

import { features } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

export default function CounterInfo2() {
  return (
    <section className="pt0-lg pb0-lg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-xl-4 wow fadeInRight">
            <div className="cta-style6 mb30-sm">
              <h2 className="cta-title mb25">
                Find the talent needed to <br className="d-none d-xl-block" />
                get your business growing.
              </h2>
              <p className="text-thm2 fz15 mb55">
                Work with the largest network of independent professionals and
                <br className="d-none d-md-block" /> get things done—from quick
                turnarounds to big transformations.
              </p>
              <div className="row">
                {features.map((elm, i) => (
                  <div key={i} className="col-6">
                    <div className="funfact_one mb40">
                      <div className="details">
                        <ul className="ps-0 mb-0 d-flex">
                          <li>
                            <div className="timer">
                              <CountUp
                                decimals={1}
                                end={elm.value}
                                duration={2.75}
                                enableScrollSpy
                              />
                            </div>
                          </li>
                          <li>
                            <span>M</span>
                          </li>
                        </ul>
                        <p className="mb-0">{elm.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="ud-btn btn-dark bdrs12">
                Get Started <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        width={946}
        height={700}
        style={{ height: "100%" }}
        className="home19-hero-fltimg d-none d-xl-block wow fadeInLeft"
        src="/images/about/home19-cta-2.png"
        alt=" image "
      />
    </section>
  );
}
