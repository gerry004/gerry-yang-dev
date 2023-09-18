import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const projectsRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();

  return (
    <div>
      <Navbar projectsRef={projectsRef} experienceRef={experienceRef} contactRef={contactRef}/>
      <Hero />
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={experienceRef}>
        <Experience />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
