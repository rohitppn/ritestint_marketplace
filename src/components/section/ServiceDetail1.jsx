"use client";
import ServiceDetailComment1 from "../element/ServiceDetailComment1";
import ServiceDetailExtra1 from "../element/ServiceDetailExtra1";
import ServiceDetailFaq1 from "../element/ServiceDetailFaq1";
import ServiceDetailFaq2 from "../element/ServiceDetailFaq2";
import ServiceDetailPrice1 from "../element/ServiceDetailPrice1";
import ServiceDetailReviewInfo1 from "../element/ServiceDetailReviewInfo1";
import ServiceDetailSlider1 from "../element/ServiceDetailSlider1";
import { Sticky, StickyContainer } from "react-sticky";
import useScreen from "@/hook/useScreen";
import ServiceContactWidget1 from "../element/ServiceContactWidget1";

export default function ServiceDetail1() {
  const isMatchedScreen = useScreen(1216);

  return (
    <>
      <StickyContainer>
        <section className="pt10 pb90 pb30-md">
          <div className="container">
            <div className="row wrap">
              <div className="col-lg-8">
                <div className="column">
                  <ServiceDetailSlider1 />
                  <div className="service-about">
                    <h4>Qualifications:</h4>
                    <p className="text mb30">
                      Bachelor's degree in Economics, Finance, Real Estate, or
                      related field; master's degree preferred. 2-3 years of
                      experience in market research, data analysis, preferably
                      in real estate with GIS knowledge. Strong analytical
                      skills, proficient in tools like Excel; familiarity with
                      SPSS or R. Knowledge of data visualization tools (e.g.,
                      Tableau, Power BI) is desirable. Excellent written and
                      verbal communication skills for presenting research
                      findings. Detail-oriented, committed to producing accurate
                      and reliable research outputs. Self-motivated team player
                      with the ability to work independently. Knowledge of the
                      real estate market and industry trends is advantageous.
                    </p>
                    <p className="text mb-0">Services I provide:</p>
                    <p className="text mb-0">
                      1) Conduct comprehensive market research on Delhi's real
                      estate (residential, commercial, and industrial sectors).
                    </p>
                    <p className="text mb-0">
                      2) Analyze data from various sources, including market
                      reports, listings, and government databases.
                    </p>
                    <p className="text mb-0">
                      3) Monitor market trends, economic indicators, and
                      regulatory changes.
                    </p>
                    <p className="text mb-0">
                      4) Evaluate the competitive landscape, including market
                      dynamics, pricing trends, and competitor activities.
                    </p>
                    <p className="text mb30">
                      5) Utilize statistical tools and data visualization for
                      reporting.
                    </p>
                    <p className="text mb30">
                      Collaborate with teams to identify opportunities, assess
                      risks, and develop strategies.
                    </p>
                    <p className="text mb30">
                      Provide recommendations based on research findings for
                      decision-making.
                    </p>
                    <p className="text mb30">
                      Assist in refining data collection and analytical
                      frameworks.
                    </p>
                    <p className="text mb30">
                      Stay updated on industry best practices and emerging
                      technologies.
                    </p>
                    <p className="text mb30">
                      Maintain accurate records of research findings and data
                      sources.
                    </p>
                    <p className="text mb30">
                      This candidate is expected to bring a combination of
                      educational background, technical skills, and industry
                      knowledge to contribute effectively to comprehensive
                      market research activities in the real estate domain.
                    </p>
                    <div className="d-flex align-items-start mb50">
                      <div className="list1">
                        <h6>App type</h6>
                        <p className="text mb-0">
                          Research Analyst &amp; Real Estate
                        </p>
                        {/* <p className="text">Graphics &amp; design</p> */}
                      </div>
                      {/* <div className="list1 ml80">
                        <h6>Design tool</h6>
                        <p className="text mb-0">Adobe XD, Figma,</p>
                        <p className="text">Adobe Photoshop</p>
                      </div> */}
                      {/* <div className="list1 ml80">
                        <h6>Device</h6>
                        <p className="text">Mobile, Desktop</p>
                      </div> */}
                    </div>
                    {/* <hr className="opacity-100 mb60" /> */}
                    {/* <h4>Compare Packages</h4> */}
                    {/* <div className="table-style2 table-responsive bdr1 mt30 mb60">
                      <table className="table table-borderless mb-0">
                        <thead className="t-head">
                          <tr>
                            <th className="col" scope="col" />
                            <th className="col" scope="col">
                              <span className="h2">
                                $29 <small>/ monthly</small>
                              </span>
                              <br />
                              <span className="h4">Basic</span>
                              <br />
                              <span className="text">
                                I will redesign your current{" "}
                                <br className="d-none d-lg-block" /> landing
                                page or create one for{" "}
                                <br className="d-none d-lg-block" /> you (upto 4
                                sections)
                              </span>
                            </th>
                            <th className="col" scope="col">
                              <span className="h2">
                                $49 <small>/ monthly</small>
                              </span>
                              <br />
                              <span className="h4">Standard</span>
                              <br />
                              <span className="text">
                                4 High Quality Desktop{" "}
                                <br className="d-none d-lg-block" /> Pages.
                              </span>
                            </th>
                            <th className="col" scope="col">
                              <span className="h2">
                                $89 <small>/ monthly</small>
                              </span>
                              <br />
                              <span className="h4">Premium</span>
                              <br />
                              <span className="text">
                                4 High Quality Desktop and{" "}
                                <br className="d-none d-lg-block" /> Mobile
                                Pages.
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="t-body">
                          <tr className="bgc-thm3">
                            <th scope="row">Source file</th>
                            <td>
                              <a className="check_circle bgc-thm">
                                <span className="fas fa-check" />
                              </a>
                            </td>
                            <td>
                              <a className="check_circle bgc-thm">
                                <span className="fas fa-check" />
                              </a>
                            </td>
                            <td>
                              <a className="check_circle bgc-thm">
                                <span className="fas fa-check" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Number of pages</th>
                            <td>2</td>
                            <td>4</td>
                            <td>6</td>
                          </tr>
                          <tr className="bgc-thm3">
                            <th scope="row">Revisions</th>
                            <td>1</td>
                            <td>3</td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <th scope="row">Delivery Time </th>
                            <td>2 Days</td>
                            <td>3 Days</td>
                            <td>4 Days</td>
                          </tr>
                          <tr className="bgc-thm3">
                            <th scope="row">Total</th>
                            <td>$29</td>
                            <td>$49</td>
                            <td>$89</td>
                          </tr>
                          <tr>
                            <th scope="row" />
                            <td>
                              <a className="ud-btn btn-thm">
                                Select
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </td>
                            <td>
                              <a className="ud-btn btn-thm">
                                Select
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </td>
                            <td>
                              <a className="ud-btn btn-thm">
                                Select
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div> */}
                    <hr className="opacity-100 mb60" />
                    <h4>For Job Seekers</h4>
                    <ServiceDetailFaq1 />
                    <hr className="opacity-100 mb60" />
                    <h4>For Businesses</h4>
                    <ServiceDetailFaq2 />

                    {/* <hr className="opacity-100 mb60" /> */}
                    {/* <h4>Add Extra Services</h4> */}
                    {/* <ServiceDetailExtra1 /> */}
                    {/* <hr className="opacity-100 mb15" /> */}
                    {/* <ServiceDetailReviewInfo1 /> */}
                    {/* <ServiceDetailComment1 /> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="column">
                  {isMatchedScreen ? (
                    <Sticky>
                      {({ style }) => (
                        <div className="scrollbalance-inner" style={style}>
                          <div className="blog-sidebar ms-lg-auto">
                            <ServiceDetailPrice1 />
                            {/* <ServiceContactWidget1 /> */}
                          </div>
                        </div>
                      )}
                    </Sticky>
                  ) : (
                    <div className="scrollbalance-inner">
                      <div className="blog-sidebar ms-lg-auto">
                        <ServiceDetailPrice1 />
                        <ServiceContactWidget1 />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}
