import ArrowUpRightIcon from "@/components/icons/arrow-up-right";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/malo-miquel-65811ba9",
  },
  {
    title: "GitHub",
    href: "https://github.com/malomiquel",
  },
  {
    title: "GitLab",
    href: "https://gitlab.com/malomiquel",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-sky-700/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-sky-700 text-sky-700 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div>&copy; {new Date().getFullYear()} Tous droits réservés</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                key={link.title}
                className="inline-flex items-center gap-1.5 group"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}