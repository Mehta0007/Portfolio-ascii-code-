export const PROJECTS = [
  {
    name: "Job Application Tracker",

    short: "Full-stack job tracking platform with auth and dashboards.",

    description:
      "Built a full-stack web application to help users manage and organize their job search using boards, authentication, and personal dashboards.",

    features: [
      "Secure email/password authentication with session management",
      "User-specific dashboards using MongoDB relationships",
      "Kanban-style board workflow",
      "Protected routes and auth state sync",
      "Responsive UI with Tailwind and shadcn/ui",
      "Production deployment on Vercel",
    ],

    challenges: [
      "Debugged MongoDB SSL and network issues",
      "Fixed server/client auth desync",
      "Designed scalable schemas",
      "Stabilized login/logout flows",
      "Handled env configuration in production",
    ],

    tech: [
      "Next.js (App Router)",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "Better Auth",
      "Tailwind",
      "shadcn/ui",
      "Vercel",
    ],

    live: "https://job-tracker.vercel.app",

    github: "https://github.com/Mehta0007/Job-Application-Tracker.git",

    status: "Active",
  },

  {
    name: "Brogram",

    short: "Workout planner for structured training routines.",

    description: "A simple 30-workouts training plan app.",

    features: ["Workout scheduling", "Progress tracking"],

    challenges: ["Basic state management", "UI responsiveness"],

    tech: ["ReactJS", "Tailwind", "JavaScript"],

    live: "https://brogram-workout-app.vercel.app",

    github: null,

    status: "Stable",
  },
];
