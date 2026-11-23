export interface ProjectProps {
  videoName: string | null;
  videoUrl: string | null;
  projectName: string;
  roles: string[];
  partnerCompany: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
  problemDescription: string;
  solutionDescription: string;
  acquiredKnowledgeDescription: string;
  startDate: string;
  endDate: string;
  image?: boolean;
}

export interface CourseProps {
  name: string;
  institution: string;
  startDate: string;
  endDate: string;
}

export interface CertificateProp {
  platform: string;
  courseName: string;
  description: string;
  documentUrl: string | null;
}

export interface FigmaDesign {
  image: string;
  designName: string;
  platformGoal: string;
  inspirations: string;
  intentionsBehindInspirations: string;
  futurePlans: string;
  figma: FigmaImages[];
}

interface FigmaImages {
  image: string;
  designName: string;
}
