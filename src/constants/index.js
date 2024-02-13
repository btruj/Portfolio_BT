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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    Getuwired,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "Full Stack Developer",
      icon: backend,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
 
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Broward College",
      company_name: "Associate Degree",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Graduated - June 2013",
      points: [
        " Completed courses: Introduction to Business, Accounting Principles, Marketing Fundamentals, and several other math classes (algebra, statistics and calculus).",
        " Computer courses that taught me Office 365 (Word, Excel, PowerPoint, and Microsoft Teams."
      ],
    },
    {
      title: "Florida Atlantic University",
      company_name: "Bachelor Degree in Management Information Systems",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Graduated - Aug 2017",
      points: [
        "12 credits of Management Information System courses, including Intro to Computer System & Software Development, Database Management Systems, Introduction to Business Intelligence, and Computer Forensics.",
        "51 credits of core business courses, including Principles of Accounting, Business Finance, Business Information Tools, and Business Management.",
        "Completed Coding projects in Java and SQL in order to graduate."
        
      ],
    },
    {
      title: "Technical Support Specialist",
      company_name: "Digital South",
      icon: shopify,
      iconBg: "#383E56",
      date: "Oct 2016 - Dec 2017",
      points: [
        "Worked in a team environment.",
        "Organized assigned ticket queues by prioritizing critical issues and effectively managing time to address tasks in a time-sensitive manner.",
        "Provided technical support to internal/external customers for VoIP-related incidents, requests, and inquiries relating to various business products and services.",
        "Programmed VOIP phones and handle installation process at clients location.",
      ],
    },
    {
      title: "(Pre-Training Program) Software Developer",
      company_name: "Revature",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Virtual learning program with trainer and primary mentor to guide me through the process.",
        "Using GitPod to complete coding assignments, coding challenges, and projects to complete Revature Curriculum.",
        "Learning fundamentals of Java, SQL, GIT, Linux commands, and interview preparation.",
        "Program designed to guide me qualify for a career Software Engineer."
      ],
    },
    {
      title: "Jr. Full Stack Developer",
      company_name: "GetUwired",
      icon: Getuwired,
      iconBg: "#383E56",
      date: "May 2023 - Sept 2023",
      points: [
        "Update, maintain and craft custom websites.",
        "Implement marketing strategies associated with membership sites, newsletter signups, and various CRM platforms.",
        "Used both frontend and backend technologies to build dynamic web sites for clients.",
        "Constantly developing new fixes and integrations."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Great implementation by @btruj. Thanks Bryan! - (regarding Issue #50 open source contribution I completed on tampadevs github.)" ,
      name: "Charlton Trezevant",
      designation: "Vice President",
      company: "TampaDevs",
      image: creator,
    },
    {
      testimonial:
        "I want you to know I thought you did a great job of helping me with the things I asked of you.",
      name: "Dave White",
      designation: "President",
      company: "Digital South",
      image: shopify,
    },
  ];
  
  const projects = [
    {
      name: "My Daily Journal",
      description:
        "Saves journal entries in MongoDB database for users.",
      tags: [
        {
          name: "EJS",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "my-daily-journal.onrender.com/",
    },
    {
      name: "Newsletter Sign-Up",
      description:
        "MailChimp API is used for this project and user gets saved to Mailchimp database.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://newsletter-nji3.onrender.com/",
    },
    {
      name: "Todo-List",
      description:
        "Saves specific list in MongoDB database.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "EJS",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://todo-list-3fhr.onrender.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
