import TechCard from "./tech-card";
import { Card, CardContent, CardTitle } from "./ui/card";

function TechStackRow({
  title,
  techsList,
}: {
  title: string;
  techsList: string[];
}) {
  return (
    <Card className="rounded-xl flex-1 bg-linear-to-t from-primary/10 to-transparent reveal-item">
      <CardTitle className="pl-8 text-[18px] font-semibold text-primary dark:text-foreground ">
        {title}
      </CardTitle>
      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {techsList.map((item, i) => (
            <TechCard title={item} key={i} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default TechStackRow;
