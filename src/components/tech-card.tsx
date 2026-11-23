import { type IconType } from "react-icons";
import {
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaDocker,
  FaCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiFastify,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiPrisma,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techIconsMap: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: FaReact,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  "Shadcn/ui": SiShadcnui,
  JavaFX: FaJava,

  "Node.js": FaNodeJs,
  Fastify: SiFastify,
  Python: FaPython,
  Flask: SiFlask,
  Java: FaJava,
  "API RESTful": TbApi,

  PostgreeSQL: SiPostgresql,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  Docker: FaDocker,
};

function TechCard({ title }: { title: string }) {
  const Icon = techIconsMap[title] || FaCode;

  return (
    <li className="bg-popover/70 p-2 rounded-full border border-foreground/15 flex items-center gap-2 text-foreground font-semibold hover:-translate-y-1 hover:bg-primary/30 hover:border-primary hover:scale-102 cursor-pointer transition-all ease-in duration-150">
      <Icon className="size-4 shrink-0" />
      {title}
    </li>
  );
}

export default TechCard;
