export const siteConfig = {
  global: {
    url: "http://localhost:3000",
    name: "Portfolio",
    logo: "/vercel.svg",
    title: "Portfolio",
    description: "My portfolio website.",
    keywords: [],
    authors: [
      {
        name: "Malo Miquel",
      },
    ],
    creator: "malomiquel",
    thumbnail: "/images/thumbnail.png",
    twitter: {
      creator: "@mehdibha_",
    },
  },
  links: {
    github: "https://github.com/malomiquel",
    linkedin: "https://www.linkedin.com/in/malo-miquel-65811ba9",
  },
  header: {
    nav: {
      links: [
        { id: "hero", label: "Accueil", translate: 25 },
        { id: "projects", label: "Projets", translate: 180 },
        { id: "about", label: "A propos", translate: 340 },
        { id: "contact", label: "Contact", translate: 510 },
      ],
    },
  },
};
