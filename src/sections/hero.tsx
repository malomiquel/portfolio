'use client'
import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDownIcon from "@/components/icons/arrow-down";
import grainImage from "@/assets/images/grain.jpg";
import { ForwardedRef, forwardRef } from "react";
import { Section } from "@/types/sections";

const Hero = forwardRef(function Hero(_, ref: ForwardedRef<Element>) {

  const scrollToSection = (section: Section) => {
    const projectsSection = document.getElementById(section);
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip" ref={ref as (node: Element | null) => void}>
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_80%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1420px] hero-ring"></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Personne en train de coder"
          />
          <div className="bg-red-900 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-[#FEFFEB] size-2.5 rounded-full relative">
              <div className="bg-[#FEFFEB] absolute inset-0 rounded-full animate-ping-large" />
            </div>
            <span className="text-sm text-white font-medium">
              Disponible dès maintenant
            </span>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-sky-700 md:text-5xl text-center mt-8 font-semibold">
            Développeur Full-Stack
          </h1>
          <p className="mt-4 text-center text-sky-700/80 md:text-lg">
            Passionné par la tech et le développement, je suis disponible pour
            créer des applications sur mesure.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            className="inline-flex items-center gap-2 border border-sky-700/50 px-6 h-12 rounded-xl"
            onClick={() => scrollToSection("projects")}
          >
            <span className="font-semibold">Explorer mes projets</span>
            <ArrowDownIcon className="size-4 animate-bounce" color="#0369a1" />
          </button>
          <button
            className="inline-flex items-center gap-2 border bg-sky-700 text-black px-6 h-12 rounded-xl"
            onClick={() => scrollToSection("contact")}
          >
            <span>👋</span>
            <span className="font-semibold text-white">Contactez-moi</span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default Hero;
