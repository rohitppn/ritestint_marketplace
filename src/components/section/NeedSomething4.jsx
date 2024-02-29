import AllTimeSelling3 from "../element/AllTimeSelling3";

export default function NeedSomething4() {
  return (
    <>
      <section className="our-features bgc-thm2 pt60 pb35">
        <div
          className="container wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title">
                <h2 className="text-white">Need something done?</h2>
                <p className="text text-white">
                  Most viewed and all-time top-selling services
                </p>
              </div>
            </div>
          </div>
          <AllTimeSelling3 />
        </div>
      </section>
    </>
  );
}
