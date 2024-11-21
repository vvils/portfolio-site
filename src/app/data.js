/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "UniFyte",
    description:
      "University petition site built using Next.js. Implemented authentication, AI tools (OpenAI, Langchain), and visual statistics (D3.js).",
    date: "Aug 2024 - Present",
    demoLink: "https://unifyte.vercel.app/",
  },
  {
    id: 2,
    name: "AI Quizzer",
    description:
      "Educational platform for creating AI-generated quizzes from PDFs using OpenAI and Langchain. Built with Next.js and MongoDB.",
    date: "July 2024 - Present",
    demoLink: "#",
  },
  {
    id: 3,
    name: "OTunes",
    description:
      "Audio player app built with OCaml, featuring playlist management, local/YouTube streaming, and a custom GUI using the Bogue library.",
    date: "Jan 2023 - May 2023",
    demoLink: "#",
  },
  {
    id: 4,
    name: "Plotgress",
    description:
      "Fitness app simplifying progress tracking and trend analysis, providing personalized goals, workout stats, and social engagement features with a focus on user privacy.",
    date: "Mar 2023 - Present",
    demoLink: "#",
  },
  {
    id: 5,
    name: "Gabe Goes Green",
    description:
      "Python-based video game focused on environmental sustainability, featuring two interactive NPCs and mini-games developed during Cornell's Big Red Hacks.",
    date: "Oct 2022",
    demoLink: "#",
  },
  {
    id: 6,
    name: "Space Invaders Clone",
    description:
      "Python-based Space Invaders clone built with Kivy, featuring a scoring system, animations, player lives, and a menu system with pausing and cheats.",
    date: "Jun 2022",
    demoLink: "#",
  },
  {
    id: 7,
    name: "BombParty-Script",
    description:
      "Python script for the game 'Bomb Party,' utilizing image processing to detect the player's turn and optimize word selections for competitive advantage.",
    date: "Mar 2022 - Apr 2022",
    demoLink: "#",
  },
  {
    id: 8,
    name: "Museum of Candy",
    description:
      "Website showcasing visually appealing candy images with descriptions, built using HTML, CSS (Bootstrap), and JavaScript for a dynamic and user-friendly experience.",
    date: "2022",
    demoLink: "#",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/vvils",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/wilsweng",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Spotify",
    link: "https://open.spotify.com/user/31v5p5dsfhzj4r65wjrjdt76o7si?si=cf17b46c16954b97",
    icon: "music",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/csresume2024.pdf",
    icon: "resume",
    newTab: true,
  },
];
