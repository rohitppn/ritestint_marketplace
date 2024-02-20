"use client";

import toggleStore from "@/store/toggleStore";
import CategoryOption1 from "../option/CategoryOption1";
import ClearButton from "../button/ClearButton";
import NoOfEmployeeOption1 from "../option/NoOfEmployeeOption1";

export default function ListingSidebarModal4() {
  const listingToggle = toggleStore((state) => state.listingToggleHandler);

  return (
    <>
      <div className="lefttside-hidden-bar">
        <div className="hsidebar-header bdrb1">
          <h4 className="list-title">All filters</h4>
          <div className="sidebar-close-icon" onClick={listingToggle}>
            <span className="far fa-times" />
          </div>
        </div>
        <div className="hsidebar-content">
          <div className="widget-wrapper">
            <div className="sidebar-accordion">
              <div className="accordion" id="accordionExample2">
                <div className="card mb20 pb10">
                  <div className="card-header" id="headingZero">
                    <h4>
                      <button
                        className="btn btn-link ps-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseZero"
                        aria-expanded="false"
                        aria-controls="collapseZero"
                      >
                        Category
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseZero"
                    className="collapse show"
                    aria-labelledby="headingZero"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <CategoryOption1 />
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingThrees">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThrees"
                        aria-expanded="true"
                        aria-controls="collapseThrees"
                      >
                        No of Employees
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseThrees"
                    className="collapse show"
                    aria-labelledby="headingThrees"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <NoOfEmployeeOption1 />
                    </div>
                  </div>
                </div>
              </div>
              <ClearButton />
            </div>
          </div>
        </div>
      </div>
      <div onClick={listingToggle} className="hiddenbar-body-ovelay" />
    </>
  );
}
