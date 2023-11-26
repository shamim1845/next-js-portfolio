import HeroSection from "@/components/hero/HeroSection";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Achievements from "@/components/achievements/Achievements";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}
