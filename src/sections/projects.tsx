import { ForwardedRef, forwardRef } from "react";

import swapi from "@/assets/images/swapi.png";
import portfolio from "@/assets/images/portfolio.png";
import pulseEvents from "@/assets/images/pulse-events.png";
import Image from "next/image";
import Card from "@/components/card";
import ArrowUpRightIcon from "@/components/icons/arrow-up-right";
import CheckCircleIcon from "@/components/icons/check-circle-icon";
import SectionHeader from "@/components/section-header";

const portfolioProjects = [
  {
    company: "Personnel",
    year: "2024",
    title: "Portfolio",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Shadcn",
    ],
    link: "https://github.com/malomiquel/portfolio",
    image: portfolio,
  },
  {
    company: "Personnel",
    year: "2024",
    title: "Star Wars Search System",
    technologies: [
      "React JS",
      "Node.js",
      "Hapi.js",
      "Swapi API",
    ],
    link: "https://github.com/malomiquel/swapi-app",
    image: swapi,
  },
  {
    company: "Pulse Events",
    year: "2023",
    title: "Site vitrine",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Vercel",
    ],
    link: "https://pulse-events.fr/",
    image: pulseEvents,
  },
];

const Projects = forwardRef(function Projects(_, ref: ForwardedRef<Element>) {
  return (
    <section id="projects" ref={ref as (node: Element | null) => void}>
      <div className="container">
        <SectionHeader
          title="Mes projets"
          description="Découvrez certains de mes projets récents. Ce sont certains de mes meilleurs travaux
          que j&apos;ai réalisés dans le passé."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(100px + ${index * 50}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col gap-6 lg:pb-16">
                  <div className="inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-[#FEFFEB]">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#FEFFEB] md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5" />
                  <ul className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                    {project.technologies.map((technology) => (
                      <li key={technology} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span className="text-[#FEFFEB]/80">{technology}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FEFFEB] text-gray-950 group">
                      <span>Voir le projet</span>
                      <ArrowUpRightIcon className="size-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 rounded-t-lg md:rounded-ss-lg md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
});

export default Projects;
