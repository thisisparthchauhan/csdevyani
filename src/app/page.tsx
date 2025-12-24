import HeroSection from "@/components/home/HeroSection";
import QuickLinks from "@/components/home/QuickLinks";
import AboutSection from "@/components/home/AboutSection";
import FirmOverview from "@/components/home/FirmOverview";
import BusinessActivities from "@/components/home/BusinessActivities";
import StatisticsSection from "@/components/home/StatisticsSection";
import LatestNews from "@/components/home/LatestNews";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <QuickLinks />
      <AboutSection />
      <FirmOverview />
      <BusinessActivities />
      <StatisticsSection />
      <LatestNews />
      <ContactSection />
    </div>
  );
}
