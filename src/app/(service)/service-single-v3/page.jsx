import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import PopulerService from "@/components/section/PopulerService";
import ServiceDetail2 from "@/components/section/ServiceDetails2";
import ServiceDetail3 from "@/components/section/ServiceDetails3";

import TabSection1 from "@/components/section/TabSection1";
import React from "react";

export default function page() {
  return (
    <>
      <TabSection1 />
      <div className=" bgc-thm3">
        <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
        <ServiceDetail3 />
        <PopulerService />
      </div>
    </>
  );
}
