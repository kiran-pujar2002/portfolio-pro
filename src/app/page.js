import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-16">
      <section id="home" className="scroll-mt-16">
        <Hero />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="credentials">
        <CredentialsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}