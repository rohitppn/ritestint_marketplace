"use client";
import Header1 from "@/components/header/Header1";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { useEffect } from "react";
import BottomToTop from "@/components/button/BottomToTop";
import SearchModal1 from "@/components/modal/SearchModal1";
import { usePathname } from "next/navigation";
import Header2 from "@/components/header/Header2";
import Header3 from "@/components/header/Header3";
import {
  header1,
  header10,
  header11,
  header2,
  header3,
  header4,
  header5,
  header6,
  header7,
  header8,
  header9,
  sidebarEnable,
} from "@/data/header";
import Header4 from "@/components/header/Header4";
import Header5 from "@/components/header/Header5";
import Footer2 from "@/components/footer/Footer2";
import Header6 from "@/components/header/Header6";
import Footer3 from "@/components/footer/Footer3";
import Header7 from "@/components/header/Header7";
import Header8 from "@/components/header/Header8";
import Header9 from "@/components/header/Header9";
import Footer4 from "@/components/footer/Footer4";
import Header10 from "@/components/header/Header10";
import Footer5 from "@/components/footer/Footer5";
import Header11 from "@/components/header/Header11";
import toggleStore from "@/store/toggleStore";
import { footer } from "@/data/footer";
import "react-tooltip/dist/react-tooltip.css";
import NavSidebar from "@/components/sidebar/NavSidebar";
import Footer12 from "@/components/footer/Footer12";
import Footer14 from "@/components/footer/Footer14";
import Footer15 from "@/components/footer/Footer15";
import Footer18 from "@/components/footer/Footer18";
import Footer20 from "@/components/footer/Footer20";

if (typeof window !== "undefined") {
  import("bootstrap");
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }) {
  const isListingActive = toggleStore((state) => state.isListingActive);
  const path = usePathname();

  // wow js
  useEffect(() => {
    const { WOW } = require("wowjs");
    const wow = new WOW({
      live: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${
          path === "/register" || path === "/login"
            ? "bgc-thm4 mm-wrapper mm-wrapper--position-left-front"
            : sidebarEnable.includes(path)
            ? isListingActive
              ? "menu-hidden-sidebar-content"
              : ""
            : ""
        }`}
      >
        {!footer.includes(path) ? (
          <div className="wrapper ovh mm-page mm-slideout">
            {header1.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header1 />}
            {header2.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header2 />}
            {header3.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header3 />}
            {header4.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header4 />}
            {header5.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header5 />}
            {header6.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header6 />}
            {header7.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header7 />}
            {header8.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header8 />}
            {header9.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header9 />}
            {header10.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header10 />}
            {header11.find(
              (elm) => elm?.split("/")[1] == path?.split("/")[1]
            ) && <Header11 />}

            <SearchModal1 />

            <div className="body_content">
              {children}
              {/* footer */}
              {path === "/home-4" ||
              path === "/home-7" ||
              path === "/home-13" ? (
                <Footer2 />
              ) : path === "/home-5" ? (
                <Footer3 />
              ) : path === "/home-8" ? (
                <Footer4 />
              ) : path === "/home-9" ? (
                <Footer5 />
              ) : path === "/home-12" ? (
                <Footer12 />
              ) : path === "/home-14" ? (
                <Footer14 />
              ) : path === "/home-15" ? (
                <Footer15 />
              ) : path === "/home-18" ? (
                <Footer18 />
              ) : path === "/home-20" ? (
                <Footer20 />
              ) : (
                path !== "/service-7" && path !== "/invoices" && <Footer />
              )}

              {/* bottom to top */}
              <BottomToTop />
            </div>
          </div>
        ) : (
          <div className="wrapper mm-page mm-slideout">
            {children}
            {/* bottom to top */}
            <BottomToTop />
          </div>
        )}

        {/* sidebar mobile navigation */}
        <NavSidebar />
      </body>
    </html>
  );
}
