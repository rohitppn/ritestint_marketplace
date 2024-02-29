import Image from "next/image";
import Link from "next/link";

export default function About1() {
  return (
    <>
      <section className="our-about bgc-thm2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="position-relative mb30-lg">
                {/* <div className="iconbox-small1 at-home1 d-none d-md-block wow fadeInRight">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6>4.9/5</h6>
                    <p className="text fz13 mb-0">Clients rate professionals</p>
                  </div>
                </div> */}
                {/* <div className="iconbox-small2 d-none d-md-block wow fadeInLeft">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6>+12T</h6>
                    <p className="text fz13 mb-0">Project Completed</p>
                  </div>
                </div> */}
                <div
                  className="about-img wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <Image
                    height={574}
                    width={691}
                    className="w100 object-fit-contain"
                    src="/images/home/home4.jpeg"
                    alt="object"
                  />
                </div>
                {/* <div className="imgbox-1 default-box-shadow1 text-center wow fadeInUp">
                  <Image
                    height={68}
                    width={362}
                    className="img-1 bounce-y w-f"
                    src="/images/about/happy-client.png"
                    alt="object"
                  />
                </div> */}
              </div>
            </div>
            <div className="col-xl-5 offset-xl-1">
              <div
                className="position-relative wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <h2 className="text-white mb35">
                  RiteStint: Agile Talent, Fast Fit{" "}
                  <br className="d-none d-lg-block" />
                </h2>
                <p className="text text-white mb35">
                  RiteStint, a tech-driven staffing and recruitment company
                  headquartered in Jaipur, India, understands the fast-paced
                  nature of modern business. We specialize in helping companies
                  of all sizes and across diverse industries quickly and
                  efficiently access the right talent they need to thrive.
                  Unlike traditional agencies, we leverage cutting-edge AI
                  technology and a vast network of skilled professionals to
                  deliver innovative and efficient staffing solutions.
                </p>
                <div className="list-style2 light-style">
                  <ul className="mb30">
                    <li>
                      <i className="far fa-check" />
                      Agile Solutions
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Data-Driven Decisions
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Seamless Staffing Experience
                    </li>
                  </ul>
                </div>
                <Link
                  href="https://forms.gle/kcRueBZheLDrJiTf7"
                  className="ud-btn btn-thm"
                >
                  Apply Now
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
