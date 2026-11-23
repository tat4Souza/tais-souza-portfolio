import type { ReactNode } from "react";

function LinkButton({ url, children }: { url: string; children: ReactNode }) {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-popover/50 hover:bg-popover border-border text-secondary-foreground aria-expanded:bg-secondary aria-expanded:text-secondary-foreground font-medium flex p-3 items-center gap-2 rounded-full px-4 border hover:bg-linear-to-r hover:from-secondary/30 hover:to-popover/50 hover:border-primary hover:-translate-y-1 transition-all"
    >
      {children}
    </a>
  );
}

export default LinkButton;
