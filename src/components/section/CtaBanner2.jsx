import Image from "next/image";
import Link from "next/link";

export default function CtaBanner2() {
  return (
    <>
      <section className="cta-banner-about2 before-none at-home2 position-relative py-0">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-7 col-xl-5 mb100-md">
              <div className="mb30">
                <h5 className="text-thm">For clients</h5>
                <h2 className="title">Find talent your way</h2>
              </div>
              <p className="text">
                Work with the largest network of independent professionals and{" "}
                <br className="d-none d-lg-block" /> get things done—from quick
                turnarounds to big transformations.
              </p>
              <Link
                className="ud-btn btn-thm bdrs90 default-box-shadow2 mt15 mb30-sm"
                href="/contact"
              >
                Contact Us
                <i className="fal fa-arrow-right-long" />
              </Link>
            </div>
            <div className="col-lg-5 col-xl-4 offset-xl-1 position-relative">
              <div className="listbox-style1 px30 py-5 bdrs16 bgc-thm2 mt30-md position-relative">
                <div className="list-style1">
                  <ul className="mb-0">
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      The best for every budget
                    </li>
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      Quality work done quickly
                    </li>
                    <li className="text-white fw500">
                      <i className="far fa-check dark-color bgc-white" />
                      Protected payments, every time
                    </li>
                    <li className="text-white fw500 mb-0">
                      <i className="far fa-check dark-color bgc-white" />
                      24/7 support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          height={707}
          width={610}
          className="home2-cta-img h-auto"
          src="/images/about/about-10.jpg"
          alt="cta banner"
        />
      </section>
    </>
  );
}
