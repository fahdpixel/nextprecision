// "use client";
import Accomplishment from "@/components/Home/Accomplishment";
import BrandsTrustUs from "@/components/Home/BrandsTrustUs";
import GallerySlider from "@/components/Home/GallerySlider";
import HomeBanner from "@/components/Home/HomeBanner";
import ServiceDetails from "@/components/Home/ServiceDetails";
import Unique from "@/components/Home/Unique";
import FormToPlan from "@/components/Home/FormToPlan";
import Testomonials from "@/components/Home/Testomonials";

export default function Home() {
  return (
    <main>
      <HomeBanner
        image={"/homebanner.png"}
        button={"Plan Your Next Event with us"}
        headtext={"Making Every Event a Celebration!"}
        scrollCursor={true}
      />
      <Accomplishment />
      <ServiceDetails />
      <Testomonials />
      <Unique />
      <GallerySlider />
      <BrandsTrustUs />
      <FormToPlan />
    </main>
  );
}
