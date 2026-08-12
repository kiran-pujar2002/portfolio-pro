import Hero from "@/components/Hero";
import ExperienceSummary from "@/components/ExperienceSummary";
import ProjectsPreview from "@/components/ProjectsPreview";
import SkillsOverview from "@/components/SkillsOverview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSummary />
      <ProjectsPreview />
      <SkillsOverview />
      <ContactCTA />
    </>
  );
}