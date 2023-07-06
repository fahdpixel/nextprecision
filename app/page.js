// "use client";
import Accomplishment from "@/components/Home/Accomplishment";
import BrandsTrustUs from "@/components/Home/BrandsTrustUs";
import GallerySlider from "@/components/Home/GallerySlider";
import HomeBanner from "@/components/Home/HomeBanner";
import ServiceDetails from "@/components/Home/ServiceDetails";
import Unique from "@/components/Home/Unique";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Accomplishment />
      <ServiceDetails />
      <Unique />
      <GallerySlider />
      <BrandsTrustUs/>
    </main>
  );
}
