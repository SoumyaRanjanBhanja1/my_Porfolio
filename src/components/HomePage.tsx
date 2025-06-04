import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import ContactForm from "../components/ContactForm";


const HomePage = () => {
 
  return (
    <div className="mt-16 space-y-24 right-4">
      <section id="hero">
        <Hero />
      </section>

      <section id="projects" className="px-4">
        <Projects />
      </section>

      <section id="skills" className="px-4">
        <Skills />
      </section>

      <section id="experience" className="px-4">
        <Timeline />
      </section>

      <section id="contact" className="px-4">
        <ContactForm />
      </section>
    </div>
  );
};

export default HomePage;
