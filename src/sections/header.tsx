"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import GitHubIcon from "@/components/icons/technologies/github-icon";
import { useScrolled } from "@/hooks/use-scrolled";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import { Section } from "@/types/sections";
import { AnimatePresence, motion } from "framer-motion";

const config = siteConfig.header;

interface HeaderProps {
  activeSection: Section;
}

const Header: FC<HeaderProps> = ({ activeSection }) => {
  const { scrolled } = useScrolled({ initial: false });

  const scrollToSection = (section: Section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-12 rounded-md max-md:border-b max-md:bg-bg md:h-16",
        scrolled && "pointer-events-none"
      )}
    >
      <div className="flex h-full w-full items-center bg-sky-800/70 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent md:container">
        {/* Desktop Nav */}
        <div className="hidden w-full items-center justify-between md:flex">
          <div className="mt-1 font-bold text-lg text-sky-700 leading-normal tracking-tighter">
            {siteConfig.global.name}
          </div>
          <div
            className={cn(
              "relative flex items-center gap-6 overflow-hidden rounded-xl bg-transparent px-4 py-1 transition-[background-color] duration-300 ease-out",
              scrolled && "pointer-events-auto bg-sky-800/70 backdrop-blur-sm shadow-lg"
            )}
          >
            <div
              className="absolute -bottom-[6px] w-14 h-2 bg-white/80 rounded-[50%]"
              style={{
                transform: scrolled
                  ? `translateX(${config.nav.links.find(link => link.id === activeSection)?.translate}%)`
                  : "translateX(0px)",
                transition: "transform 0.4s ease-out",
                boxShadow: `
                  0 4px 8px rgba(255, 255, 255, 0.8),
                  0 6px 12px rgba(255, 255, 255, 0.6),
                  0 8px 15px rgba(255, 255, 255, 0.4)

                `,
              }}
            />
            <Nav
              scrolled={scrolled}
              items={config.nav.links}
              onNavItemClick={scrollToSection}
            />
          </div>
          <div
            className={cn(
              "flex w-[130px] items-center justify-end space-x-2 opacity-100 transition-[opacity,transform] duration-300 ease-out",
              scrolled && "pointer-events-none translate-x-2 opacity-0"
            )}
            aria-hidden={scrolled}
            tabIndex={scrolled ? -1 : undefined}
          >
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="h-9 w-9 p-0"
            >
              <Link
                href={siteConfig.links.github}
                target="_blank"
                aria-label="github"
              >
                <GitHubIcon className="text-sky-700" size={25} />
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="h-9 w-9 p-0"
            >
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                aria-label="linkedin"
              >
                <LinkedinIcon className="text-sky-700" size={25} />
              </Link>
            </Button>
          </div>
        </div>
        {/* Mobile nav */}
        <div className="flex w-full items-center justify-center md:hidden">
          <span className="text-[#FEFFEB] text-lg font-bold">
            {siteConfig.global.name}
          </span>
        </div>
      </div>
    </header>
  );
};

interface NavItem {
  id: string;
  label: string;
}

interface NavProps {
  items: NavItem[];
  scrolled?: boolean;
  direction?: "col" | "row";
  onNavItemClick?: (section: Section) => void;
}

const Nav: FC<NavProps> = ({
  items,
  scrolled,
  direction = "row",
  onNavItemClick,
}) => {
  const [elementFocused, setElementFocused] = useState<number | null>(null);

  const handleHoverButton = (index: number | null) => {
    setElementFocused(index);
  };

  return (
    <nav
      className={cn("flex items-center gap-0 sm:gap-2", {
        "flex-col gap-2": direction === "col",
      })}
      onMouseLeave={() => handleHoverButton(null)}
    >
      {items.map(
        (item, index) => (
          <button
            key={index}
            className={cn(
              "flex relative items-center cursor-pointer justify-center gap-2 rounded px-4 py-1 text-md font-medium text-fg/60 transition-colors duration-200",
              scrolled ? "text-white" : "text-sky-700 hover:text-white"
            )}
            onClick={() => onNavItemClick?.(item.id as Section)}
            onMouseEnter={() => handleHoverButton(index)}
          >
            {item.label}
            <AnimatePresence>
              {elementFocused === index && (
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn("-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-md bg-sky-300/30", !scrolled && "bg-sky-800/70")}
                  exit={{ opacity: 0, scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  layout={true}
                  layoutId="focused-element"
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </button>
        )
      )}
    </nav>
  );
};

export default Header;