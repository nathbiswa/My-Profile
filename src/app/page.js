import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default async function Home() {

  const res = await fetch('https://my-profile-one-silk.vercel.app/data.json');
  const data = await res.json();

  return (
    <main>
      <Hero />
      <Projects data={data} />
      <Skills />
      <Experience />
    </main>
  );
}