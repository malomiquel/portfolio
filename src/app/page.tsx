"use client";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import About from "@/sections/about";
import Contact from "@/sections/contact";
import Footer from "@/sections/footer";
import { Fragment, useState, useEffect, useMemo } from "react";
import { useIntersectionObserver } from "@/hooks/intersection-observer";
import { Section } from "@/types/sections";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("hero");

  const [heroRef, heroEntry] = useIntersectionObserver({ threshold: 0.5 });
  const [projectsRef, projectsEntry] = useIntersectionObserver({
    threshold: 0.2,
  });
  const [aboutRef, aboutEntry] = useIntersectionObserver({
    threshold: 0.5,
  });
  const [contactRef, contactEntry] = useIntersectionObserver({ threshold: 0.5 });

  useEffect(() => {
    const entries = [
      { name: "hero", entry: heroEntry },
      { name: "projects", entry: projectsEntry },
      { name: "about", entry: aboutEntry },
      { name: "contact", entry: contactEntry },
    ];

    const visibleSection = entries.find(
      ({ entry }) => entry?.isIntersecting
    )?.name;

    if (visibleSection) setActiveSection(visibleSection as Section);
    
  }, [heroEntry, projectsEntry, aboutEntry, contactEntry]);

  return (
    <Fragment>
      <Header activeSection={activeSection} />
      <div className="flex flex-col gap-12 lg:gap-24">
        <Hero ref={heroRef} />
        <Projects ref={projectsRef} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </Fragment>
  );
}
