import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import type { CertificateProp } from "@/lib/types";

function CertificateCard({ certificate }: { certificate: CertificateProp }) {
  const { platform, courseName, description, documentUrl } = certificate;

  return (
    <Card className="text-base bg-popover/50 rounded-xl overflow-visible flex flex-col items-center max-w-70 justify-between">
      <CardTitle className="-mt-10 flex flex-col items-center gap-3">
        <span className="bg-popover p-2 px-4 font-serif uppercase text-primary rounded-full">
          {platform}
        </span>
      </CardTitle>
      <CardDescription className="px-8 flex flex-col items-center gap-3 mb-5 mt-5">
        <h4 className="font-mono text-xl text-primary text-center">
          {courseName}
        </h4>
      </CardDescription>
      <CardContent className="mb-5">
        <p className="text-center">{description}</p>
      </CardContent>
      <CardFooter>
        {documentUrl && (
          <a
            href={documentUrl}
            target="_blank"
            className="text-center text-primary bg-popover p-2 px-4 rounded-xl font-bold flex gap-2 items-center text-sm hover:underline"
          >
            Visualizar certificado
            <FaExternalLinkAlt />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}

export default CertificateCard;
