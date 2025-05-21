export interface Project {
  id: string;
  title: string;
  image: string;
  startDate: string;
  endDate: string;
  description: string;
  githubUrl?: string;
  projectUrl?: string;
  technologiesUsed: string[];
}

export interface ProjectsData {
  projects: Project[];
}
