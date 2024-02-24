import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb4 from "@/components/breadcumb/Breadcumb4";

import Listing1 from "@/components/section/Listing1";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title: "Ritestint - Job Search Marketplace",
};

export default function page() {
  return (
    <>
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <Breadcumb4 />
      <Listing1 />
    </>
  );
}
