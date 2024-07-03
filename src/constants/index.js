import {
  javascript,
  html,
  css,
  reactjs,
  cpp,
  tailwind,
  nodejs,
  mysql,
  git,
  figma,
  luminaai,
  expensetracker,
  covidtracker,
  oldPortfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    duration: 5,
  },
  {
    name: "CSS 3",
    icon: css,
    duration: 3,
  },
  {
    name: "JavaScript",
    icon: javascript,
    duration: 6,
  },
  {
    name: "C++",
    icon: cpp,
    duration: 7,
  },
  {
    name: "React JS",
    icon: reactjs,
    duration: 4,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    duration: 2.5,
  },
  {
    name: "Node JS",
    icon: nodejs,
    duration: 6,
  },
  {
    name: "Mysql",
    icon: mysql,
    duration: 3,
  },
  {
    name: "git",
    icon: git,
    duration: 8,
  },
  {
    name: "figma",
    icon: figma,
    duration: 2,
  },
];

const experiences = [
  {
    title: "Batchlar of Technology",
    company_name: "Delhi Technological University",
    date: "Aug 2019 - May 2023",
    description:
      "I completed my Bachelor of Technology in Electrical Engineering with CGPA of 7.81 from Delhi Technological University. Additional-coursework : Programming Fundamentals, Data Structures, Object Oriented Programming",
  },
  {
    title: "Auditor | Intern",
    company_name: "PWD Delhi",
    date: "Feb 2021 - Apr 2021",
    description:
      "I worked as an intern in the Public Works Department of Delhi, where I successfully conducted rigorous performance testing of Wi-Fi systems across more than 45 locations throughout Delhi, identified and resolved connectivity issues, which resulted in a 25% increase in network stability",
  },
];

const projects = [
  {
    name: "Lumina.AI",
    description:
      "An open source Saas platform to help users to use many AI tools such as AI assistant , image, code, music and video generation in one platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: luminaai,
    source: "https://luminaai.tech",
    source_code_link: "https://github.com/Tusharknwl/Lumina_AI",
    hoverColors: ["#56a5ff4b", "#56a5ffad"],
  },
  {
    name: "Expense Tracker",
    description:
      "A simple expense tracker app that allows users to add and remove transactions and displays the total balance, integrated with speechly for voice commands.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "contextAPI",
        color: "violet-text-gradient",
      },
      {
        name: "speechly",
        color: "pink-text-gradient",
      },
    ],
    image: expensetracker,
    source: "https://kharcha-expense-tracker.netlify.app",
    source_code_link: "https://github.com/Tusharknwl/expense-tracker",
    hoverColors: ["#8181814b", "#818181a2"],
  },
  {
    name: "Covid-19 Tracker",
    description:
      "A web based react app that displays the covid-19 cases, recovered and deaths of all the countries and also displays the data in the form of line charts.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
    ],
    image: covidtracker,
    source: "https://covid-19-tracker-xtq1.vercel.app",
    source_code_link: "https://github.com/Tusharknwl/covid-19-tracker",
    hoverColors: ["#df6ff52d", "#de6ff581"],
  },
  {
    name: "Portfolio v1.0",
    description:
      "Previous version of my portfolio website, built using pure HTML, CSS and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: oldPortfolio,
    source: "https://tusharknwl.github.io/portfolio-2021/",
    source_code_link: "https://tusharknwl.github.io/portfolio-2021/",
    hoverColors: ["#78fdd538", "#78fdd57c"],
  },
];

export { technologies, experiences, projects };
