"use client";

import React, { FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import GitHubIcon from "@/components/icons/technologies/github-icon";
import { useScrolled } from "@/hooks/use-scrolled";
import { focusRing } from "@/lib/utils/styles";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import LinkedinIcon from "@/components/icons/linkedin-icon";
import { Section } from "@/types/sections";

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
          <div className="w-[130px]">
            <Link
              href="/"
              className={cn(
                focusRing(),
                "flex items-center gap-2 rounded opacity-100 transition-[opacity,transform] duration-300 ease-out",
                scrolled && "pointer-events-none -translate-x-2 opacity-0"
              )}
              aria-hidden={scrolled}
            >
              <div className="mt-1 font-bold text-lg text-sky-700 leading-normal tracking-tighter">
                {siteConfig.global.name}
              </div>
            </Link>
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
            <Nav scrolled={scrolled} items={config.nav.links} activeSection={activeSection} onNavItemClick={scrollToSection} />
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
  activeSection: Section;
  scrolled?: boolean;
  direction?: "col" | "row";
  onNavItemClick?: (section: Section) => void;
}

const Nav: FC<NavProps> = ({
  items,
  activeSection,
  scrolled,
  direction = "row",
  onNavItemClick,
}) => {

  return (
    <nav
      className={cn("flex items-center gap-0 sm:gap-2", {
        "flex-col gap-2": direction === "col",
      })}
    >
      {items.map(
        (item, index) => (
          <button
            key={index}
            className={cn(
              focusRing(),
              "flex relative items-center cursor-pointer justify-center gap-2 rounded px-4 py-1 text-md font-medium text-fg/60 transition-colors duration-300 group",
              scrolled ? "hover:bg-[#FEFFEB]/20" : "hover:bg-sky-700/80",
            )}
            onClick={() => onNavItemClick?.(item.id as Section)}
          >
            <span className={cn(
              "text-sky-700 relative",
              scrolled && "text-white"
            )}>
              {item.label}
            </span>
          </button>
        )
      )}
    </nav>
  );
};

export default Header;