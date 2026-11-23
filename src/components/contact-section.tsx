import { MdOutlineAlternateEmail } from "react-icons/md";
import CustomButton from "./custom-button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/lib/data/data";

function ContactSection() {
  const { githubUrl, linkedinUrl } = personalInfo;

  return (
    <section
      id="contact"
      className="h-min-[95vh] h-[95vh] flex flex-col  w-[75%] gap-10 bg-[radial-gradient(52.78%_52.78%_at_50%_9.42%,rgba(184,56,49,0.26)_0%,rgba(59,4,12,0.00)_100%)] relative"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <img src="/star.svg" alt="Estrela decorativa" />
      </div>
      <div className="flex flex-col items-center justify-center h-full z-10">
        <h3 className="font-mono text-4xl text-primary mb-3">Contato</h3>
        <p className="dark:text-primary-foreground w-[30%] text-center mb-6">
          Entre em contato comigo para trabalharmos juntos.
        </p>
        <a
          href="mailto:taiss.fernandes.souza@gmail.com"
          target="_blank"
          className="bg-card border cursor-pointer p-3 text-primary rounded-xl mb-4 flex gap-2 items-center hover:underline hover:**:-translate-y-0.5 "
        >
          <MdOutlineAlternateEmail className="transition-all" />
          <span className="transition-all">
            taiss.fernandes.souza@gmail.com
          </span>
        </a>

        <div className="flex gap-3 mt-2">
          <CustomButton link url={githubUrl}>
            <FaGithub className="size-5" />
          </CustomButton>
          <CustomButton link url={linkedinUrl}>
            <FaLinkedin className="size-5" />
          </CustomButton>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
