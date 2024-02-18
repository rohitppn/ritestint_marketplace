import Link from "next/link";
import Navigation from "./Navigation";
import Image from "next/image";
import Mega from "./Mega";
import MobileNavigation1 from "./MobileNavigation1";
import useStickyMenu from "@/hook/useStickyMenu";

export default function Header9() {
  const sticky = useStickyMenu(50);
  return (
    <>
      <header
        className={`header-nav nav-homepage-style stricky main-menu border-0 animated   ${
          sticky ? "slideInDown stricky-fixed" : "slideIn"
        }`}
      >
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        height={40}
                        width={133}
                        src="/images/header-logo.svg"
                        alt="Header Logo"
                      />
                    </Link>
                    <Link className="header-logo logo2" href="/">
                      <Image
                        height={40}
                        width={133}
                        src="/images/header-logo2.svg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                  <div className="home1_style">
                    <Mega />
                  </div>
                  <Navigation />
                </div>
              </div>
              <div className="col-auto px-0">
                <div className="d-flex align-items-center">
                  <a
                    className="login-info bdrl1 bdrn-lg pl0-lg pl30"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                  >
                    <span className="flaticon-loupe" />
                  </a>
                  <Link
                    className="login-info mx10-lg mx30"
                    href="/become-seller"
                  >
                    <span className="d-none d-xl-inline-block">Become a</span>{" "}
                    Seller
                  </Link>
                  <Link className="login-info mr10-lg mr30" href="/login">
                    Sign in
                  </Link>
                  <Link
                    className="ud-btn btn-white add-joining"
                    href="/register"
                  >
                    Join
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation1 />
    </>
  );
}
