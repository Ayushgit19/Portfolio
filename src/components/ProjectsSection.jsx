import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "QuickStay",
    description:
      "A full-stack hotel booking application that lets users search, book, and manage stays with a seamless and responsive interface.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "MongoDB", "Clerk", "Stripe", "Express"],
    demoUrl: "https://quickstay-ecru.vercel.app/",
    githubUrl: "https://github.com/Ayushgit19/Quick-Stay",
  },
  {
    id: 2,
    title: "Serenity- A wellness App",
    description:
      "A wellness platform for creating, saving, and publishing guided yoga and meditation sessions.",
    image: "/projects/project3.png",
    tags: ["React", "TailwindCSS", "MongoDB", "JWT", "Express"],
    demoUrl: "https://serenity-ve74.vercel.app/",
    githubUrl: "https://github.com/Ayushgit19/Serenity",
  },
  {
    id: 3,
    title: "PortFolio",
    description:
      "A personal portfolio website built with modern web technologies to showcase my skills, projects, and experience.",
    image: "/projects/project2.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These projects highlight my ability to build modern, high-performance
          applications with attention to detail and usability.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-8">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Ayushgit19"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
