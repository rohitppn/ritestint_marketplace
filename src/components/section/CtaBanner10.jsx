import Image from "next/image";

export default function CtaBanner10() {
  return (
    <>
      <section className="cta-banner-about2 at-home10 mx-auto position-relative pt60-lg pb30-lg">
        <Image
          height={700}
          width={717}
          className="cta-about2-img at-home10 bdrs24 d-none d-xl-block h-auto"
          src="/images/about/about-9.jpg"
          alt="about"
        />
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 offset-xl-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="main-title">
                <h2 className="title text-capitalize">Need something done?</h2>
                <p className="text">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInDown" data-wow-delay="400ms">
            <div className="col-xl-9 offset-xl-3">
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
                    <span className="icon fz40 flaticon-cv" />
                    <h4 className="iconbox-title mt20">Post a job</h4>
                    <p className="text mb-0">
                      It’s free and easy to post a job.
                      <br className="d-none d-md-block" />
                      Simply fill in a title, description.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
                    <span className="icon fz40 flaticon-web-design" />
                    <h4 className="iconbox-title mt20">Choose freelancers</h4>
                    <p className="text mb-0">
                      It’s free and easy to post a job.
                      <br className="d-none d-md-block" />
                      Simply fill in a title, description.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
                    <span className="icon fz40 flaticon-secure" />
                    <h4 className="iconbox-title mt20">Pay safely</h4>
                    <p className="text mb-0">
                      It’s free and easy to post a job.
                      <br className="d-none d-md-block" />
                      Simply fill in a title, description.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
