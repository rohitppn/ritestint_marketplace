import Image from "next/image";

export default function CtaBanner6() {
  return (
    <>
      <section className="cta-banner-home7 position-relative pt15 pb30">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-7 col-xl-5 wow fadeInRight">
              <div className="testimonial-style4 position-relative ps-0">
                <h2 className="sub-title text-thm mb20">Envato</h2>
                <h4 className="title mb45 mb30-md">
                  “ I have used Freeio numerous times for several different
                  companies. I have always had great experiences. I once tried
                  using someone else and I ended up having to cancel the order
                  and move back to Freeio. ”
                </h4>
                <h6 className="author fz14">Ali Tufan</h6>
                <p className="desig mb-0">Product Manager, Apple Inc</p>
              </div>
            </div>
            <div className="col-md-5 col-xl-5 wow fadeInLeft">
              <Image
                height={576}
                width={572}
                className="w-100 h-auto bdrs4 object-fit-contain"
                src="/images/about/about-11.jpg"
                alt="about"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
