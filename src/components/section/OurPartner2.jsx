"use client";
import Image from "next/image";

const partners = [
  "/images/partners/13.png",
  "/images/partners/13.png",
  "/images/partners/15.png",
  "/images/partners/16.png",
  "/images/partners/17.png",
  "/images/partners/18.png",
];

export default function OurPartner2() {
  return (
    <>
      <section className="our-partners bdrb1 pt70 pb40">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="main-title text-center">
                <h6>Trusted by the world’s best</h6>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            {partners.map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-xl-2">
                <div className="partner_item text-center mb30">
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
    </>
  );
}
