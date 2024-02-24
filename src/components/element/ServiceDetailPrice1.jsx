"use client";
import { useState } from "react";
const tabs = ["Jobs"];

export default function ServiceDetailPrice1() {
  const [getTab, setTab] = useState(0);

  return (
    <>
      <div className="price-widget">
        <div className="navtab-style1">
          <nav>
            <div className="nav nav-tabs mb20">
              {tabs.map((item, i) => (
                <button
                  onClick={() => setTab(i)}
                  key={i}
                  className={`nav-link fw500 ${getTab === i ? "active" : ""}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            {getTab === 0 && (
              <div className="price-content">
                <div className="price">Research Analyst</div>
                <div className="h5 mb-2">Real Estate, or related field</div>
                <p className="text fz14">
                  Real Estate, or related field; master's degree preferred. 2-3
                  years of experience in market research, data analysis,
                  preferably in real estate with GIS knowledge.
                </p>
                <hr className="opacity-100 mb20" />
                <ul className="p-0 mb15 d-sm-flex align-items-center">
                  {/* <li className="fz14 fw500 dark-color">
                    <i className="flaticon-sandclock fz20 text-thm2 me-2 vam" />
                    3 Days Delivery
                  </li> */}
                  {/* <li className="fz14 fw500 dark-color ml20 ml0-xs">
                    <i className="flaticon-recycle fz20 text-thm2 me-2 vam" />2
                    Immidiate
                  </li> */}
                </ul>
                <div className="list-style1">
                  <ul>
                    <li className="mb15">
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Easy Apply
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Delhi
                    </li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a
                    href="https://forms.gle/kcRueBZheLDrJiTf7"
                    className="ud-btn btn-thm"
                  >
                    Apply Now
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            )}
            {/* {getTab === 1 && (
              <div className="price-content">
                <div className="price">$29</div>
                <div className="h5 mb-2">Real Estate, or related field </div>
                <p className="text fz14">
                  master's degree preferred. 2-3 years of experience in market
                  research, data analysis, preferably in real estate with GIS
                  knowledge.
                </p>
                <hr className="opacity-100 mb20" />
                <ul className="p-0 mb15 d-sm-flex align-items-center">
                  <li className="fz14 fw500 dark-color">
                    <i className="flaticon-sandclock fz20 text-thm2 me-2 vam" />
                    Easy Apply
                  </li>
                  <li className="fz14 fw500 dark-color ml20 ml0-xs">
                    <i className="flaticon-recycle fz20 text-thm2 me-2 vam" />
                    Free Guidence
                  </li>
                </ul>
                <div className="list-style1">
                  <ul>
                    <li className="mb15">
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Immidiate Hiring
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Interview prepration
                    </li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a
                    href="https://forms.gle/kcRueBZheLDrJiTf7"
                    className="ud-btn btn-thm"
                  >
                    Apply Now
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            )}
            {getTab === 2 && (
              <div className="price-content">
                <div className="price">$250</div>
                <div className="h5 mb-2">High-converting Landing Pages</div>
                <p className="text fz14">
                  I will redesign your current landing page or create one for
                  you (upto 4 sections)
                </p>
                <hr className="opacity-100 mb20" />
                <ul className="p-0 mb15 d-sm-flex align-items-center">
                  <li className="fz14 fw500 dark-color">
                    <i className="flaticon-sandclock fz20 text-thm2 me-2 vam" />
                    3 Days Delivery
                  </li>
                  <li className="fz14 fw500 dark-color ml20 ml0-xs">
                    <i className="flaticon-recycle fz20 text-thm2 me-2 vam" />2
                    Revisions
                  </li>
                </ul>
                <div className="list-style1">
                  <ul>
                    <li className="mb15">
                      <i className="far fa-check text-thm3 bgc-thm3-light" />2
                      Page / Screen
                    </li>
                    <li>
                      <i className="far fa-check text-thm3 bgc-thm3-light" />
                      Source file
                    </li>
                  </ul>
                </div>
                <div className="d-grid">
                  <a className="ud-btn btn-thm">
                    Continue $250
                    <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}
