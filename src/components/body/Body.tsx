import { getAllProjects } from "~/lib/projects";
import BodyCardTile from "./BodyCardTile";

const Body = () => {
  const projects = getAllProjects();

  return (
    <div className="bg-background px-4 sm:px-6 py-4 sm:py-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          {projects.map((project) => (
            <BodyCardTile key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
