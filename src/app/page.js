import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default async function Home() {

  const res = await fetch('https://my-profile-one-silk.vercel.app/data.json');
  const data = await res.json();

  return (
    <main>
      <Hero />
      <AboutSection />
      <Skills />
      <Experience />
      <Projects data={data} />
      <ContactSection />
      <Footer />
    </main>
  );
}