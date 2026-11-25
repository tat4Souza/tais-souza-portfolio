import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardTitle } from "./ui/card";
import { CarouselItem } from "./ui/carousel";
import type { ProjectProps } from "@/lib/types";
import LinkButton from "./link-button";
import { VideoAmbilight } from "@videoglow/react-video";

interface ProjectItemProps {
  project: ProjectProps;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <CarouselItem>
      <div className="p-1 flex  min-h-content items-center gap-8 flex-col-reverse xl:flex-row">
        <Card className="flex-1 pt-0 bg-card gap-0  to-card h-full!  max-h-min  reveal-item">
          {!project.image ? (
            <VideoAmbilight
              src={project.videoUrl ?? ""}
              preload="metadata"
              autoPlay
              muted
              loop
              playsInline
              className="relative z-20 aspect-video w-full object-cover object-top"
              blur={60}
            />
          ) : (
            // <video
            //   src={project.videoUrl ?? ""}
            //   preload="metadata"
            //   autoPlay
            //   muted
            //   loop
            //   playsInline
            //   className="relative z-20 aspect-video w-full object-cover object-top"
            // />
            <img
              src={project.videoUrl ?? ""}
              alt="imagem"
              className="relative z-20 aspect-video w-full object-cover object-top"
            />
          )}
          <CardTitle className="text-center   z-30 font-mono max-w-max mx-auto px-20 my-5   rounded-full text-foreground dark:text-primary-foreground reveal-item">
            <h4 className="text-sm text-primary dark:text-popover-foreground">
              {project.videoName}
            </h4>
            <span className="font-sans text-sm dark:text-gray-500 text-gray-600">
              {project.startDate} - {project.endDate}
            </span>
          </CardTitle>
          <CardContent className=" h-full flex flex-col justify-between gap-5  max-h-min mt-3 ">
            <div className="flex gap-2 flex-wrap justify-center">
              {project.technologies.map((tech) => (
                <Badge className="p-3 capitalize" key={tech}>
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="bg-secondary text-primary dark:bg-background dark:text-card-foreground px-6 font-medium py-2 rounded-full">
                {project.partnerCompany}
              </span>

              <div className="flex gap-5">
                <LinkButton url={project.githubUrl}>
                  <FaGithub /> <span>Github</span>
                </LinkButton>
                {project.demoUrl && (
                  <LinkButton url={project.demoUrl}>
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </LinkButton>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex-1 flex flex-col gap-10 justify-center">
          <div className="flex flex-col gap-2 reveal-item">
            <h3 className="font-serif text-primary text-3xl ">
              {project.projectName}
            </h3>
            <span className="bg-secondary/30  dark:bg-card border p-3 text-primary rounded-xl capitalize ">
              {project.roles.map(
                (role, index) =>
                  `${role} ${index !== project.roles.length - 1 ? " • " : ""}`,
              )}
            </span>
          </div>
          <div className="flex flex-col gap-3 leading-8 text-gray-700 dark:text-primary-foreground">
            <p className="reveal-item">{project.problemDescription}</p>
            <div className="border-b border-primary/10 dark:border-popover/50 my-2"></div>
            <p className="reveal-item">{project.solutionDescription}</p>
            <div className="border-b border-primary/10 dark:border-popover/50 my-2"></div>
            <p className="reveal-item">
              {project.acquiredKnowledgeDescription}
            </p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}

export default ProjectItem;
