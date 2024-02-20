"use client";
import Image from "next/image";

const partners = [
  "/images/partners/7.png",
  "/images/partners/8.png",
  "/images/partners/9.png",
  "/images/partners/10.png",
  "/images/partners/11.png",
  "/images/partners/12.png",
];

export default function OurPartner3() {
  return (
    <>
      <section className="our-partners bgc-thm2 pt70 pb40 cta-home5-style ml30 ml0-lg">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="main-title text-center">
                <h6 className="text-white">Trusted by the world’s best</h6>
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
