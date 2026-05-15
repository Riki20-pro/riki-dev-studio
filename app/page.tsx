import { About } from "@/components/ui/About";
import { Hero } from "@/components/ui/Hero";
import { Projects } from "@/components/ui/Projects";
import Services from "@/components/ui/Services";
import Experience from "@/components/ui/Experience";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Experience />
    </main>
  );
}