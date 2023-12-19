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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
    {
      title: "Backend Developer",
      company_name: "Wipro Limited(Telenor project)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2021 - Oct 2022",
      points: [
        "Developing scalable web applications using Java and Spring Boot for optimal performance and maintainability.",
        "Collaborating with cross-functional teams to deliver user-friendly solutions with responsive design and cross-browser compatibility.",
        "Conducting code reviews and offering constructive feedback to ensure high-quality Java and Spring Boot development.",
        "Implementing security measures and staying abreast of the latest advancements in Java and Spring Boot technologies.",
        "Integrating third-party APIs and contributing to documentation for efficient, modular, and feature-rich web applications.",
      ]
    },
   {
      title: "React Developer",
      company_name: "Wipro Ltd.(NSE project)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Feb 2023",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };