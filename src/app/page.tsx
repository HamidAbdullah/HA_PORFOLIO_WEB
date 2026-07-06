import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { AIExpertise } from "@/components/sections/AIExpertise";
import { Experience } from "@/components/sections/Experience";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <AIExpertise />
        <Experience />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
