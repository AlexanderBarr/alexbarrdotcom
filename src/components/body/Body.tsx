import { getAllProjects } from "~/lib/projects";
import BodyCardTile from "./BodyCardTile";

const Body = () => {
  const projects = getAllProjects();

  return (
    <div className="bg-background">
      <div className="container mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <BodyCardTile key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
