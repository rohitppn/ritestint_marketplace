import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CtaBanner20() {
  return (
    <section className="cta-banner-about2 before-none at-home19 position-relative py-0">
      <div className="container position-relative">
        <div className="row align-items-center justify-content-xl-end">
          <div className="col-lg-7 col-xl-5 wow fadeInLeft">
            <div className="mb30">
              <h5 className="text-thm">For clients</h5>
              <h2 className="title">Find talent your way</h2>
            </div>
            <p className="text">
              Work with the largest network of independent professionals and{" "}
              <br className="d-none d-lg-block" /> get things done—from quick
              turnarounds to big transformations.
            </p>
            <Link className="ud-btn btn-dark bdrs12 mt15" href="/contact">
              Contact Us<i className="fal fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
      <Image
        width={946}
        height={700}
        style={{ height: "100%" }}
        className="home19-hero-fltimg-2 d-none d-xl-block wow fadeInRight"
        src="/images/about/home19-cta-1.png"
        alt=" image "
      />
    </section>
  );
}
