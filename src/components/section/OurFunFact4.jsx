import Image from "next/image";
import Link from "next/link";

export default function OurFunFact4() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <Image
                height={755}
                width={691}
                className="h-100 w-100 mb30-md object-fit-contain"
                src="/images/about/about-7.png"
                alt="about"
              />
            </div>
            <div className="col-lg-5">
              <div className="mb30">
                <div className="main-title">
                  <h2 className="title">
                    A whole world of freelance
                    <br className="d-none d-xl-block" />
                    talent at your fingertips
                  </h2>
                </div>
              </div>
              <div className="why-chose-list at-home5">
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-badge" />
                  <div className="list-content flex-grow-1 ml30">
                    <h4 className="mb-1">Proof of quality</h4>
                    <p className="text mb-0 fz15">
                      Check any pro’s work samples, client reviews, and identity
                      <br className="d-none d-lg-block" />
                      verification.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-money" />
                  <div className="list-content flex-grow-1 ml30">
                    <h4 className="mb-1">No cost until you hire</h4>
                    <p className="text mb-0 fz15">
                      Interview potential fits for your job, negotiate rates,
                      and only pay
                      <br className="d-none d-lg-block" />
                      for work you approve.
                    </p>
                  </div>
                </div>
                <div className="list-one d-flex align-items-start mb30">
                  <span className="list-icon flex-shrink-0 flaticon-security" />
                  <div className="list-content flex-grow-1 ml30">
                    <h4 className="mb-1">Safe and secure</h4>
                    <p className="text mb-0 fz15">
                      Focus on your work knowing we help protect your data and
                      privacy. We’re here with 24/7 support if you need it.
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
