"use client";
import { ForwardedRef, forwardRef, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";



import JavaScriptIcon from "@/components/icons/technologies/javascript-icon";
import GithubIcon from "@/components/icons/technologies/github-icon";
import ReactIcon from "@/components/icons/technologies/react-icon";
import TypeScriptIcon from "@/components/icons/technologies/typescript-icon";
import PythonIcon from "@/components/icons/technologies/python-icon";
import NextIcon from "@/components/icons/technologies/next-icon";
import NodeIcon from "@/components/icons/technologies/node-icon";
import DockerIcon from "@/components/icons/technologies/docker-icon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

import SectionHeader from "@/components/section-header";
import Card from "@/components/card";
import CardHeader from "@/components/card-header";
import ToolboxItems from "@/components/toolbox-items";
import AngularIcon from "@/components/icons/technologies/angular-icon";
import DjangoIcon from "@/components/icons/technologies/django-icon";

const toolboxItems = [
  {
    title: "TypeScript",
    iconType: TypeScriptIcon
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon
  },
  {
    title: "React",
    iconType: ReactIcon
  },
  {
    title: "Next.js",
    iconType: NextIcon
  },
  {
    title: "Angular",
    iconType: AngularIcon
  },
  {
    title: "Node.js",
    iconType: NodeIcon
  },
  {
    title: "Python",
    iconType: PythonIcon
  },
  {
    title: "Django",
    iconType: DjangoIcon
  },
  {
    title: "Docker",
    iconType: DockerIcon
  },
  {
    title: "Github",
    iconType: GithubIcon
  },
];

const hobbies = [
  {
    title: "Lecture",
    emoji: "📖",
    left: "5%",
    top: "5%",
  },
  {
    title: "Musique",
    emoji: "💿",
    left: "70%",
    top: "45%",
  },
  {
    title: "Tennis",
    emoji: "🎾",
    left: "5%",
    top: "65%",
  },
  {
    title: "Vélo",
    emoji: "🚴‍♂️",
    left: "45%",
    top: "70%",
  },
  {
    title: "Nouvelles technologies",
    emoji: "🚀",
    left: "35%",
    top: "5%",
  }
];

const About = forwardRef(function About(_, ref: ForwardedRef<Element>) {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={ref as (node: Element | null) => void}>
      <div className="container">
        <SectionHeader
          title="A propos"
          description="Je suis un développeur fullstack avec une passion pour le développement web. J'ai une solide base en informatique et une passion pour l'apprentissage des nouvelles technologies."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 md:col-span-5 lg:col-span-3">
              <CardHeader
                title="Mes Technologies et outils"
                description="Explorez les technologies et outils que j&apos;utilise et apprends."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:25s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:25s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="En dehors du code"
                description="Explorez mes centres d&apos;intérêt et mes passions."
                className="p-6"
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-sky-200 to-sky-400 rounded-full py-1.5 absolute cursor-grab"
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span className="text-xl">{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-sky-200 to-sky-400 after:content-[''] after:absolute after:inset-0 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-200 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-200 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
});

export default About;
