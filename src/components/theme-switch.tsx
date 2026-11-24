import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { cn } from "cn";

function ThemeSwitch({ className }: { className: string }) {
  const { setTheme } = useTheme();
  const [alterTheme, setAlterTheme] = useState(true);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        if (alterTheme) {
          setTheme("light");
          setAlterTheme(false);
        } else {
          setTheme("dark");
          setAlterTheme(true);
        }
      }}
      className={cn(
        "bg-primary/80 hover:**:text-secondary hover:bg-primary/80 dark:hover:**:text-white  dark:border-ring dark:bg-ring/50! p-5 cursor-pointer",
        className,
      )}
    >
      <IoMdSunny className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <FaMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeSwitch;
