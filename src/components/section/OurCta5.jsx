import Image from "next/image";
import Link from "next/link";

export default function OurCta5() {
  return (
    <>
      <section className="our-cta bgc-thm4 maxw1400 mx-auto pt80 pb90 pt60-md pb60-md mt110 mt0-lg bdrs16">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7 col-xl-5 wow fadeInLeft">
              <div className="cta-style3 pl80 pl0-lg">
                <h2 className="cta-title">
                  With talented freelancers do more work.
                </h2>
                <div className="d-sm-flex align-items-center mt30">
                  <Link
                    href="/project-1"
                    className="ud-btn btn-dark bdrs60 me-sm-3"
                  >
                    Find Work
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                  <Link
                    href="/freelancer-1"
                    className="ud-btn btn-transparent double-border bdrs60"
                  >
                    Find Talent
                    <i className="fal fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xl-4 position-relative wow zoomIn">
              <div className="cta-img me-4">
                <Image
                  height={305}
                  width={443}
                  className="w-100 h-auto"
                  src="/images/about/about-6.png"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
