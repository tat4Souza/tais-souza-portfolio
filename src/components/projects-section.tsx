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
  // const data: ProjectProps[] = academicProjects;
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
      className="h-screen bg-[radial-gradient(37.94%_37.94%_at_50%_0%,rgba(255,78,68,0.50)_0%,rgba(59,4,12,0)_90%)] dark:bg-[radial-gradient(37.94%_37.94%_at_50%_0%,rgba(184,56,49,0.26)_0%,rgba(59,4,12,0)_90%)] w-[75%] flex flex-col justify-center pt-15"
    >
      <Carousel className="h-[80vh] items-center ">
        <CarouselContent className=" h-full flex  items-center">
          {data.map((project, index) => (
            <ProjectItem project={project} key={index} />
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>

      <div className="flex gap-5 *:text-base!">
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
