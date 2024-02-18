import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import ListStyleContent from "@/components/section/ListStyleContent";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Service All",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <ListStyleContent />
    </>
  );
}
