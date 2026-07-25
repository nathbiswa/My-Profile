import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import data from "../../public/data.json";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Skills />
      <Experience />
      <Education />
      <Projects data={data} />
      <ContactSection />
      <Footer />
    </main>
  );
}