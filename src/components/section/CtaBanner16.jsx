import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CtaBanner16() {
  return (
    <section className="our-cta position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-xl-5">
            <Image
              width={549}
              height={576}
              style={{ height: "fit-content" }}
              className="home16-ctaimg-v1 w-100 d-none d-md-block wow fadeInRight"
              src="/images/about/about-17.png"
              alt=" image "
            />
          </div>
          <div className="col-md-6 col-xl-4 offset-xl-2">
            <div className="cta-style3 wow fadeInLeft">
              <h2 className="cta-title">
                We Provide Stable Service <br className="d-none d-xl-block" />
                With Freeio.
              </h2>
              <p className="cta-text">
                Work with the largest network of independent professionals and{" "}
                <br className="d-none d-lg-block" />
                get things done—from quick turnarounds.
              </p>
              <Link href="/project-1" className="ud-btn btn-thm bdrs12 mr20">
                View Project <i className="fal fa-arrow-right-long"></i>
              </Link>
              <Link
                href="/add-services"
                className="ud-btn btn-thm-border bdrs12"
              >
                Post a Service <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
