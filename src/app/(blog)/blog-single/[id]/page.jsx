import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import Header3 from "@/components/header/Header3";
import BlogArea4 from "@/components/section/BlogArea4";
import RecentPostArea1 from "@/components/section/RecentPostArea1";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Blog Single",
};

export default function page() {
  return (
    <>
    
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <BlogArea4 />
      <RecentPostArea1 />
    </>
  );
}
