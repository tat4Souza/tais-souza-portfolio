import type { FigmaDesign } from "@/lib/types";
import { Button } from "./ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { cn } from "cn";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import { CarouselPagination } from "./carousel-pagination";

function FigmaCardInfo({ selectedDesign }: { selectedDesign: FigmaDesign }) {
  const {
    figma,
    designName,
    platformGoal,
    inspirations,
    intentionsBehindInspirations,
    futurePlans,
  } = selectedDesign;
  const [drawerApi, setDrawerApi] = useState<CarouselApi>();

  return (
    <DrawerContent className="h-full w-full sm:max-w-2xl bg-card/80">
      <div className="mx-auto w-full max-w-4xl overflow-y-auto p-4 flex flex-col justify-between h-full">
        <DrawerHeader>
          <DrawerTitle className="font-mono text-2xl text-primary">
            {designName}
          </DrawerTitle>
          <DrawerDescription>
            Visualização detalhada da interface.
          </DrawerDescription>
        </DrawerHeader>

        {selectedDesign && (
          <div className="my-4 flex flex-col gap-3 w-full">
            <Carousel
              setApi={setDrawerApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {figma.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="w-full h-75 aspect-video overflow-hidden rounded-xl border bg-muted/30">
                      <img
                        src={item.image}
                        alt={item.designName}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <CarouselPagination api={drawerApi} />
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 overflow-y-auto pr-2 [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-foreground/15 hover:[&::-webkit-scrollbar-thumb]:bg-foreground/30">
          <InfoCard
            title="Objetivo da plataforma"
            className="col-span-full"
            text={platformGoal}
          />
          <InfoCard
            title="Inteções do Design"
            text={intentionsBehindInspirations}
            className="col-span-full"
          />
          <InfoCard title="Inspirações" text={inspirations} />
          <InfoCard title="Planos futuros" text={futurePlans} />
        </div>

        <DrawerFooter className="flex-row justify-end mt-4">
          <DrawerClose className="w-full flex items-center justify-end">
            <Button variant="default" className="px-8">
              Fechar
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
}

export default FigmaCardInfo;

function InfoCard({
  text,
  title,
  className,
}: {
  text: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 bg-linear-to-l from-secondary/20 to-card p-4 rounded-xl border border-primary/50",
        className,
      )}
    >
      <h4 className="text-primary font-serif text-xl ">{title}</h4>
      <p className="leading-6">{text}</p>
    </div>
  );
}
