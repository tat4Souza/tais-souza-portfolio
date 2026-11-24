import { figmaDesigns, personalInfo, softSkills } from "@/lib/data/data";
import TechStackRow from "./tech-stack-row";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useState } from "react";
import { Drawer } from "./ui/drawer";

import type { FigmaDesign } from "@/lib/types";
import FigmaCardInfo from "./figma-card-info";

function SkillsSection() {
  const [selectedDesign, setSelectedDesign] = useState<FigmaDesign | null>(
    null,
  );
  const frontTechs: string[] = personalInfo.technologies.frontend;
  const backTechs: string[] = personalInfo.technologies.backend;
  const dataTechs: string[] = personalInfo.technologies.database;
  const { productOwner, scrumMaster, devTeam, additionalSkills } = softSkills;
  const figma = figmaDesigns;

  return (
    <section
      id="skills"
      className="h-min-screen xl:h-screen flex flex-col pt-25 w-[90%] xl:w-[75%] gap-10"
    >
      <div className="flex flex-col w-full">
        <h3 className="h3-title mb-6">Stack de Habilidades</h3>
        <div className="flex gap-6 flex-col lg:flex-row ">
          <TechStackRow
            title="Desenvolvimetno Frontend"
            techsList={frontTechs}
          />
          <TechStackRow title="Desenvolvimento Backend" techsList={backTechs} />
          <TechStackRow
            title="Database/Arquiteturas Software"
            techsList={dataTechs}
          />
        </div>
      </div>
      <div className="flex gap-6 flex-col lg:flex-row">
        <Card className="rounded-xl flex-1">
          <CardTitle className="pl-8 text-[18px] font-semibold text-primary">
            Soft Skills
          </CardTitle>
          <CardContent className="flex flex-col gap-6 px-8 ">
            <div className="flex text-base flex-col gap-6 lg:flex-row lg:gap-0">
              <p>{productOwner}</p>
              <div className="border-r mx-3"></div>
              <p>{scrumMaster}</p>
            </div>
            <p className="text-base">{devTeam}</p>
            <ul className="flex gap-2 flex-wrap">
              {additionalSkills.map((skill, index) => (
                <li key={index}>
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="flex-1 rounded-xl">
          <CardTitle className="pl-8 ">
            <h4 className="text-[18px] font-semibold  text-primary">
              Figma Designs
            </h4>
            <p>
              Clique nas imagens para poder saber mais sobre o intuito dos
              designs.
            </p>
          </CardTitle>
          <CardContent className="flex justify-center">
            <Carousel className="w-[80%]">
              <CarouselContent>
                {figma.map((design, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1 flex flex-col gap-4 items-center">
                      <figure
                        className="relative overflow-hidden rounded-xl w-full aspect-video"
                        onClick={() => setSelectedDesign(design)}
                      >
                        <img
                          src={design.image}
                          alt="login"
                          className="w-full h-full object-cover object-top z-10"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/30 to-transparent z-20 pointer-events-none" />
                      </figure>
                      <span className="bg-background px-5 text-foreground rounded-full border max-w-max -mt-10 p-2   font-mono z-30 top-[70%] ">
                        {design.designName}
                      </span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <Drawer
              open={!!selectedDesign}
              onOpenChange={(isOpen) => {
                if (!isOpen) setSelectedDesign(null);
              }}
              swipeDirection="right"
            >
              {selectedDesign && (
                <FigmaCardInfo selectedDesign={selectedDesign} />
              )}
            </Drawer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default SkillsSection;
