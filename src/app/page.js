import Image from "next/image";
import ProjectsSection from "@/components/projects/Projects";
import AboutPage from "@/components/about/About";
import SkillsSection from "@/components/skills/SkillsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-290px)]">
      <AboutPage></AboutPage>
      <ProjectsSection></ProjectsSection>
      <SkillsSection></SkillsSection>
      <ContactSection></ContactSection>
    </div>
  );
}
