import { browserCategory } from "@/data/project";
import Link from "next/link";
import BrowserCategoryCard6 from "../card/BrowserCategoryCard6";

export default function BrowserCategory6() {
  return (
    <>
      <section className="pt-0 pb40-md pb90">
        <div className="container">
          <div
            className="row align-items-center wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">Browse talent by category</h2>
                <p className="paragraph">
                  Get some Inspirations from 1800+ skills
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4 mb-lg-2">
                <Link className="ud-btn2" href="/service-single">
                  All Categories
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            {browserCategory.slice(0, 8).map((item,i) => (
              <div key={ i } className="col-sm-6 col-lg-4 col-xl-3">
                <BrowserCategoryCard6 data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
