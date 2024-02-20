import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb5 from "@/components/breadcumb/Breadcumb5";

import Listing3 from "@/components/section/Listing3";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Service 3",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <Breadcumb5 />
      <Listing3 />
    </>
  );
}
