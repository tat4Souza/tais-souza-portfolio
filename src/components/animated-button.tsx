import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  label?: string;
  url?: string;
}

function AnimatedButton({
  children,
  className,
  label,
  url,
}: AnimatedButtonProps) {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      const button = anchorRef.current?.querySelector("div");
      const span = anchorRef.current?.querySelector("span");
      if (!button) return;
      if (!span) return;

      tweenRef.current = gsap.to(span, {
        duration: 0.5,
        autoAlpha: 1,
        x: 0,
        maxWidth: "30rem",
        paddingLeft: "1.25rem",
        paddingRight: "0.75rem",
        paused: true,
        ease: "power2.out",
      });
    },
    { scope: anchorRef },
  );

  const handleMouseEnter = () => {
    tweenRef.current?.play();
  };

  const handleMouseLeave = () => {
    tweenRef.current?.reverse();
  };

  return (
    <a
      ref={anchorRef}
      target="_blank"
      className="inline-flex items-center hover:*:first:bg-primary! hover:*:first:text-secondary dark:hover:*:first:text-popover-foreground  transtion-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={url}
    >
      <div
        className={cn(
          "dark:bg-sidebar! rounded-full border cursor-pointer w-auto h-auto p-3 flex justify-center items-center border-border hover:bg-muted aria-expanded:bg-muted aria-expanded:text-foreground  dark:hover:bg-input/30 z-10 transition-all duration-500      dark:text-popover-foreground text-primary bg-primary/10 ",
          className,
        )}
      >
        {children}
      </div>
      <span className="font-bold inline-block max-w-0 px-0 opacity-0 invisible overflow-hidden whitespace-nowrap -translate-x-2  bg-sidebar text-primary py-2 -ml-3 z-0 rounded-r-full">
        {label}
      </span>
    </a>
  );
}

export default AnimatedButton;
