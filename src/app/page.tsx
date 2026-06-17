import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Spotlight from "@/components/Spotlight";
import CommandMenu from "@/components/CommandMenu";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";
import GithubStats from "@/components/GithubStats";
import Loader from "@/components/Loader";
import Recruiter from "@/components/Recruiter";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import GridBackground from "@/components/GridBackgroun";

export default function Home() {
  return (
    <>
      <Loader />
      <GridBackground />
      <main className="bg-background text-foreground overflow-hidden min-h-screen relative">
        <Navbar />
        <Hero />
        <About />
        <TechMarquee />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <GithubStats />
        <Recruiter />
        <Contact />
        <Spotlight />
        <CommandMenu />
        <Footer />
      </main>
    </>
  );
}