"use client";
import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

export default function Breadcumb5() {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <section className="breadcumb-section pt-0">
        <div className="cta-service-v3 cta-banner mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          <Image
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src="/images/vector-img/left-top.png"
            alt="vector-img"
          />
          <Image
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src="/images/vector-img/right-bottom.png"
            alt="vector-img"
          />
          <Image
            height={300}
            width={400}
            className="service-v3-vector d-none d-lg-block"
            src="/images/about/about-4.png"
            alt="about"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-5">
                <div className="position-relative">
                  <h2 className="text-white">Design &amp; Creative</h2>
                  <p className="text mb30 text-white">
                    Give your visitor a smooth online experience with a solid UX
                    design
                  </p>
                  <div className="d-flex align-items-center">
                    <a
                      className="video-btn mr10 popup-iframe popup-youtube"
                      onClick={() => setToggler(!toggler)}
                    >
                      <i className="fal fa-play" />
                    </a>
                    <h6 className="mb-0 text-white">How Freeio Works</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=7EHnQ0VM4KY"]}
      />
    </>
  );
}
