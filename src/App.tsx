import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import HomeSection from "./components/home-section";
import ProjectsSection from "./components/projects-section";
import SkillsSection from "./components/skills-section";

function App() {
  return (
    <>
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />

      <footer className="p-3 text-primary">
        © Desenvolvido por Taís Souza
      </footer>
    </>
  );
}

export default App;
