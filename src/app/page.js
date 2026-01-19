import Image from "next/image";
import ProjectsSection from "@/components/projects/Projects";
import AboutPage from "@/components/about/About";
import SkillsSection from "@/components/skills/SkillsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-290px)]">
      <section>
        <AboutPage></AboutPage>
      </section>
      <section>
        <ProjectsSection></ProjectsSection>
      </section>
      <section>
        <SkillsSection></SkillsSection>
      </section>
      <section>
        <ContactSection></ContactSection>
      </section>
    </div>
  );
}
