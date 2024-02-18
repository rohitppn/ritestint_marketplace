import Image from "next/image";
import Link from "next/link";

export default function OurFunFact5() {
  return (
    <>
      <section className="bgc-thm3 pb90 pb30-md">
        <div className="container wow fadeInUp" data-wow-delay="300ms">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div className="main-title text-center">
                <h2 className="title">Freeio Achievements</h2>
                <p className="paragraph mt10">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6 col-md-3">
              <div className="funfact_one at-home5 mb30 text-center">
                <div className="icon mb10">
                  <span className="flaticon-working" />
                </div>
                <div className="details">
                  <ul className="ps-0 mb-2 d-flex justify-content-center">
                    <li>
                      <div className="timer">834</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Total Freelancer</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="funfact_one at-home5 mb30 text-center">
                <div className="icon mb10">
                  <span className="flaticon-star-2" />
                </div>
                <div className="details">
                  <ul className="ps-0 mb-2 d-flex justify-content-center">
                    <li>
                      <div className="timer">732</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Positive Review</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="funfact_one at-home5 mb30 text-center">
                <div className="icon mb10">
                  <span className="flaticon-file" />
                </div>
                <div className="details">
                  <ul className="ps-0 mb-2 d-flex justify-content-center">
                    <li>
                      <div className="timer">90</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Order recieved</p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="funfact_one at-home5 mb30 text-center">
                <div className="icon mb10">
                  <span className="flaticon-rocket-1" />
                </div>
                <div className="details">
                  <ul className="ps-0 mb-2 d-flex justify-content-center">
                    <li>
                      <div className="timer">236</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
