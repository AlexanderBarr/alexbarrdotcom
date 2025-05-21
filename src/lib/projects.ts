import projectsData from "~/data/projects.json";
import type { Project, ProjectsData } from "~/types/project";

export function getAllProjects(): Project[] {
  return (projectsData as ProjectsData).projects;
}

export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find((project) => project.id === id);
}
