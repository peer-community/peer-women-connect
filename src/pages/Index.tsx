import { Header } from "@/components/navigation/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { B2BSection } from "@/components/sections/B2BSection";
import { CompaniesSection } from "@/components/sections/CompaniesSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="mission">
          <MissionSection />
        </div>
        <div id="community">
          <CommunitySection />
        </div>
        <div id="b2b">
          <B2BSection />
        </div>
        <CompaniesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
