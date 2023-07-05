import Accomplishment from "@/components/Home/Accomplishment";
import HomeBanner from "@/components/Home/HomeBanner";
import ServiceDetails from "@/components/Home/ServiceDetails";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <Accomplishment />
      <ServiceDetails />
    </main>
  );
}
