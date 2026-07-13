import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  useEffect(() => { document.title = "amaulana8 | Sysadmin & Network Engineer"; }, []);
  return (
    <SmoothScroll>
      <ParticleBackground />
      <main className="relative z-10 min-h-screen bg-transparent text-white">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
export default App;
