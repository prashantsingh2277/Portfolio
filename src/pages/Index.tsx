import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import ExperienceTimeline from "@/components/Portfolio/ExperienceTimeline";
import ProjectsSection from "@/components/Portfolio/ProjectsSection";
import ResearchSection from "@/components/Portfolio/ResearchSection";
import AchievementsSection from "@/components/Portfolio/AchievementsSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <ResearchSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default Index;