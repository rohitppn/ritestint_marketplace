"use client";
import Image from "next/image";
import HeroSearch1 from "../element/HeroSearch1";
import Link from "next/link";
import { useRouter } from "next/navigation";

const popular = [
  "Designer",
  "Developer",
  "Web",
  "IOS",
  "PHP",
  "Senior",
  "Engineer",
];

export default function Hero6() {
  const router = useRouter();

  // search handler
  const searchHandler = () => {
    router.push("/freelancer-3");
  };

  return (
    <>
      <section className="hero-home6 py-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="pr50 pr0-xl mb30-md position-relative">
                <h1 className="animate-up-1 mb15 text-thm2">
                  With talented <span className="text-thm">freelancers</span>{" "}
                  <br className="d-none d-xl-block" />
                  do more work.
                </h1>
                <p className="animate-up-2 ff-heading mb30 text">
                  Millions of people use freeio.com to turn their ideas into
                  reality.
                </p>
                <div className="advance-search-tab at-home6 bgc-white bdrs4 p10 position-relative zi2 animate-up-3">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 col-xl-9">
                      <div className="advance-search-field mb10-sm">
                        <HeroSearch1 />
                      </div>
                    </div>
                    <div className="col-md-3 col-lg-4 col-xl-3">
                      <div className="text-center">
                        <button
                          onClick={searchHandler}
                          className="ud-btn btn-thm2 bdrs4 w-100"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block d-md-flex mt30 banner-text animate-up-4">
                  <p className="hero-text fz15 me-2 mb-0 text">
                    Popular Searches
                  </p>
                  {popular.map((elm,i)=><a key={i} style={{marginRight:'5px'}} >
                          {`${elm}${(i != (popular.length -1)) ? ',':' '}`}
                        </a>)}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="home6-hero-content position-relative">
                <div className="iconbox-small1 d-none d-md-block wow fadeInRight default-box-shadow4 bounce-y animate-up-1 animated">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6>4.9/5</h6>
                    <p className="text fz13 mb-0">Clients rate professionals</p>
                  </div>
                </div>
                <div className="iconbox-small2 d-none d-md-block wow fadeInLeft default-box-shadow4 bounce-y animate-up-2 animated">
                  <span className="icon flaticon-review" />
                  <div className="details">
                    <h6>+12M</h6>
                    <p className="text fz13 mb-0">Project Completed</p>
                  </div>
                </div>
                <Image
                  height={16}
                  width={17}
                  src="/images/about/element-10.png"
                  alt="object"
                  className="bounce-x img-4 object-fit-contain"
                />
                <Image
                  height={17}
                  width={18}
                  src="/images/about/element-11.png"
                  alt="object"
                  className="spin-right img-5 d-none d-sm-block object-fit-contain"
                />
                <Image
                  height={95}
                  width={126}
                  src="/images/about/home6-hero-element-1.png"
                  alt="object"
                  className="bounce-y img-1 d-none d-sm-block object-fit-contain"
                />
                <Image
                  height={95}
                  width={122}
                  src="/images/about/home6-hero-element-2.png"
                  alt="object"
                  className="bounce-y img-2 d-none d-sm-block object-fit-contain"
                />
                <Image
                  height={96}
                  width={100}
                  src="/images/about/home6-hero-element-3.png"
                  alt="object"
                  className="bounce-y img-3 d-none d-sm-block object-fit-contain"
                />
                <Image
                  height={594}
                  width={572}
                  src="/images/about/home6-hero-img-1.png"
                  alt="object"
                  className="animate-up-1 w-100 object-fit-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
