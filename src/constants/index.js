import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    meta,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tesla,
    carrent,
    jobit,
    tripguide,
    threejs,
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
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    {
      title: "Data Structure and Algorithm",
      icon: backend,
    },
    {
      title: "SQL",
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
      name: "Three JS",
      icon: threejs,
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
    // {
    //   title: "Backend Developer",
    //   company_name: "Wipro Limited(Telenor project)",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Nov 2021 - Oct 2022",
    //   points: [
    //     "Developing scalable web applications using Java and Spring Boot for optimal performance and maintainability.",
    //     "Collaborating with cross-functional teams to deliver user-friendly solutions with responsive design and cross-browser compatibility.",
    //     "Conducting code reviews and offering constructive feedback to ensure high-quality Java and Spring Boot development.",
    //     "Implementing security measures and staying abreast of the latest advancements in Java and Spring Boot technologies.",
    //     "Integrating third-party APIs and contributing to documentation for efficient, modular, and feature-rich web applications.",
    //   ]
    // },
   {
      title: "Web Developer",
      company_name: "Wipro Ltd.(NSE project)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    {
      title: "Web Developer",
      company_name: "Wipro Limited(Telnor project)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Exceptionally skilled and dedicated, my Java backend developer friend consistently delivers robust and efficient solutions, showcasing a profound understanding of backend technologies and a commitment to excellence.",
      name: "Shubham Jain",
      designation: "SDE-2",
      company: "Microsoft",
      image: "https://iili.io/JAzOs2t.jpg",
    },
    {
      testimonial:
        "With an impressive flair for React development, my friend excels in crafting seamless and dynamic user interfaces, demonstrating both expertise and passion for creating impactful web applications",
      name: "Piyush K Pandey",
      designation: "Principal Engineer",
      company: "IVP",
      image: "https://iili.io/JAzOhBV.jpg",
    },
    {
      testimonial:
        "His commitment to staying current with the latest React trends and his knack for turning complex requirements into elegant, user-friendly interfaces make him an invaluable asset to any development team",
      name: "Aman Prasad",
      designation: "Product Manager",
      company: "Zepto",
      image: "https://iili.io/JAzOvpa.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ShareMe",
      description:
        " ShareMe is an image-sharing app . Allow users to share their images online and also add comments,pins, and downloads.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://snapme-pratham.netlify.app/",
    },
    {
      name: "CryptoVerse",
      description:
        "Developed a React and Redux Toolkit based web application leveraging Rapid API, offering real-time cryptocurrency details, prices, news, and exchange information",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "AntDesign",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://cryptoverse-app-pr0698.netlify.app/",
    },
    {
      name: "Netflix-GPT",
      description:
        "Designed and built a feature-rich platform mirroring the functionality of a popular streaming service",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/pr0698/netflix-gpt",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };