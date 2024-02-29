"use client";
import Link from "next/link";
import { job1 } from "@/data/job";
import JobCard3 from "../card/JobCard3";

export default function LatestJob3() {
  return (
    <>
      <section className="hover-bgc-color pb90 pb30-md bdrs24">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Our Latest Jobs</h2>
                <p className="paragraph">
                  Know your worth and find the job that qualify your life
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4 mb-lg-2">
                <Link className="ud-btn2" href="/job-1">
                  Browse All
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {job1.slice(0, 9).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-4">
                <JobCard3 data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
