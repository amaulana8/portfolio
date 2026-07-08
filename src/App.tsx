import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  useEffect(() => {
    document.title = "Portfolio | Creative Developer";
  }, []);

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-black text-white">
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
