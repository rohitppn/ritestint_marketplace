import Breadcumb2 from "@/components/breadcumb/Breadcumb2";
import Breadcumb3 from "@/components/breadcumb/Breadcumb3";

import BlogArea3 from "@/components/section/BlogArea3";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Blog 3",
};

export default function page() {
  return (
    <>
    
      <Breadcumb3 path={["Home", "Services", "Design & Creative"]} />
      <Breadcumb2
        title="Freeio Blog"
        brief="Give your visitor a smooth online experience with a solid UX design"
      />
      <BlogArea3 />
    </>
  );
}
