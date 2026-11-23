import { useEffect, useState } from "react";
import { type CarouselApi } from "./ui/carousel";

interface CarouselPaginationProps {
  api: CarouselApi | undefined;
  className?: string;
}

export function CarouselPagination({
  api,
  className = "",
}: CarouselPaginationProps) {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    updateState();
    api.on("select", updateState);
    api.on("reInit", updateState);

    return () => {
      api.off("select", updateState);
      api.off("reInit", updateState);
    };
  }, [api]);

  if (count <= 1) return null;

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => api?.scrollTo(index)}
          aria-label={`Ir para o slide ${index + 1}`}
          className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
            current === index
              ? "w-8 bg-primary"
              : "w-2.5 bg-foreground/25 hover:bg-foreground/50"
          }`}
        />
      ))}
    </div>
  );
}
