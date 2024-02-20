import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CtaBanner21() {
  return (
    <section className="home11-cta-3 at-home20 bdrs24 maxw1700 mx-auto">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 col-lg-8 wow fadeInRight">
            <div className="cta-style3">
              <h2 className="cta-title text-white">
                With talented freelancers do{" "}
                <br className="d-none d-xl-block" /> more work.
              </h2>
              <p className="cta-text text-white">
                Work with the largest network of independent professionals and{" "}
                <br className="d-none d-lg-block" /> get things done—from quick
                turnarounds.
              </p>
              <Link href="/job-1" className="ud-btn btn-white bdrs16 mr20">
                Find Work <i className="fal fa-arrow-right-long"></i>
              </Link>
              <Link
                href="/freelancer-1"
                className="ud-btn btn-transparent2 bdrs16"
              >
                Find Talent <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn">
            <Image
              width={433}
              height={550}
              style={{ height: "fit-content" }}
              className="home11-ctaimg-v3 at-home15 d-none d-md-block"
              src="/images/about/about-16.png"
              alt=" image "
            />
            <Image
              width={270}
              height={300}
              style={{ height: "fit-content" }}
              className="home15-ctaimg-v2 at-home20 d-none d-md-block"
              src="/images/about/element-12.png"
              alt=" image "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
