import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import CustomBadge from "./custom-badge";
import ProjectItem from "./project-item";
import { academicProjects, personalProjects } from "@/lib/data/data";
import { useState } from "react";

function ProjectsSection() {
  const [data, setData] = useState(academicProjects);
  const [isAcademic, setIsAcademic] = useState(true);
  const [isPersonal, setIsPersonal] = useState(false);

  const handleToogleAcademic = () => {
    setIsAcademic(true);
    setIsPersonal(false);
    setData(academicProjects);
  };

  const handleTooglePersonal = () => {
    setIsPersonal(true);
    setIsAcademic(false);
    setData(personalProjects);
  };

  return (
    <section
      id="projects"
      className="min-h-screen lg:h-screen bg-[radial-gradient(37.94%_37.94%_at_50%_0%,rgba(255,78,68,0.50)_0%,rgba(59,4,12,0)_90%)] dark:bg-[radial-gradient(37.94%_37.94%_at_50%_0%,rgba(184,56,49,0.26)_0%,rgba(59,4,12,0)_90%)] w-[90%] lg:w-[75%] flex flex-col justify-center py-20 lg:py-0 lg:pt-15 gap-6"
    >
      <Carousel className="w-full h-auto lg:h-[80vh] flex items-center">
        <CarouselContent className="h-auto lg:h-full flex items-center">
          {data.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </CarouselContent>

        <CarouselNext className="hidden md:flex" />
        <CarouselPrevious className="hidden md:flex" />
      </Carousel>

      <div className="flex gap-5 *:text-base! justify-center lg:justify-start">
        <CustomBadge onClick={handleToogleAcademic} active={isAcademic}>
          Acadêmicos
        </CustomBadge>
        <CustomBadge onClick={handleTooglePersonal} active={isPersonal}>
          Pessoais
        </CustomBadge>
      </div>
    </section>
  );
}

export default ProjectsSection;
