import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import HeroSection from "@/components/hero/HeroSection";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
