import { getAllProjects } from "~/lib/projects";
import BodyCardTile from "./BodyCardTile";

const Body = () => {
  const projects = getAllProjects();
  const featuredProject = projects[0]; // Assuming first project is featured
  const otherProjects = projects.slice(1);

  return (
    <div className="bg-background px-4 py-8 sm:px-6 sm:py-12 md:py-16">
      <div className="container mx-auto max-w-7xl space-y-12">
        {/* Featured Project */}
        {featuredProject && (
          <div className="space-y-4">
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">
              Featured Project
            </h2>
            <div className="w-full">
              <BodyCardTile project={featuredProject} featured />
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="space-y-4">
          <h2 className="text-foreground text-2xl font-bold sm:text-3xl">
            All Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <BodyCardTile key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
