import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb8 from "@/components/breadcumb/Breadcumb8";

import Header3 from "@/components/header/Header3";
import ServiceDetail1 from "@/components/section/ServiceDetail1";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title: "Ritestint - Job Marketplace",
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <Breadcumb8 />
      <ServiceDetail1 />
    </>
  );
}
