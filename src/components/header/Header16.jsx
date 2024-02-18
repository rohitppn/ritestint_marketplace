import React from "react";
import Navigation from "./Navigation";
import MobileNavigation6 from "./MobileNavigation6";
import Image from "next/image";
import Link from "next/link";

export default function Header16() {
  return (
    <>
      <header className="header-nav nav-innerpage-style at-home15 main-menu mx30 bgc-light-yellow  ">
        <nav className="posr">
          <div className="container posr">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0 px-xl-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <Link className="header-logo logo1" href="/">
                      <Image
                        width={133}
                        height={40}
                        src="/images/header-logo-dark.svg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>

                  <Navigation />
                </div>
              </div>
              <div className="col-auto pe-0 pe-xl-3">
                <div className="d-flex align-items-center">
                  <Link className="login-info mx15-xl mx30" href="/seller">
                    <span className="d-none d-xl-inline-block">Become a</span>{" "}
                    Seller
                  </Link>
                  <Link
                    className="login-info mr15-xl mr10 ud-btn btn-dark add-joining bdrs12 dark-color bg-transparent"
                    href="/login"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="ud-btn btn-dark add-joining bdrs12 text-white"
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
      <MobileNavigation6 />
    </>
  );
}
