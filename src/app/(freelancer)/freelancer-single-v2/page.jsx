import Breadcumb10 from "@/components/breadcumb/Breadcumb10";
import Breadcumb17 from "@/components/breadcumb/Breadcumb17";

import FreelancerDetails2 from "@/components/section/FreelancerDetails2";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title:
    "Freeio - Freelance Marketplace React/Next Js Template | Freelancer Single",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />
      <Breadcumb10 path={["Home", "Services", "Design & Creative"]} />

      <FreelancerDetails2 />
    </>
  );
}
