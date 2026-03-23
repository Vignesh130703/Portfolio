import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { getRepos } from "@/lib/github";

export default async function Home() {
  // Fetch repos dynamically at build time (or revalidated)
  const repos = await getRepos();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Projects repos={repos} />
      <Contact />
    </div>
  );
}
