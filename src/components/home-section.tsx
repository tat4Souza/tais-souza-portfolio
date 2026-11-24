import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";

import Header from "./header";
import CustomBadge from "./custom-badge";
import ThemeSwitch from "./theme-switch";
import { personalInfo } from "@/lib/data/data";
import AnimatedButton from "./animated-button";
import CustomButton from "./custom-button";

function HomeSection() {
  const { cta, githubUrl, linkedinUrl, roles } = personalInfo;

  return (
    <div className=" dark:bg-[radial-gradient(58.11%_58.11%_at_50%_4.54%,#C53F36_0%,#47010B_57.31%,rgba(15,20,19,0)_90%)] bg-[radial-gradient(62%_56%_at_50%_4%,rgba(255,78,68,0.52)_0%,rgba(255,138,128,0.24)_50%,rgba(255,78,68,0)_100%)] w-full flex  align-center justify-center text-primary-foreground">
      <section className="w-full pt-20 lg:pt-0 lg:w-[90%]  xl:w-[75%]  lg:h-screen flex flex-col gap-0 justify-end items-center bg-[radial-gradient(45%_42%_at_50%_105%,rgba(255,78,68,0.30)_0%,rgba(255,138,128,0.1)_48%,rgba(255,78,68,0)_100%)] dark:bg-[radial-gradient(37.94%_37.94%_at_50%_105.42%,rgba(184,56,49,0.26)_0%,rgba(59,4,12,0)_90%)] relative ">
        <ThemeSwitch className="absolute top-5 z-100 right-5 lg:top-10 lg:right-0" />
        <div className="home-content flex justify-around items-center w-full lg:w-[90%] gap-10 mb-30 flex-col-reverse lg:flex-row">
          <div className="flex flex-col gap-2 w-[90%] lg:w-[55%] mt-10 text-popover-foreground">
            <div className="font-serif">
              <p className="text-primary text-2xl leading-6">Olá, eu sou</p>
              <h2 className="text-6xl xl:text-7xl text-secondary-foreground dark:text-popover-foreground">
                Taís Souza
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                {roles.map((role, i) => (
                  <CustomBadge key={i} active>
                    {role}
                  </CustomBadge>
                ))}
              </div>

              <p className="mb-3 text-gray-600 dark:text-popover-foreground">
                {cta}
              </p>

              <div className="flex gap-6">
                <AnimatedButton label="tat4Souz" url={githubUrl}>
                  <FaGithub className="size-5" />
                </AnimatedButton>
                <AnimatedButton label="tais-f-souza" url={linkedinUrl}>
                  <FaLinkedin className="size-5" />
                </AnimatedButton>
              </div>
            </div>
          </div>
          <div className="relative">
            <figure className="w-50 lg:w-70  xl:w-80 rounded-full overflow-hidden">
              <video
                src="photo-animation.mp4"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
                className="w-auto h-auto"
              />
            </figure>

            <figure className="absolute -right-5 -bottom-20 lg:-bottom-30 lg:-right-10 xl:-right-30 xl:-bottom-35 w-30 lg:w-50 xl:w-80">
              <img
                src="photo-details-light.svg"
                alt="Detalhes de design"
                className="w-auto h-auto block dark:hidden"
              />
              <img
                src="photo-details.svg"
                alt="Detalhes de design"
                className="w-auto h-auto hidden dark:block"
              />
            </figure>
          </div>
        </div>
        <div className="flex flex-col gap-5  text-primary  w-full mb-8">
          <h1 className="font-mono text-4xl hidden lg:flex ">Portfolio</h1>
          <Header />
        </div>
        <CustomButton className="mb-8 -mt-10 lg:mt-0 " url="#projects" link>
          <FaChevronDown />
        </CustomButton>
      </section>
    </div>
  );
}

export default HomeSection;
