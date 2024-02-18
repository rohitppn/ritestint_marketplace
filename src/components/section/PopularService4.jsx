import { product1 } from "@/data/product";
import Link from "next/link";
import PopularServiceCard1 from "../card/PopularServiceCard1";
import PopularServiceSlideCard1 from "../card/PopularServiceSlideCard1";

export default function PopularService4() {
  return (
    <>
      <section className="pb40-md pb70 mt70 mt0-lg">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title mb30-lg">
                <h2 className="title">Popular Services</h2>
                <p className="paragraph">
                  Most viewed and all-time top-selling services
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
          <div className="row">
            {product1.slice(0, 8).map((item,i) => (
              <div key={ i } className="col-sm-6 col-xl-3">
                {item.gallery ? (
                  <PopularServiceSlideCard1
                    data={item}
                    isContentExpanded={true}
                  />
                ) : (
                  <PopularServiceCard1 data={item} isContentExpanded={true} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
