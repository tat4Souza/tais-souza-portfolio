import { cn } from "cn";
import type { ReactNode } from "react";

function CustomBadge({
  children,
  onClick,
  active,
}: {
  children: ReactNode;
  onClick?: () => void;
  active: boolean;
}) {
  return (
    <span
      className={cn(
        "dark:bg-primary/40!  dark:text-primary-foreground! py-2 px-6 rounded-full text-xs rounded-tl-none  font-semibold cursor-pointer hover:-translate-y-1 transition-all bg-secondary! text-primary",
        { "dark:bg-primary! bg-primary! text-secondary": active },
      )}
      onClick={onClick}
    >
      {children}
    </span>
  );
}

export default CustomBadge;
