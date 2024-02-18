import Breadcumb10 from "@/components/breadcumb/Breadcumb10";


import ProjectDetail2 from "@/components/section/ProjectDetails2";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title:
    "Freeio - Freelance Marketplace React/Next Js Template | Project Signle",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />

      <Breadcumb10 path={["Home", "Services", "Design & Creative"]} />
      {/* <Breadcumb11 /> */}
      <ProjectDetail2 />
    </>
  );
}
