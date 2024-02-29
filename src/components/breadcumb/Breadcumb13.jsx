"use client";
import { job1 } from "@/data/job";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Breadcumb13() {
  const { id } = useParams();
  const data = job1.find((item) => item.id == id);
  return (
    <>
      <section className="breadcumb-section pt-0">
        <div className="cta-job-v1 freelancer-single-style mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
          <Image
            height={226}
            width={198}
            className="left-top-img wow zoomIn"
            src="/images/vector-img/left-top.png"
            alt="left-top"
          />
          <Image
            height={181}
            width={255}
            className="right-bottom-img wow zoomIn"
            src="/images/vector-img/right-bottom.png"
            alt="right-bottom"
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-8 mx-auto">
                <div className="position-relative">
                  <div className="list-meta d-lg-flex align-items-end justify-content-between">
                    <div className="wrapper d-sm-flex align-items-center mb20-md">
                      <a className="position-relative freelancer-single-style">
                        {data ? (
                          <Image
                            height={100}
                            width={100}
                            className="wa"
                            src={data.img}
                            alt="job-single"
                          />
                        ) : (
                          <Image
                            height={100}
                            width={100}
                            className="wa"
                            src="/images/team/job-single.png"
                            alt="job-single"
                          />
                        )}
                      </a>
                      <div className="ml20 ml0-xs mt15-sm">
                        {data ? (
                          <h4 className="title">{data.title}</h4>
                        ) : (
                          <h4 className="title">UX/UI Designer</h4>
                        )}
                        <h6 className="mb-3 text-thm">Medium</h6>
                        <h6 className="list-inline-item mb-0">
                          $125k-$135k Hourly
                        </h6>
                        <h6 className="list-inline-item mb-0 bdrl-eunry pl15">
                          1-5 Days
                        </h6>
                        <h6 className="list-inline-item mb-0 bdrl-eunry pl15">
                          Expensive
                        </h6>
                        <h6 className="list-inline-item mb-0 bdrl-eunry pl15">
                          Remote
                        </h6>
                      </div>
                    </div>
                    <Link href="/contact" className="ud-btn btn-thm2">
                      Apply For Job
                      <i className="fal fa-arrow-right-long" />
                    </Link>
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
