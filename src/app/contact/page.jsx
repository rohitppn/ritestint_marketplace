import Breadcumb1 from "@/components/breadcumb/Breadcumb1";

import ContactInfo1 from "@/components/section/ContactInfo1";
import GoogleMap1 from "@/components/section/GoogleMap1";
import OurFaq1 from "@/components/section/OurFaq1";
import OurFaq2 from "@/components/section/OurFaq2";
import OurFaq3 from "@/components/section/OurFaq3";

export const metadata = {
  title: "Ritestint - Job Marketplace",
};

export default function page() {
  return (
    <>
      <Breadcumb1
        title={"Contact us"}
        brief={`We'd love to talk about how we can help you.`}
        isBtnActive={false}
      />
      <ContactInfo1 />
      <GoogleMap1 />
      <OurFaq1 />
      <OurFaq2 />
      <OurFaq3 />
    </>
  );
}
