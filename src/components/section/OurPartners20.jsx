import { partners, partnersTwo } from "@/data/partners";
import Image from "next/image";
import React from "react";

export default function OurPartners20() {
  return (
    <section className="our-partners hover-bgc-color pt80 pb50 maxw1700 mx-auto bdrs30 mb100">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-lg-12">
            <div className="main-title text-center">
              <h6>Trusted by the world’s best</h6>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="300ms">
          {partnersTwo.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-xl-2">
              <div className="partner_item text-center mb30-lg">
                <Image
                  height={26}
                  width={84}
                  className="wa m-auto w-100 h-100 object-fit-contain"
                  src={item}
                  alt={`Partner ${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
