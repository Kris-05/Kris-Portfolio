import React, { useRef, useState } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    tech: ["React", "Tailwind"],
    description: "Portfolio",
    image: "/map.png",
    tag: ["All", "Front-end"],
    gitUrl: "/",
    previewUrl: "current",
  },
  {
    id: 2,
    title: "Python to CPP",
    tech: ["Yacc", "CPP"],
    description: "Compiler Design Project",
    image: "map.png",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/Kris-05/Python-to-Cpp",
    previewUrl: "none",
  },
  {
    id: 3,
    title: "Gaming Website",
    tech: ["React", "Tailwind"],
    description: "One-piece themed website",
    image: "map.png",
    tag: ["All", "Front-end"],
    gitUrl: "/",
    previewUrl: "yet to be hosted",
  },
  {
    id: 4,
    title: "Not-Tube",
    tech: ["React", "Tailwind", "Redux"],
    description: "Youtube Clone",
    image: "map.png",
    tag: ["All", "Front-end"],
    gitUrl: "https://github.com/Kris-05/NotTube",
    previewUrl: "yet to be hosted",
  },
  {
    id: 5,
    title: "ATM-Simulator",
    tech: ["Java"],
    description: "SwingUI + CRUD operations",
    image: "map.png",
    tag: ["All", "JAVA"],
    gitUrl: "https://github.com/Kris-05/ATM-Simulator",
    previewUrl: "none",
  },
  {
    id: 6,
    title: "Harmonix",
    tech: ["Flutter", "CNN", "Mediapipe"],
    description: "Spotify clone",
    image: "map.png",
    tag: ["All", "Mobile App", "ML"],
    gitUrl: "https://github.com/Kris-05/Harmonix",
    previewUrl: "none",
  },
  // {
  //   id: 7,
  //   title: "Secure-Auth",
  //   tech: ["Node", "Express", "JWT", "MongoDB"],
  //   description: "Authentication + CRUD operations",
  //   image: "map.png",
  //   tag: ["All", "Back-end"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 7,
    title: "Secure-Auth",
    tech: ["Node", "Express", "JWT", "MongoDB"],
    description: "Authentication + CRUD operations",
    image: "map.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/Kris-05/Secure-Auth",
    previewUrl: "https://secure-auth-zveh.onrender.com",
  },
  {
    id: 8,
    title: "Expense-tracker",
    tech: ["MERN Stack"],
    description: "CRUD operations on expenses",
    image: "map.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/Kris-05/Expense-Dashboard",
    previewUrl: "yet to be hosted",
  },
  {
    id: 9,
    title: "Talkify",
    tech: ["MERN Stack", "Redux"],
    description: "Chat application",
    image: "map.png",
    tag: ["All", "Full-Stack"],
    gitUrl: "https://github.com/Kris-05/Talkify",
    previewUrl: "yet to be hosted",
  },
];

const projectTags = [
  "All",
  "Front-end",
  // "Back-end",
  "Full-Stack",
  "ML",
  "JAVA",
  "Mobile App",
];

const Projects = () => {
  const [tag, setTag] = useState("All");

  const ref = useRef(null);
  const isInView = useInView(ref);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredOnes = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="Projects">
      <div className="pt-10 flex justify-center">
        <p className="mt-6 md:mt-10 text-3xl md:text-5xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          My Projects
        </p>
      </div>
      <p className="text-center md:text-lg text-white/60 mt-4">
        Stuff I coded instead of sleeping... Ctrl + S'd masterpieces
      </p>
      <div className="text-white grid grid-cols-3 gap-2 p-6 sm:flex sm:flex-row sm:flex-wrap sm:justify-center">
        {projectTags.map((tagName, i) => (
          <ProjectTag
            key={i + tagName}
            onClick={handleTagChange}
            name={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 p-8">
        {filteredOnes.map((project, i) => (
          <motion.li
            key={i + tag}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{
              duration: 0.3,
              delay: i * 0.4,
            }}
          >
            <ProjectsCard
              key={project.id}
              title={project.title}
              tech={project.tech}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
