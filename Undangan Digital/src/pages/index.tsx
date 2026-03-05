import DefaultLayout from "@/layouts/default";
import HeroSection from "@/pages/HeroSection";
import AboutPage from "@/pages/about";
import PricingPage from "@/pages/pricing";
import KontakSection from "@/pages/KontakSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <AboutPage />
      <PricingPage />
      <KontakSection />
    </DefaultLayout>
  );
}
