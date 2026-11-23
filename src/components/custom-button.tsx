import type { ReactNode } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  children: ReactNode;
  className?: string;
  link?: boolean;
  url?: string;
}

function CustomButton({ children, className, link, url }: CustomButtonProps) {
  return (
    <Button
      variant={!link ? "outline" : "ghost"}
      className={cn(
        { "bg-popover/50! cursor-pointer w-auto h-auto p-3": !link },
        className,
        { "bg-transparent p-0": link },
      )}
    >
      {link ? (
        <a
          href={url}
          className="bg-popover/50 cursor-pointer w-auto h-auto p-3 rounded-full border hover:scale-105 hover:-translate-y-1 transition-all"
        >
          {children}
        </a>
      ) : (
        children
      )}
    </Button>
  );
}

export default CustomButton;
