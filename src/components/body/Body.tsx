import { getAllProjects } from "~/lib/projects";
import BodyCardTile from "./BodyCardTile";

const Body = () => {
  const projects = getAllProjects();
  const featuredProject = projects[0]; // Assuming first project is featured
  const otherProjects = projects.slice(1);

  return (
    <div className="bg-background px-4 py-8 sm:px-6 sm:py-12 md:py-16">
      <div className="container mx-auto max-w-7xl space-y-12">
        {/* Featured Project - Hidden on Mobile */}
        {featuredProject && (
          <div className="hidden space-y-4 sm:block" id="projects">
            <h2 className="text-foreground text-2xl font-bold sm:text-3xl">
              Featured Project
            </h2>
            <div className="w-full">
              <BodyCardTile project={featuredProject} featured />
            </div>
          </div>
        )}

        {/* All Projects */}
        <div className="space-y-4">
          <h2 className="text-foreground text-2xl font-bold sm:text-3xl">
            All Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Featured Project - Shown only on Mobile */}
            {featuredProject && (
              <div className="sm:hidden">
                <BodyCardTile project={featuredProject} />
              </div>
            )}
            {otherProjects.map((project) => (
              <BodyCardTile key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* About Me Section */}
      {/* <div className="space-y-4" id="about">
        <h2 className="text-foreground text-2xl font-bold sm:text-3xl">
          About Me
        </h2>
        <div className="prose dark:prose-invert max-w-prose">
          <p>
            I'm a passionate software developer with a keen interest in creating
            innovative and user-friendly web applications. My expertise spans
            full-stack development, with a focus on modern web technologies like
            React, Next.js, and TypeScript.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies,
            contributing to open-source projects, and continuously expanding my
            skill set to solve complex technical challenges.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Body;
