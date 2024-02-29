import Breadcumb12 from "@/components/breadcumb/Breadcumb12";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import Listing9 from "@/components/section/Listing9";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Job 1",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <Breadcumb12 />
      <Listing9 />
    </>
  );
}
