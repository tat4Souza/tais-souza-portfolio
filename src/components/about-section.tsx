import { certificates, courses, personalInfo } from "@/lib/data/data";
import CertificateCard from "./certificate-card";
import DegreesCard from "./degrees-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import { useState } from "react";
import { CarouselPagination } from "./carousel-pagination";

function AboutSection() {
  const { aboutMeSummary, workStyleSummary } = personalInfo;
  const degrees = courses;
  const cert = certificates;

  const [api, setApi] = useState<CarouselApi>();

  return (
    <section
      id="about"
      className="min-h-min h-screen flex flex-col pt-35 w-[90%] xl:w-[75%] bg-[radial-gradient(52.78%_52.78%_at_50%_90.58%,rgba(184,56,49,0.26)_0%,rgba(59,4,12,0.00)_100%)] pb-20 "
    >
      <div className="flex gap-15 mb-30 flex-col lg:flex-row">
        <div className="w-full lg:w-[40%]">
          <h4 className="text-primary  dark:text-primary-foreground text-5xl mb-6 font-serif">
            Sobre mim
          </h4>
          <div>
            <p className="text-gray-600 dark:text-foreground leading-8">
              {aboutMeSummary}
            </p>
            <p className="text-gray-600 dark:text-foreground leading-8 mt-5">
              {workStyleSummary}
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-6 flex-1">
          {degrees.map((degree, index) => (
            <DegreesCard course={degree} key={index} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 py-5">
            {cert.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full flex justify-center md:basis-2/4 lg:basis-1/3 xl:basis-1/4"
              >
                <CertificateCard certificate={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <CarouselPagination api={api} />
      </div>
    </section>
  );
}

export default AboutSection;
