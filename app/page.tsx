import AboutSection from "@/components/AboutSection";
import ArticlesSection from "@/components/ArticlesSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";

export default function Home() {
  return (
    <>
       <HeroSection />
       <AboutSection />
       <ProjectsSection />
       <ArticlesSection />
      <WorkExperienceSection />
      <ContactSection />
    </>
  );
}
