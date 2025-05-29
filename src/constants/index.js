import {
    mobile,
    backend,
    creator,
    blog,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    redux,
    mongodb,
    git,
    meta,
    udemy,
    metaversus,
    travel_app,
    rickandmorty,
    threejs,
    javascriptMastery,
    awwards
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
      title: "Front-end Developer",
      icon: web,
    },
    {
      title: "React.js Specialist",
      icon: mobile,
    },
    {
      title: "UI/UX-Focused Web Developer",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Redux",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];

  const experiences = [
    {
      title: "Next.js & React Developer",
      company_name: "maximilian schwarzmüller",
      icon: udemy,
      iconBg: "#E6DEDD",
      points: [
        "Learn all key NextJS features like pre-rendering, SSR, data fetching, file-based routing and authentication",
        "Build real projects and apply what you learned with hands-on projects and examples",
        "Learn how to build client-side and fullstack ReactJS apps with NextJS",
        "Take the full course or the 'NextJS Summary' module for a quickstart if you have limited time",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Javascript Mastery",
      icon: javascriptMastery,
      iconBg: "#E6DEDD",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "learned how to influently work with libraries like Next.js , vite and Three.js",
        "Got familliar with animating my website using framer motion",
        "learned the structure of AI and how to use it in my projects",
      ],
    },
    {
      title: "Front-end Development",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      points: [
        "Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences. ",
        "Learn to use React in relation to Javascript libraries and frameworks.",
        "Learn Bootstrap CSS Framework to create webpages and work with GitHub repositories and version control.",
        "Prepare for a coding interview, learn best approaches to problem-solving, and build portfolio-ready projects you can share during job interviews.",
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [

    {
      name: "Metaversus",
      description:
        "Metaversus is a modern Next13 website with Framer motion and tailwind css",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: metaversus,
      source_code_link: "https://github.com/parmiiida/Metaversus",
      web_link:"https://metaversus-8veu.vercel.app/"
    },
    {
      name: "Rick and Morty",
      description:
        "Rick and Morty website is one of my first examples of working with API and Redux useing Reactjs",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "TypeSctript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        }
      ],
      image: rickandmorty,
      source_code_link: "https://github.com/parmiiida/rick-morty",
      web_link:"https://rick-morty-iota-teal.vercel.app/"

    },
    {
      name: "Travel_app",
      description:
        "Travel app is well UI designed website with a perfect User Interface which helps you have a perfect experience booking your travel",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: travel_app,
      source_code_link: "https://github.com/parmiiida/travel-app",
      web_link:"https://travel-app-chi-six.vercel.app/"
    },
    {
      name: "Awwards clone",
      description:
        "A cleanly animated website inspired by Awwwards, built using GSAP for smooth, modern transitions and interactions.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "green-text-gradient",
        },
      ],
      image: awwards,
      source_code_link: "https://github.com/parmiiida/awwards-clone",
      web_link:"https://awwards-clone-two.vercel.app/"

    },

  ];

  export { services, technologies, experiences, testimonials, projects };