import { getAge } from "@/utils/getAge";

export interface SkillGroup {
  category: string;
  items: string[];
}

const SKILLS: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "PostgreSQL", "GraphQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Linux"],
  },
];

export const ME = {
  name: "Namaste! I'm Ankit…",
  location: {
    city: "Nagpur",
    country: "IN",
  },
  age: getAge(new Date("2005-02-18")),
  position: "Software Engineer",

  // KEEP this for later real jobs
  workExperience: [],

  // NEW: skills (this is what we render now)
  skills: SKILLS,
   currentlyLearning: [
 
    "TypeScript(deep dive)",
    "Next.js App Router",
    "Backend Architecture",
    "GraphQL",
    "DevOps Basics",
    "System Design Basics",
  ],

  socialLinks: [
    { label: "email", link: "mailto:ankitmmehta08@gmail.com" },
    { label: "github", link: "https://github.com/Mehta0007" },
    { label: "X", link: "https://x.com/MehtaAnkit07" },
    { label: "linkedin", link: "https://www.linkedin.com/in/ankit-mehta-7340b034a" },
  ],
} as const;
