import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default async function Home() {

  const res = await fetch('https://coder-two-neon.vercel.app/all-course.json');
  const data = await res.json();

  return (
    <main>
      <Hero />
      <Projects data={data} />
      <Skills />
    </main>
  );
}