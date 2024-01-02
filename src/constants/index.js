import { a } from "maath/dist/objectSpread2-284232a6.esm";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    cpp,
    tailwind,
    nodejs,
    mysql,
    git,
    figma,
    dtu,
    pwd,
    luminaai,
    expensetracker,
    covidtracker,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",

    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Competitive Programmer",
      icon: mobile,
    },
    {
      title: "Learner",
      icon: backend,
    },
    {
      title: "Freelancer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Batchlar of Technology",
      company_name: "Delhi Technological University",
      icon: dtu,
      iconBg: "#383E56",
      date: "Aug 2019 - May 2023",
      points: [
        "Graduated as a Bachelor of Technology in Electrical Engineering.",
        "Mentored high school students in Delhi Govt's Desh Ke Mentor program, offering career and academic guidance",
        "Conducted workshops on Web Development for students of Delhi Technological University."
      ],
    },
    {
      title: "Auditor | Intern",
      company_name: "PWD",
      icon: pwd,
      iconBg: "#383E56",
      date: "May 2022 - July 2022",
      points: [
        "Conducted performance testing and analysis of Wi-Fi systems at over 45 locations in Delhi",
        "Contribution to a project aimed at improving Wi-Fi connectivity and performance for the citizens of Delhi.",
        "Project of GOVERNMENT OF DELHI executed by PWD Delhi.",
      ],
    }
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
      source_code_link: "https://github.com/Tusharknwl/Lumina_AI",
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
      source_code_link: "https://github.com/Tusharknwl/expense-tracker",
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
      source_code_link: "https://github.com/Tusharknwl/covid-19-tracker",
    },
  ];
  
  export { services, technologies, experiences, projects };