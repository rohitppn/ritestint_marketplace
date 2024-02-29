import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CTa13() {
  return (
    <section className="home11-cta-3 at-home13">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-lg-8 wow fadeInLeft">
            <div className="cta-style3">
              <h2 className="cta-title">
                Find the talent needed to get your{" "}
                <br className="d-none d-xl-block" />
                business growing.
              </h2>
              <p className="cta-text">
                Advertise your jobs to millions of monthly users and search 15.8
                million CVs
              </p>
              <Link
                href="/contact"
                className="ud-btn btn-dark default-box-shadow1"
              >
                Get Started <i className="fal fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn">
            <Image
              width={350}
              height={460}
              style={{ height: "fit-content" }}
              className="home11-ctaimg-v3 d-none d-md-block"
              src="/images/about/about-12.png"
              alt=" image "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
