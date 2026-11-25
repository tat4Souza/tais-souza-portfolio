import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import HomeSection from "./components/home-section";
import ProjectsSection from "./components/projects-section";
import SkillsSection from "./components/skills-section";

// Registra os plugins do GSAP
gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { "--scroll-progress": 0 },
        {
          "--scroll-progress": 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.2,
          },
        },
      );

      gsap.set(".reveal-item", { opacity: 0, y: 30 });

      ScrollTrigger.batch(".reveal-item", {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
            overwrite: true,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y: 30,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.in",
            overwrite: true,
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="
        w-full flex flex-col items-center relative
        after:content-[''] after:fixed after:top-0 after:left-0 after:right-0
        after:h-1 after:bg-primary after:z-60
        after:origin-left after:scale-x-(--scroll-progress,0)
        after:pointer-events-none
      "
    >
      <HomeSection />

      <ProjectsSection />

      <SkillsSection />

      <AboutSection />

      <ContactSection />

      <footer className="p-3 text-primary">
        © Desenvolvido por Taís Souza
      </footer>
    </div>
  );
}

export default App;
