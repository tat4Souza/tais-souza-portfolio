import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import HomeSection from "./components/home-section";
import ProjectsSection from "./components/projects-section";
import SkillsSection from "./components/skills-section";

function App() {
  return (
    <>
      <div className="w-full h-10 bg-red-600 sm:bg-amber-300 md:bg-blue-600 lg:bg-pink-300 xl:bg-green-600 2xl:bg-purple-500">
        bla
      </div>
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
