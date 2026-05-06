import AboutSection from "@/components/AboutSection";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default async function Home() {

  const res = await fetch('https://my-profile-one-silk.vercel.app/data.json');
  const data = await res.json();

  return (
    <main>
      <Hero />
      <AboutSection />
      <Projects data={data} />
      <Skills />
      <Experience />
      <Footer />
    </main>
  );
}